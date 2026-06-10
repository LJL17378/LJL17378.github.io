---
title: 【从前端开始学AI】DAY3：打造基于 Tool Call 与双端 Zod 验证的“生成式 UI”系统
slug: >-
  cong-qian-duan-kai-shi-xue-ai-day3-da-zao-ji-yu-tool-call-yu-shuang-duan-zod-yan-zheng-de-sheng-cheng-shi-ui-xi-tong
publishedAt: '2026-01-13'
updatedAt: '2026-01-13'
summary: >-
  引言 目前我们开发的 AI 应用说到底虽然可以渲染 Markdown 文本，但是面对复杂的数据的时候（如股票 K
  线、航班选座）的体验会比较差，甚至有的时候只能试图用 ASCII
  码画一个图表，表现力比较差，并且现在是不记得上下文的，那么我们今天的目标就是让它可以记忆，并且改造它的“大脑”并加上“手
tags:
  - AI
draft: false
sourceFile: 【从前端开始学AI】DAY3：打造基于 Tool Call 与双端 Zod 验证的“生成式 UI”系统.md
---
# 引言
目前我们开发的 AI 应用说到底虽然可以渲染 `Markdown` 文本，但是面对复杂的数据的时候（如股票 K 线、航班选座）的体验会比较差，甚至有的时候只能试图用 `ASCII` 码画一个图表，表现力比较差，并且现在是不记得上下文的，那么我们今天的目标就是让它可以记忆，并且改造它的“大脑”并加上“手臂”。

# 代码实现
## 上下文
现在我们的 AI 应用还存在着一个问题，那就是它没有记忆，只能利用早已学的内容对用户的消息进行回答，对上下文完全没有记忆，和这样的 AI 聊天很累，那我每次都得把我们的消息都 **CV** 一遍发给它不成？既然这样那干脆就将上下文发给大模型好了。

就像这样修改 `route.ts`
```ts
export async function POST(req: Request) {
  const { messages } = await req.json();
  // 提取 messages 数组
  const result = streamText({
    model: deepseek("deepseek-chat"),
    messages,
  // 附加上 messages 数组
  // ........中间省略

  });

  return result.toDataStreamResponse();
}
```
此时 AI 就能够读取到上下文了。
> **完整的代码**会直接贴到博客的最后部分，如果单纯想看效果的话可以直接跳到最后自己 **CV** 一下。

## 生成式 UI
那么今天的任务涉及到了一个新的概念：**生成式 UI**。

**定义**：它不是预先写死的页面，而是由 AI 根据用户的意图（`Intent`）和实时数据，动态决定渲染哪个 UI 组件。让 AI 应用具备了强大的交互能力，同时保持了对话的自然流畅。就比如说你想象一下，如果你做了一个知识库的 AI 应用，在对话中引用了知识库中视频的一个片段，如果可以直接在回答中插入一个视频播放器卡片播放指定片段，在用户角度看来是不是会比较方便？那么这个生成式 UI 就会让这个 AI 应用有更强大的表现力和交互性。

在我们了解了这个概念之后，后面我们会一步步去实现它。

## 三明治模型
既然这玩意这么好，那我们该如何正确并保证它实现呢？

我们设计了三层：
1. **后端工具层**
   - **职责**：提供事实（`Grounding`）。这是 Agent 的“手”。它的任务是去真实世界（`API`、数据库）抓取数据。如果没有这一层，AI 就会开始瞎编（幻觉）。

2. **LLM 协议层**
   - **职责**：转换与编排（`Orchestration`）。这是 Agent 的“大脑”。它不仅要理解用户说的话（“查苹果”），还要决定是否调用工具，最重要的是，它负责把工具返回的丑陋 `JSON`，转换成前端能看懂的协议（`UI Schema`）。

