---
title: 【从前端开始学AI】DAY1：创建一个ChatBot
---
# 前言
其实此处应该有前言，介绍我的学习计划，但是我有点偷懒了，所以先空着吧

# 今日目标
今天的目标非常简单，我们打算基于`Next.js`，`Vercel AI SDK`和`OpenAI SDK`来跑通第一个 AI 聊天应用，并实现**“打字机”流式效果**。

简单来说我们今天要做的就是 **make it work** ，**make it better** 的时候就交给后面再说，简单来说就是我们要先找信心和对 AI 聊天机器人祛媚。

# 创建应用
```bash
npx create-next-app@latest ai-learning-day1
```
通过这一行命令创建一个`Next.js`应用
```bash
? Would you like to use the recommended Next.js defaults? › - Use arrow-keys. Return to submit.
❯   Yes, use recommended defaults
    TypeScript, ESLint, Tailwind CSS, App Router
    No, reuse previous settings
    No, customize settings
```
直接回车就好，这个推荐配置就够用了

## 安装依赖
```bash
npm install ai@^4.0.0 @ai-sdk/react@^1.0.0 @ai-sdk/openai@^1.0.0 zod@^3.23.8
```
那么在这次依赖安装中我们安装了哪些依赖呢？

1. `ai` (**Core**)

- **角色**：`核心引擎` / `大脑`。

- **作用**：这是 `Vercel AI SDK` 的子模块。它不依赖于任何特定的框架（React/Vue）或特定的模型（OpenAI/DeepSeek）。它定义了标准：

    - 怎么处理流式传输（Streaming）？

    - 怎么定义一条消息（User/Assistant）？

    - 怎么处理工具调用（Tool Calling）？

2. `@ai-sdk/react` (**UI Hooks**)

- **角色**：`React 适配器`。

- **作用**：核心引擎是纯 JS 写的，React 组件看不懂。这个包把核心引擎的功能封装成了 React Hooks，比如 `useChat`。

    - 它负责监听 `input` 变化。

    - 它负责把后端传回来的流（Stream）实时渲染到屏幕上。

    - 它负责管理 `Loading` 状态。

3. `@ai-sdk/openai` (**Provider**)

- **角色**：`翻译官` / `驱动程序`。

- **作用**：`ai` 核心库不知道 OpenAI 的接口长什么样，也不知道 DeepSeek 的接口长什么样。这个包专门负责把标准指令翻译成 OpenAI 兼容的 API 请求格式。

    - **注意**：因为 DeepSeek 是兼容 OpenAI 格式的，所以我们直接用这个包就能驱动 DeepSeek，不需要专门下载 DeepSeek 的包。

4. `zod` (**Schema Validation**)

- **角色**：`安检员` / `数据校验器`。

- **作用**：在 AI 开发中，`Zod` 无处不在。

    - **结构化输出**：当你要求 AI 返回 JSON 时，`Vercel SDK` 会用 `Zod` 来检查 AI 返回的数据格式对不对。

    - **工具调用**：当你给 AI 定义工具（比如“查天气”）时，参数的类型定义也是用 `Zod` 描述的。

还有一件事你可能会感到很奇怪，为什么这些依赖需要显示地指明版本号呢？
主要是我在安装的时候需要了两个坑

1. **同名包干扰**：`npm` 上存在一个同名的旧包 `ai` (v6)，导致我误装了错误的库，必须强制指定安装 `Vercel` 的 `ai@4.x`。

2. **版本不兼容**：`Vercel AI SDK` 依赖稳定的 `zod v3`，而 `npm` 试图安装最新的 `v4`，导致冲突。我通过显式锁定 `zod@^3.23.8` 解决了这个问题。

因为我们这次学习的教程是快速开始和找信心，那我们就不尝试去解决这些问题了，就先显示地指定版本去安装依赖

## 配置 API Key
我们这次打算先使用`deepseek`的`api`，如果没有的话就先上[官网](https://platform.deepseek.com)申请一个，然后充个十块钱的
在项目根目录创建一个`.env.local`文件，随后添加以下内容
```
DEEPSEEK_API_KEY=你的APIKey
```
这个`.env.local`其实也是在告诉你这玩意是你要自己在本地保存好的，不能随便发到网上，**注意检查在`.gitignore`是否忽略了它**，毕竟这玩意是可以直接花你钱包里面的钱的，当心点吧。

## 编写后端
在 `App Router` 中，我们需要一个 API 路由来转发请求。
新建文件：`app/api/chat/route.ts`
```ts
import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

// 1. 创建 DeepSeek 的自定义实例
const deepseek = createOpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY, // 使用 DeepSeek 的 Key
  baseURL: 'https://api.deepseek.com',  // 指向 DeepSeek 的服务器地址
});

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    // 2. 这里调用 deepseek 实例，并指定模型名称
    // 'deepseek-chat' 是 DeepSeek V3 (通用对话)
    // 'deepseek-coder' 是代码专用模型
    model: deepseek('deepseek-chat'), 
    
    messages,
    system: "你是一个乐于助人的 AI 助手，回答请简洁有趣。",
  });

  return result.toDataStreamResponse();
}
```

## 编写前端
修改文件：`app/page.ts`
```tsx
'use client'; // 必须标记为 Client Component

import { useChat } from 'ai/react';

export default function Chat() {
  // useChat 会自动处理 API 调用和状态管理
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch px-4">
      {/* 标题 */}
      <h1 className="text-2xl font-bold text-center mb-8">My First AI Chat</h1>

      {/* 消息列表区域 */}
      <div className="space-y-4 mb-4">
        {messages.map(m => (
          <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`rounded-lg px-4 py-2 max-w-[80%] ${
              m.role === 'user' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              {/* 这里的 m.content 会随着流式传输自动变长 */}
              {m.content}
            </div>
          </div>
        ))}
        
        {/* Loading 状态展示 (可选) */}
        {isLoading && (
            <div className="text-sm text-gray-500 animate-pulse">AI 正在思考...</div>
        )}
      </div>

      {/* 输入框区域 */}
      <form onSubmit={handleSubmit} className="fixed bottom-0 w-full max-w-md p-2 mb-8 bg-white border-t border-gray-200">
        <input
          className="w-full p-2 border border-gray-300 rounded shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          value={input}
          placeholder="说点什么..."
          onChange={handleInputChange}
          disabled={isLoading} 
        />
      </form>
    </div>
  );
}
```

## 运行和查看结果
```bash
npm run dev
```
此时打开`localhost:3000`，就能看到运行的效果了，我们礼貌打个招呼
![](https://raw.githubusercontent.com/LJL17378/my-img/main/20260112021052970.png)
嗯嗯效果不错呢，那我们打开网络面板看一下网络请求的响应
![](https://raw.githubusercontent.com/LJL17378/my-img/main/20260112021159245.png)
而且我们也观察到了AI在输出的过程中也是几个字几个字蹦出来的，那么我们到底怎么处理这个响应以及怎么实现这种打字机的效果的呢？接下来我们就要讲到**流式输出**了

## 流式输出
那么以下这些玩意到底是什么呢？
```
f:{"messageId":"msg-k7d3B5mCInIcg0DVyzXioZcg"}
0:"你好"
0:"！"
0:"有什么"
...
d:{"finishReason":"stop","usage":{...}}
```
其实这就是 **Vercel AI SDK 的数据流协议 (Data Stream Protocol)**。做个比喻，如果我们之前的API请求的方法如果是接收短信的话，那么我们现在的**流式输出**就是打电话，不用等对面一次性编辑完所有消息之后再接收，我们可以几个字几个字地接收。
让我们解剖一下这段数据的含义：

- `0:` (Text Delta)：代表文本增量。你可以看到 "你好"、"！" 是被切分成一个个小块传回来的。这就是为什么前端能实现“打字机”效果——因为数据本身就是一点点蹦出来的。

- `d:` / `e:` (Data/End)：代表元数据。比如 `usage` 告诉我们这次消耗了多少 Token（钱），`finishReason` 告诉我们 AI 是说完了还是被截断了。

### 前端如何处理？
如果让我手动去解析这一堆 `0:"..."` 的字符串，那绝对是场噩梦。但这正是 **Vercel AI SDK** 的价值所在。

我在前端使用的 `useChat` 这个`React Hook`，它封装了消息管理、流式数据处理和状态管理的逻辑：

它发起请求，建立连接。

它监听这个流式数据。

每当收到一个 `0:"..."`，它就自动把它拼接到当前的对话内容里。

结果： 开发者完全不需要关心这些底层协议，只需要直接使用 `messages` 数组，就能看到文字像水流一样自动在页面上生成。

这就是为什么我们在 `route.ts` 里要写 `result.toDataStreamResponse()` —— 我们不是在返回数据，而是在建立一条管道。

而且我们也在使用这个来管理`loading`状态，是不是感觉其功能还是挺强大的？

## 结语
是不是写了这个之后感觉其实所谓的 AI 应用也没有那么高大上？不错不错，建立了信心之后后面的东西就好学了，明天的事我们明天再聊吧，哦呀粟米。