3. **前端渲染层**
   - **职责**：防御与展示（`Defense & Rendering`）。这是 Agent 的“脸”。它负责把冰冷的数据变成漂亮的 UI。同时，它也是最后一道防线，防止 AI 因为发疯输出脏数据而导致页面崩溃。

## Tool Call
在这里我们需要给 AI 提供可供调用的工具，类似可供调用的 `API` 等。

`app/api/chat/route.ts`

关键代码：`tools` 定义部分。
```ts
const result = streamText({
    //...
    tools: {
      getStockPrice: tool({
        description:
          "获取指定股票代码的实时价格和涨跌幅 (例如: AAPL, TSLA, 茅台)",
        // Zod Schema: 严格校验 AI 传进来的参数
        parameters: z.object({
          symbol: z.string().describe("股票代码/Ticker Symbol"),
        }),
        // 工具的执行逻辑
        execute: async ({ symbol }) => {
          console.log(`[Server] 正在查询股票: ${symbol}`);

          // ⚠️ 模拟真实 API 请求 (你可以换成 Yahoo Finance 或 Alpha Vantage 的 fetch)
          // 这里为了演示，我们动态生成一些“看起来很真”的数据
          await new Promise((resolve) => setTimeout(resolve, 600)); // 模拟网络延迟

          const basePrice = Math.random() * 200 + 100; // 100~300 之间的随机价格
          const delta = (Math.random() - 0.4) * 5; // -2% ~ +3% 的随机波动

          return {
            symbol: symbol.toUpperCase(),
            price: Number(basePrice.toFixed(2)),
            delta: Number(delta.toFixed(2)),
            currency: "USD",
            timestamp: new Date().toISOString(),
          };
        },
      }),
    },
    //..
  });
```

## Prompt
那么此时 AI 有了这个工具，我们要怎么告诉 AI 它可以使用这个工具以及怎么转换数据呢？当然是写提示词啦。

`app/api/chat/route.ts`

关键修改：`system`（System Prompt）
```ts
system: `你是一个专业的金融交易助手。

    【工作流程】
    1. 当用户询问股票（如价格、走势、行情）时，**必须**优先调用 \`getStockPrice\` 工具获取真实数据。
    2. **不要**自己编造股价数据。
    3. 获取到工具返回的数据后，如果数据有效，**必须**输出一个 Markdown 代码块来展示 UI 卡片。

    【UI 渲染协议】
    代码块语言标记：stock-ui
    数据结构要求（JSON）：
    {
      "symbol": "AAPL",
      "price": 150.25,   // 必须是数字
      "delta": 1.5       // 必须是数字，表示涨跌额
    }

    【回复示例】
    用户：查一下特斯拉现在的价格。
    (你调用工具...)
    (工具返回数据...)
    你：特斯拉（TSLA）的最新行情如下：
    \`\`\`stock-ui
    {
      "symbol": "TSLA",
      "price": 240.50,
      "delta": -3.20
    }
    \`\`\`
    目前看起来略有下跌，建议观望。
    `,
```    
这里的做了些啥：LLM 在这里充当了一个 **“Runtime Converter”**，它把 `API` 的数据格式（`Backend Schema`）实时翻译成了组件需要的数据格式（`Frontend Schema`）。

## Code Block 渲染劫持
这个 Code Block 渲染劫持到底是什么呢？其实就是利用 `Markdown` 解析器的自定义组件功能，拦截特定语言标记（`Language Tag`）的代码块，阻止其被渲染为普通的文本代码，转而将代码块内的内容作为数据（`Props`），实例化并渲染一个完全不同的 React 组件。

新建 `app/components/StockCard.tsx`
```ts
// app/components/StockCard.tsx
import { z } from "zod";

// 1. 定义数据结构的“法律” (Schema)
export const StockCardSchema = z.object({
  symbol: z.string(),
  price: z.number(),
  delta: z.number(),
  currency: z.string().optional().default("USD"),
});

// 2. 推导出 TypeScript 类型
type StockCardData = z.infer<typeof StockCardSchema>;

// 3. 纯展示组件
export function StockCard({ data }: { data: StockCardData }) {
  const isUp = data.delta >= 0;

  return (
    <div className="inline-block align-middle my-4 p-4 rounded-xl border border-gray-200 bg-white shadow-sm w-64">
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-xl">{data.symbol}</h3>
        <span
          className={`px-2 py-0.5 rounded text-sm font-bold ${
            isUp ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
          }`}
        >
          {isUp ? "↑" : "↓"} {Math.abs(data.delta)}%
        </span>
      </div>
      <div className="mt-2 text-2xl font-black">
        {data.currency === "USD" ? "$" : "¥"}
        {data.price.toFixed(2)}
      </div>
    </div>
  );
}
```

`app/components/MarkdownRenderer.tsx`

关键代码：code 拦截器 + Zod 校验。
```ts

// 👇 拦截器：看到 stock-ui 就兴奋
if (!inline && language === "stock-ui") {
    try {
        const jsonData = JSON.parse(codeContent);
        // 🛡️ 使用 Zod 进行运行时数据校验 (前端防火墙)
        const parseResult = StockCardSchema.safeParse(jsonData);

        if (parseResult.success) {
            // ✅ 校验通过，渲染 React 组件
            return (
            <div className="not-prose font-sans my-5">
                <StockCard data={parseResult.data} />
            </div>
            );
        }
    } catch (e) {
        // 解析失败（可能还在流式传输中），静默失败，继续往下走渲染成代码
    }
}
```
## Zod Schema 校验
在`app/components/StockCard.tsx`我们写了这么一个东西
```ts
export const StockCardSchema = z.object({
  symbol: z.string(),
  price: z.number(),
  delta: z.number(),
  currency: z.string().optional().default("USD"),
});
```
在这里我们就可以使用我们之前所说的 `zod` 来对数据进行校验，因为归根结底我们也只是通过提示词给了大模型一些建议，我们没办法预测大模型到底会输出什么（毕竟大模型在干的事情也只是预测），通过使用`safeParse`进行检验我们就可以进行兜底，不会出现渲染错误白屏问题。
## why zod
那你可能会有些疑惑，我们为什么要使用`zod`呢？它看起来和`TypeScript`有点像啊。
那我们为什么要选择`zod`不选择`TypeScript`呢
实际上ts只存在于编译时，等到了运行时它就已经不存在了，而zod却是实打实存在于运行时的js代码
我们可以从这个角度理解：TypeScript 是为了防止程序员写出错误的代码（比如拼写错误）。 Zod 是为了防止外部世界（用户输入、API、AI）传入错误的数据。
AI 开发中，AI 的输出本质上是不可控的外部输入。为了保证 App 的健壮性，我们必须假设 AI 会犯错，并用 Zod 在运行时守住最后一道防线。
这就是为什么我们要选择 Zod
## 效果
![](https://raw.githubusercontent.com/LJL17378/my-img/main/20260114013643958.png)
## 完整代码
`app/components/StockCard.tsx`
```tsx
// app/components/StockCard.tsx
import { z } from "zod";

// 1. 定义数据结构的“法律” (Schema)
export const StockCardSchema = z.object({
  symbol: z.string(),
  price: z.number(),
  delta: z.number(),
  currency: z.string().optional().default("USD"),
});

// 2. 推导出 TypeScript 类型
type StockCardData = z.infer<typeof StockCardSchema>;

// 3. 纯展示组件
export function StockCard({ data }: { data: StockCardData }) {
  const isUp = data.delta >= 0;

  return (
    <div className="inline-block align-middle my-4 p-4 rounded-xl border border-gray-200 bg-white shadow-sm w-64">
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-xl">{data.symbol}</h3>
        <span
          className={`px-2 py-0.5 rounded text-sm font-bold ${
            isUp ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
          }`}
        >
          {isUp ? "↑" : "↓"} {Math.abs(data.delta)}%
        </span>
      </div>
      <div className="mt-2 text-2xl font-black">
        {data.currency === "USD" ? "$" : "¥"}
        {data.price.toFixed(2)}
      </div>
    </div>
  );
}

```
`app/components/MarkdownRenderer.tsx`
```tsx
// app/components/MarkdownRenderer.tsx
"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ComponentPropsWithoutRef } from "react";
// 假设你的 StockCard 和 Schema 都在这里，或者你从单独文件引入
import { StockCard, StockCardSchema } from "./StockCard";

interface MarkdownRendererProps {
  content: string;
}

type CodeProps = ComponentPropsWithoutRef<"code"> & {
  inline?: boolean;
};

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    // 使用 Tailwind Typography，但允许内部元素通过 not-prose 逃逸
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // 🔥 1. 剥离 <pre> 标签
          // 这是为了防止 StockCard 被强制包裹在黑色的 pre 容器中
          pre: ({ children }) => <>{children}</>,

          // 🔥 2. 自定义代码块渲染逻辑
          code({ inline, className, children, ...props }: CodeProps) {
            const match = /language-(\S+)/.exec(className || "");
            const language = match ? match[1] : "";
            const codeContent = String(children).replace(/\n$/, "");
            if (!inline && language === "stock-ui") {
              try {
                const jsonData = JSON.parse(codeContent);
                // 🛡️ 使用 Zod 进行运行时数据校验 (前端防火墙)
                const parseResult = StockCardSchema.safeParse(jsonData);

                if (parseResult.success) {
                  // ✅ 校验通过，渲染 React 组件
                  return (
                    <div className="not-prose font-sans my-5">
                      <StockCard data={parseResult.data} />
                    </div>
                  );
                }
              } catch (e) {
                // 解析失败（可能还在流式传输中），静默失败，继续往下走渲染成代码
              }
            }
            if (!inline && match) {
              return (
                <div className="not-prose rounded-md overflow-hidden my-4 bg-[#1d1f21]">
                  <SyntaxHighlighter
                    style={atomDark as any}
                    language={language}
                    PreTag="div" // 必须用 div，因为外层已经没有 pre 了
                    {...props}
                    // ✨ 核心样式修正：
                    // margin: 0 -> 消除 SyntaxHighlighter 默认的外边距
                    // padding: '1rem' -> 恢复代码块内部原本舒适的间距
                    // background: 'transparent' -> 让它透出我们外层 div 的背景色
                    customStyle={{
                      margin: 0,
                      padding: "1rem",
                      background: "transparent",
                    }}
                  >
                    {codeContent}
                  </SyntaxHighlighter>
                </div>
              );
            }
            return (
              <code
                className={`${className} bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-gray-900 dark:text-gray-100`}
                {...props}
              >
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

```
`app/api/chat/route.ts`
```ts
import { createOpenAI } from "@ai-sdk/openai";
import { streamText, tool } from "ai";
import { z } from "zod";

// 保持你原有的 DeepSeek 配置
const deepseek = createOpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseURL: "https://api.deepseek.com",
});

export const runtime = "edge"; // 推荐在 Vercel 上使用 edge runtime

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: deepseek("deepseek-chat"),
    messages,

    // 🔥 关键配置 1: 允许的最大交互步数
    // 必须 > 1，否则 AI 调用完工具就会停下，不会把结果写回给你
    maxSteps: 5,

    // 🔥 关键配置 2: 定义工具 (后端的数据触手)
    tools: {
      getStockPrice: tool({
        description:
          "获取指定股票代码的实时价格和涨跌幅 (例如: AAPL, TSLA, 茅台)",
        // Zod Schema: 严格校验 AI 传进来的参数
        parameters: z.object({
          symbol: z.string().describe("股票代码/Ticker Symbol"),
        }),
        // 工具的执行逻辑
        execute: async ({ symbol }) => {
          console.log(`[Server] 正在查询股票: ${symbol}`);

          // ⚠️ 模拟真实 API 请求 (你可以换成 Yahoo Finance 或 Alpha Vantage 的 fetch)
          // 这里为了演示，我们动态生成一些“看起来很真”的数据
          await new Promise((resolve) => setTimeout(resolve, 600)); // 模拟网络延迟

          const basePrice = Math.random() * 200 + 100; // 100~300 之间的随机价格
          const delta = (Math.random() - 0.4) * 5; // -2% ~ +3% 的随机波动

          return {
            symbol: symbol.toUpperCase(),
            price: Number(basePrice.toFixed(2)),
            delta: Number(delta.toFixed(2)),
            currency: "USD",
            timestamp: new Date().toISOString(),
          };
        },
      }),
    },

    // 🔥 关键配置 3: 升级后的 System Prompt
    // 连接 "工具结果" 和 "UI渲染" 的桥梁
    system: `你是一个专业的金融交易助手。

    【工作流程】
    1. 当用户询问股票（如价格、走势、行情）时，**必须**优先调用 \`getStockPrice\` 工具获取真实数据。
    2. **不要**自己编造股价数据。
    3. 获取到工具返回的数据后，如果数据有效，**必须**输出一个 Markdown 代码块来展示 UI 卡片。

    【UI 渲染协议】
    代码块语言标记：stock-ui
    数据结构要求（JSON）：
    {
      "symbol": "AAPL",
      "price": 150.25,   // 必须是数字
      "delta": 1.5       // 必须是数字，表示涨跌额
    }

    【回复示例】
    用户：查一下特斯拉现在的价格。
    (你调用工具...)
    (工具返回数据...)
    你：特斯拉（TSLA）的最新行情如下：
    \`\`\`stock-ui
    {
      "symbol": "TSLA",
      "price": 240.50,
      "delta": -3.20
    }
    \`\`\`
    目前看起来略有下跌，建议观望。
    `,
  });

  return result.toDataStreamResponse();
}

```
`app/psge.tsx`
```tsx
"use client";

import { useChat } from "@ai-sdk/react";
import { MarkdownRenderer } from "./components/MarkdownRenderer";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, status } =
    useChat();

  return (
    <div className="flex flex-col w-full h-screen max-w-3xl mx-auto bg-white dark:bg-black">
      {/* 消息列表区域 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-32">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex flex-col w-full ${
              m.role === "user" ? "items-end" : "items-start"
            }`}
          >
            <div
              className={`max-w-[90%] rounded-2xl px-4 py-3 shadow-sm ${
                m.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              }`}
            >
              {/* 🔥 核心变化：
                 这里不需要再判断 toolInvocations 了。
                 因为 AI 会把组件数据写在 content 里 (作为代码块)，
                 MarkdownRenderer 会自动识别并渲染成卡片。
              */}
              {m.role === "user" ? (
                <div className="whitespace-pre-wrap">{m.content}</div>
              ) : (
                <MarkdownRenderer content={m.content} />
              )}
            </div>
          </div>
        ))}

        {/* Loading 状态 */}
        {status === "submitted" && (
          <div className="flex justify-start">
            <div className="text-gray-400 text-sm ml-2 animate-pulse">
              Thinking...
            </div>
          </div>
        )}
      </div>

      {/* 底部输入框 */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-black/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex gap-2">
          <input
            className="flex-1 p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            onChange={handleInputChange}
            placeholder="试试问：分析一下 AAPL 和 MSFT 的对比"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium disabled:opacity-50"
            disabled={status === "streaming" || !input}
          >
            发送
          </button>
        </form>
      </div>
    </div>
  );
}

```
# 总结
今天学习的东西其实很多，包括 上下文记忆，生成式UI，toolcall，zod，code block 渲染劫持等，干货还是比较多的，值得深挖的东西也很多，希望后面可以好好学习
