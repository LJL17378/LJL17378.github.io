---
title: 前端面试八股文（自用）
slug: qian-duan-mian-shi-ba-gu-zi-yong
publishedAt: '2026-02-02'
updatedAt: '2026-04-23'
summary: >-
  H5 新标签的理解 HTML5, 语义化 语义化标签（header, footer, nav, section, article,
  aside）、媒体标签（video, audio）、功能标签（canvas, svg）。 作用 1. 语义化，代码结构清晰，易于开发者维护 2.
  SEO，引擎爬虫能更好
tags:
  - CSS
  - 面试
draft: false
sourceFile: 前端面试八股(自用).md
---
```css
<style>
/* 记忆卡容器样式 */
details {
  background-color: #f7f9fa; /* 浅灰背景 */
  border: 1px solid #e1e4e8; /* 边框颜色 */
  border-radius: 8px;        /* 圆角 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 卡片阴影 */
  padding: 12px 16px;
  margin-bottom: 16px;
  transition: all 0.3s ease;
}

/* 鼠标悬停时的效果 */
details:hover {
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-1px); /* 微微上浮 */
}

/* 这一行是“问题”部分 */
summary {
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1em;
  color: #24292e;
  outline: none;
  list-style: none; /* 隐藏默认三角（部分浏览器） */
}

/* 自定义前面的小三角箭头 */
summary::-webkit-details-marker {
  color: #0366d6;
}

/* 展开后的“答案”部分 */
details[open] summary {
  margin-bottom: 10px;
  border-bottom: 1px solid #eaecef;
  padding-bottom: 8px;
}

/* 答案内容的间距 */
details > *:not(summary) {
  margin-top: 10px;
  line-height: 1.6;
  color: #444;
}
</style>
```
# H5 新标签的理解

<details open>
<summary>HTML5, 语义化</summary>

语义化标签（header, footer, nav, section, article, aside）、媒体标签（video, audio）、功能标签（canvas, svg）。
作用

1. 语义化，代码结构清晰，易于开发者维护
2. SEO，引擎爬虫能更好理解页面内容
3. 无障碍，方便屏幕阅读器读取

</details>

# 对 Flex 布局的认识和对 flex:1 的理解

<details open>
<summary>CSS, Flexbox</summary>

* Flex布局：一维布局模型，通过主轴和交叉轴控制对齐和分布
* flex:1 的含义：这些缩写等同于 flex-grow: 1; flex-shrink: 1; flex-basis: 0%; 它的含义实际上是：无论空间剩余多少还是空间不足，该项目都会等比例放大和缩小，且不考虑自身的初始宽度，旨在均分剩余空间

</details>

# 两栏布局（左固定，右自适应）

<details open>
<summary>CSS, 布局</summary>

* Flex: 父容器 display: flex，左侧 width: 200px，右侧 flex: 1。
* Grid：父容器 display: grid; grid-template-columns: 200px 1fr;。

</details>

# let、const、var 的区别

<details open>
<summary>JavaScript, ES6, 变量声明</summary>

| 特性 | var | let | const |
| --- | --- | --- | --- |
| 作用域 | 函数作用域 | 块级作用域 | 块级作用域 |
| 变量提升 | 有 (值为 undefined) | 无 (存在暂时性死区 TDZ) | 无 (存在暂时性死区 TDZ) |
| 重复声明 | 允许 | 不允许 | 不允许 |
| 重新赋值 | 允许 | 允许 | 不允许 (引用地址不可变) |

</details>

# 对ES6新特性的认识

<details open>
<summary>JavaScript, ES6</summary>

let、const 与 var 的区别不仅仅是替换关系。var 是函数作用域，存在变量提升，可以在声明前使用。而 let 和 const 是块级作用域，仅在花括号内有效。虽然它们在编译阶段也会被提升，但在代码执行到声明行之前，会处于“暂时性死区”（TDZ），此时访问会直接报错。

const 锁定的不是值，而是内存地址：

1. 如果你声明 const a = 1，由于 1 是基本类型，你不能修改 a 的值。
2. 如果你声明 const object = { name: "hi" }，你可以随意修改 object.name = "hello"，因为 object 指向该对象的内存地址没有改变。

对于箭头函数，核心考点包括：

1. this 指向：
(a) 普通函数的 this 是动态的，谁调用它，它就指向谁。
(b) 箭头函数没有自己的 this，它会捕获其定义时所在的上下文的 this（词法作用域）。
2. 不适用场景：
(a) 作为对象的方法：此时它的 this 会指向 window（或 global），而不是对象本身。
(b) 构造函数：它不能使用 new 关键字。
(c) DOM 事件回调：如果你需要用 this 来获取点击的元素，就不能使用箭头函数。

数据结构方面，Map 和 Set 解决了 Object 和 Array 的痛点：

1. 键的类型：Object 的键只能是字符串或 Symbol；Map 的键可以是任何类型，包括对象和函数。
2. 性能：Map 在频繁增删键值对的场景下性能更优。
3. 顺序：Map 严格保留插入顺序。
4. Set 的妙用：可以方便地实现数组去重，以及进行集合运算（如并集、交集）。
5. WeakMap 和 WeakSet：它们的键是弱引用，当没有其他地方引用该对象时，垃圾回收机制会自动回收，防止内存泄漏，常用于深层库的开发。

在异步处理上，Promise、async 和 await 的考点包括：

1. 解决回调地狱，固定了执行顺序。
2. Promise 状态：存在 Pending、Fulfilled 和 Rejected 三种状态，状态一旦改变就不可逆。
3. 链式调用：.then() 返回的永远是一个新的 Promise。
4. 常用方法：面试常考 Promise.all 和 Promise.race 的手写实现。
5. async/await 本质是语法糖，可以用同步的写法编写异步代码，可读性极高。在错误处理上需要配合 try-catch，否则会导致后期代码中断。

其他 ES6+ 语法糖：

1. 解构赋值：不仅仅是取值，还可以设置默认值和重命名。
2. 展开运算符：可以实现浅拷贝。如果内部还有对象，内层对象仍是共享引用的。
3. 剩余参数（Rest Parameters）：代替了旧的 arguments 对象。剩余参数是真正的数组，而 arguments 是类数组对象。

关于模块化，ES Modules（ESM）在编译时就能确定模块依赖关系，这使得 Tree Shaking 成为可能，Webpack 和 Vite 等工具都强依赖此特性。在值的引用上，通过 import 进来的变量是只读引用：如果模块内部修改了变量值，外部引用的值也会跟着变化。

</details>

# HTTPS 和 HTTP 的区别

<details open>
<summary>网络, HTTP, 安全</summary>

在安全性上，HTTPS 是 HTTP 加上 SSL/TLS 加密传输。

在端口上：

1. HTTP 默认端口是 80
2. HTTPS 默认端口是 443

在证书上，HTTPS 需要向 CA 申请证书。

</details>

# HTTPS握手过程

<details open>
<summary>网络, HTTPS, TLS握手</summary>

1. Client Hello：客户端发送支持的加密套件，加随机数 1
2. Server Hello：服务端返回证书（含公钥），加随机数 2
3. 验证证书：客户端验证证书合法性
4. 生成密钥：客户端生成随机数 3，用公钥加密发送给服务端
5. 生成会话密钥：双方根据三个随机数生成最终的对称密钥，之后的数据传输使用该密钥加密

</details>

# CSS 实现动画的方式

<details open>
<summary>CSS, 动画</summary>

CSS 方式： transition (过渡), animation + @keyframes (关键帧)

</details>

# requestAnimationFrame

<details open>
<summary>JavaScript, 性能优化, 动画 API</summary>

requestAnimationFrame（简称 RAF）是浏览器提供的 API，专门用于实现高性能动画。其核心逻辑是在浏览器下次准备重绘（Repaint）时调用并更新画面。它没有固定的时间间隔，而是紧跟屏幕的刷新率。通常情况下，普通屏幕为 60Hz（即每秒刷新 60 次），RAF 大约每秒执行 60 次；如果是高刷新率屏幕，它也会自动进行适配。

相比之下，setTimeout 和 setInterval 逐渐被取代的原因如下：

1. 执行时机不精准
setTimeout 和 setInterval 的执行时机非常盲目，无法保证与浏览器的重绘同步。这可能会导致在一帧内多次执行或错过重绘时机，从而引发画面撕裂或抖动问题。
2. 后台运行功耗高
当切换到其他标签页（Tab）或最小化窗口时，setTimeout 定时器仍会在后台持续运行。而 requestAnimationFrame 在页面隐藏或不可见时会自动停止，大大节省了 CPU 和 GPU 的开销。
3. 渲染平滑度
requestAnimationFrame 会在浏览器每一帧渲染前的最佳时机执行，确保动画节奏与屏幕刷新频率完全同步。这使得它在动画流畅度上表现得极其平滑。

</details>

# JS 判断数据类型的方式

<details open>
<summary>JavaScript, 类型判断</summary>

* typeof: 适合判断基础类型，但是 typeof null === 'object'，而且无法区分 Array/Object
* instanceof: 根据原型链来判断
* Object.prototype.toString.call(val)： 最准确，返回 [object Number], [object Array] 等。

</details>

# JS 的基本类型

<details open>
<summary>JavaScript, 数据类型</summary>

* String
* Number
* Boolean
* Null
* Undefined
* Symbol
* BigInt

</details>

# 进程和线程的区别

<details open>
<summary>操作系统, 进程, 线程</summary>

进程是计算机正在运行的程序的实例，即一个程序运行的实例。每个进程在执行时都会分配独立的内存空间，不同进程之间的内存是相互隔离的，因此一个进程的错误不会直接影响到其他进程。

线程是进程的子任务，一个进程可以包含多个线程。多个线程可以在同一进程内并发执行，共享该进程的资源（如内存空间、打开的文件等）。

进程和线程的主要区别如下：

1. 执行独立性：
   进程是独立的执行实体，而线程则依赖于进程。
2. 资源隔离：
   进程之间资源相互隔离，而线程共享所属进程的资源。
3. 开销差异：
   创建和销毁线程的开销较小，而创建和销毁进程的开销较大。
4. 编程复杂度：
   多线程程序的编程复杂度通常比单线程程序高，但多线程可以更好地利用多核处理器，从而提高程序的执行效率。

</details>

# 浏览器的进程

<details open>
<summary>浏览器, 架构, 进程模型</summary>

1. Browser 主进程
负责协调、UI
2. Renderer 进程（核心）
渲染引擎执行 JS 和页面渲染，内含 GUI 线程和 JS 引擎线程，两者互斥
3. Network 进程
处理网络请求
4. GPU 进程
负责绘制图形

</details>

# 输入 URL 到页面渲染的过程

<details open>
<summary>浏览器, 渲染机制, 网络</summary>

* dns解析 把域名变成机器能读的 IP 地址
  * 浏览器缓存 -> 系统缓存 -> 路由器缓存 -> ISP DNS 服务器 -> 根域名服务器。
  * 服务端视角：GSLB (全局负载均衡) 根据用户 IP 返回最近的机房 IP。
* tcp连接 三次握手建立可靠的数据传输通道
* TLS/SSL 握手
  * 服务端视角：在 Nginx/网关层 进行 SSL 卸载 (Offloading)，统一处理加密解密，减轻后端业务服务器负担。
* 负载均衡分发
  * 四层负载 (LVS/F5)：基于 IP+端口转发。
  * 七层负载 (Nginx/HAProxy)：基于应用层协议（如 URL、Header）转发到具体服务器。
* 发送http请求 & 响应 拿到HTML文件
  * 网关接入 (Gateway)：
    * 鉴权与流控：校验 JWT/Cookie，执行 Sentinel 等限流策略。
    * 反向代理：将请求转发到真实的业务微服务。
  * 业务逻辑执行：
    * BFF/Controller：聚合数据，发起 RPC 调用（gRPC/Dubbo）访问底层微服务。
    * 缓存拦截：优先查询 Redis，未命中则回源数据库。
    * DB 操作：数据库连接池处理、读写分离、执行 SQL。
  * 响应封装：
    * SSR (服务端渲染)：直接拼接完整的 HTML 字符串。
    * CSR (客户端渲染)：服务端返回精简的 HTML 骨架和静态资源路径。
  * 传输优化：
    * 内容压缩：服务端通过 Gzip 或 Brotli 对 HTML 进行即时压缩。
    * HTTP/2 多路复用：利用头部压缩和 Server Push 提前推送关键 CSS/JS。
* 浏览器解析
* 解析 html 为 DOM 树
  * 遇到 `<script>` 默认会阻塞解析。
  * 优化：使用 defer（延迟执行）或 async（异步加载）。
* 解析 css 为 CSSOM 树
* 合并渲染树
* 回流/重排
  * 以下是触发条件
    * 页面初次渲染
    * 页面尺寸发生变化
    * 添加删除可以见的DOM元素
    * 改变元素尺寸位置和边距
    * 读取 offsetWidth scrollTop 的时候
* 重绘
  * 填充像素（颜色 阴影 背景 文字）
  * 重绘不一定导致重排 但是重排一定导致重绘
* 合成
  * 将不同图层合成为一张图交给GPU显示
  * 标准流文档在一个图层里面，position: fixed video canvas 可能会创建新的图层
  * 某些 css 属性可以实现 gpu 加速，例如使用 transform 只会触发合成
</details>

# content-type有几种类型，post请求体有哪些

<details open>
<summary>网络, HTTP, Content-Type</summary>

常用的有以下几种

* application/json：最常用，用于前后端分离 API
* application/x-www-form-urlencoded：简单的传统表单提交
* multipart/form-data：(Boundary分隔的数据块),用于文件上传
* text/plain：纯文本传输，用于回调验证等
* application/octet-stream：(二进制乱码),纯二进制流，不关心文件类型

</details>

# 箭头函数和普通函数区别，为什么用箭头函数

<details open>
<summary>JavaScript, ES6, 函数</summary>

* 区别：
* this： 箭头函数没有自己的 this，继承外层上下文；普通函数 this 指向调用者。
* 构造： 箭头函数不能 new，没有 prototype。
* 参数： 箭头函数没有 arguments 对象。


* 为什么用： 代码简洁；解决了回调函数中 this 指向丢失的问题（如在 setTimeout 中）。

</details>

# 对 Promise 的理解

<details open>
<summary>JavaScript, 异步编程</summary>

* 状态： Pending (进行中) -> Fulfilled (成功) / Rejected (失败)。状态不可逆。
* 作用： 解决回调地狱 (Callback Hell)，实现链式调用。
* 微任务： Promise 的 .then 回调属于微任务，优先级高于宏任务 (setTimeout)。
* 静态方法： Promise.all (全成功才成功), Promise.race (谁快用谁)。
* Promise 构造函数接收一个带有 resolve 和 reject 参数的回调函数。

  1. resolve 的作用：
   将 Promise 状态从 pending 变为 fulfilled，在异步操作成功时调用，并将异步结果作为参数传递出去。
  2. reject 的作用：
   将 Promise 状态从 pending 变为 rejected，在异步操作失败后调用，并将异步操作错误的结果作为参数传递出去。

* Promise 的缺点：

  1. 一旦新建就会立即执行，无法中途取消
  2. 如果不设置回调函数，Promise 内部抛出的错误不会反应到外部
  3. 当处于 pending 状态时，无法得知目前进展到哪一个阶段（即不知道它距离完成还有多久）
</details>

# TS 在浏览器能直接运行吗？怎么编译成 JS？

<details open>
<summary>TypeScript, 编译原理</summary>

* 能不能直接运行： 不能。浏览器（JS 引擎如 V8）只能识别 JavaScript 代码，无法识别 TypeScript 的类型注解（Type Annotations）和其他特有语法。
* 需要经过 **编译（Transpilation）** 过程，将 TS 转换为浏览器能识别的 JS。
* 工具：
* TypeScript Compiler (tsc)： 官方编译器，将 .ts 编译为 .js。
* Babel： 使用 @babel/preset-typescript 移除类型信息，将其转换为 JS。
* Build Tools (Vite/Webpack/Esbuild)： 现代构建工具内部集成了上述编译器（开发环境常用 Esbuild，生产环境常用 tsc 或 Babel）。





</details>

# TCP 和 UDP 的区别

<details open>
<summary>网络, TCP, UDP</summary>

| 特性 | TCP（传输控制协议） | UDP（用户数据报协议） |
| --- | --- | --- |
| 连接性 | 面向连接（三次握手） | 无连接（直接发送） |
| 可靠性 | 可靠（不丢包、不乱序） | 不可靠（可能丢包） |
| 速度 / 开销 | 较慢，头部开销大（20 字节） | 较快，头部开销小（8 字节） |
| 应用场景 | 网页（HTTP）、文件传输（FTP）、邮件 | 视频直播、DNS、实时游戏 |

</details>

# 拥塞控制

<details open>
<summary>网络, TCP</summary>

TCP 为了防止网络拥堵导致瘫痪，采用了四种算法：

1. 慢启动 (Slow Start)： 指数级增长发送窗口。
2. 拥塞避免 (Congestion Avoidance)： 线性增长发送窗口。
3. 快重传 (Fast Retransmit)： 收到 3 个重复确认就立即重传，不用等超时。
4. 快恢复 (Fast Recovery)： 发生快重传后，将阈值减半，直接进入拥塞避免阶段。

</details>

# HTTP 请求方法

<details open>
<summary>网络, HTTP, RESTful</summary>

* GET： 获取资源。
* POST： 提交数据/新建资源。
* PUT： 修改/更新资源（通常全量更新）。
* DELETE： 删除资源。
* PATCH： 局部修改资源。
* OPTIONS： 预检请求（CORS 中常用，检查服务器支持的方法）。
* HEAD： 类似 GET，但只返回响应头，不返回实体内容。

</details>

# GET 和 POST 区别（及结构上的区别）

<details open>
<summary>网络, HTTP, GET/POST</summary>

* 语义： GET 是获取（幂等、安全），POST 是提交（非幂等）。
* 缓存： GET 默认会被浏览器缓存，POST 默认不会。
* 参数位置： GET 参数放在 URL 中（有长度限制），POST 参数放在 Body 中（无长度限制）。
* 结构上的区别（追问点）：
* HTTP 报文层面： GET 的请求通常没有 Body（即使有，服务器也可能忽略），POST 有 Body。
* 数据包发送（细节）： 经常有说法称“GET 产生 1 个 TCP 数据包，POST 产生 2 个（先发 Header，服务器 100 Continue 后再发 Body）”。注：这并非 HTTP 协议规定，而是部分浏览器（如旧版 Firefox/Chrome）的具体实现细节，现在的网络环境通常也合并发送。



</details>

# 浏览器缓存

<details open>
<summary>浏览器, HTTP缓存</summary>

浏览器缓存分为两类：

* 强缓存： 浏览器直接从本地（Memory Cache 或 Disk Cache）读取，不发请求到服务器。
* 协商缓存： 浏览器发请求给服务器，服务器判断资源未变，返回 304 状态码，浏览器再读本地缓存。

</details>

# 为什么需要浏览器缓存

<details open>
<summary>浏览器, HTTP缓存</summary>

使用浏览器缓存可以减轻机器的负担，提高网站性能。它加快了客户端网页的加载速度，并减少了多余的网络数据传输。

</details>

# 协商缓存和强缓存的区别

<details open>
<summary>浏览器, HTTP缓存</summary>

使用强缓存策略时，如果缓存资源有效，浏览器会直接从本地读取资源，状态码显示为 200，不必再向服务器发起请求。

强缓存可以通过两种方式来设置，分别是 HTTP 头中的 Expires 属性和 Cache-Control 属性：
1. Expires：指定资源的过期时间。在该时间内，资源可以被直接使用，不需要向浏览器发送请求。但由于这个时间依赖于服务器时间，可能会存在服务器时间与客户端时间不一致的情况。
2. Cache-Control：当两种方法同时使用时，Cache-Control 的优先级高于 Expires。

如果未命中强缓存，则会进入协商缓存阶段。协商缓存的命中条件是：
1. 在 Cache-Control 中设置了 no-cache。
2. 或者 max-age 已经过期。

在使用协商缓存时，浏览器会先向服务器发送一个请求：
1. 如果资源没有发生修改，请求返回 304 状态码，让浏览器继续使用本地缓存。
2. 如果资源已发生修改，则返回修改后的内容。

协商缓存通过 Response Headers 中的 ETag 属性和 Last-Modified 属性来进行设置。其中，ETag 的优先级高于 Last-Modified。

在浏览器中，强缓存的优先级高于协商缓存。

1. 强缓存：
   (a) 命中时直接从本地读取资源，返回 200 状态码
   (b) 不会向服务器发送请求
2. 协商缓存：
   (a) 无论命中与否，都会向服务器发送一次请求
   (b) 如果命中，服务器返回 304 状态码

关于刷新的缓存行为：
1. 强制刷新（Ctrl + F5）：会跳过所有缓存，重新从服务器获取资源
2. F5 刷新：会跳过强缓存，但依然会检查协商缓存

</details>

# 怎么配置强缓存跟协商缓存

<details open>
<summary>HTTP Header, 缓存策略</summary>

配置都在 HTTP Response Header 中：

* 配置强缓存：
* Cache-Control: max-age=3600 (HTTP/1.1，优先级高，单位秒)
* Expires: Wed, 21 Oct 2025 07:28:00 GMT (HTTP/1.0，优先级低，使用绝对时间)


* 配置协商缓存（成对出现）：
* ETag / If-None-Match： 基于文件内容生成的哈希值（精度高，优先级高）。
* Last-Modified / If-Modified-Since：基于文件最后修改时间（精度秒级，可能不准）。



</details>

# 强缓存跟协商缓存能同时配置吗，优先级如何

<details open>
<summary>浏览器缓存, 优先级</summary>

* 可以同时配置。
* 优先级流程：

1. 浏览器先检查 强缓存 (Cache-Control)。
2. 如果强缓存命中且未过期 -> 直接读取浏览器缓存，状态码 200 (from memory/disk cache)。
3. 如果强缓存失效/过期 -> 发送请求给服务器，带上 If-None-Match 或 If-Modified-Since 头部，进入 协商缓存 阶段。
4. 服务器检查：
* 资源没变 -> 返回 304 Not Modified，浏览器读取本地缓存。
* 资源变了 -> 返回 200 OK 和新资源。



</details>

# 讲一下对于事件循环的理解

<details open>
<summary>JavaScript, Event Loop</summary>

JavaScript 是单线程的，为了不阻塞主线程，它设计了一套异步处理机制。

所有的代码执行都在调用栈中进行。当遇到异步任务时，JS 会将其挂起，交给浏览器的 Web APIs 去处理。一旦异步任务有了结果，它们的回调函数会被放入任务队列中等待。

Event Loop 的核心职责就是不断轮询：一旦发现调用栈空了，它会优先彻底清空微任务队列（如 Promise），然后再去宏任务队列（如 setTimeout）里取出一个任务执行。

简单来说就是：同步 > 微任务 > 渲染 > 宏任务。

</details>

# Node.js的事件循环

<details open>
<summary>JavaScript, Event Loop</summary>

Node.js 事件循环在进入每一个阶段时，都会去对应的回调队列中取出函数并执行。

1. Timers 阶段
   执行 `setTimeout` 和 `setInterval` 的回调，由 Poll 阶段控制。

2. I/O Callbacks 阶段
   系统调用相关的回调。

3. Idle, Prepare 阶段
   Node.js 内部执行，可以忽略。

4. Poll 阶段（轮询）
   在该阶段中，会出现以下情况：
   (a) 如果 Poll 队列不为空：会遍历回调队列并同步执行，直到队列为空或达到系统限制。
   (b) 如果 Poll 队列为空：
      - 如果有 `setImmediate` 回调需要执行，Poll 阶段会停止并进入 Check 阶段。
      - 如果没有 `setImmediate` 回调，就会等待回调被添加到队列中然后立即执行。
      - 如果设置了 Timer 并且 Poll 队列为空，会判断是否有 Timer 超时。如果有，就回到 Timers 阶段执行回调。

5. Check 阶段
   执行 `setImmediate` 的回调。

6. Close Callbacks 阶段
   执行一些关闭回调，如 `socket.on('close', ...)` 等。
</details>

# node事件循环与浏览器的哪些不一样

<details open>
<summary>Node.js, 运行机制</summary>

1. 底层机制与阶段划分不同（最本质区别）

* 浏览器服务于页面交互，宏任务队列比较单一，执行顺序是“一个宏任务 -> 清空微任务 -> 渲染”。
* Node.js 基于 libuv 库，为了处理高并发 I/O，将事件循环分为 6 个阶段（Phases）。最重要的是 Timers（处理 setTimeout）、Poll（处理 I/O 回调）和 Check（处理 setImmediate）这三个阶段，不同类型的宏任务在特定阶段执行。

2. 微任务的优先级不同

* Node.js 独有 process.nextTick。
* 它的优先级 高于 Promise。无论当前处于哪个阶段，process.nextTick 的回调都会被插队到微任务队列的最前面执行。

3. setImmediate 与 setTimeout 的区别

* 浏览器没有 setImmediate。
* 在 Node.js 中，setTimeout 在 Timers 阶段执行，而 setImmediate 在 Check 阶段执行。如果是在 I/O 回调（如读文件）中，setImmediate 永远比 setTimeout 先执行。

4. （加分项）执行时机的版本差异

* 需要注意的是，在 Node v11 以前，Node 是执行完“整个阶段的所有宏任务”才去清空微任务。
* 但在 Node v11 以后，Node 做了修改，现在的行为已经和浏览器对齐了，也就是每执行完一个宏任务，就立刻去清空微任务。

</details>

# TCP/IP 协议分层，TCP 在哪一层？

<details open>
<summary>网络协议</summary>

- 通常分为 4 层（应用层、传输层、网络层、链路层）或 5 层。
- TCP 位于传输层。
</details>

# 三次握手，四次挥手，为什么挥手多一次？

<details open>
<summary>网络协议、计算机网络</summary>

- 三次握手： SYN -> SYN+ACK -> ACK。为了确认双方的接收和发送能力都正常。
- 四次挥手： FIN -> ACK -> FIN -> ACK。
- 为什么多一次： 握手时 SYN 和 ACK 可以合并发送。但在挥手时，客户端发送 FIN 仅代表“我没数据发了”，但服务器可能还有数据没处理完，所以服务器先回 ACK（确认收到关闭请求），等服务器数据发完了，再发 FIN（我也要关了）。中间多了一段等待服务器处理完毕的时间，所以是分步的。
</details>

# no-cache 和 no-store （浏览器缓存）

<details open>
<summary>浏览器</summary>

- no-cache：不是不缓存，而是每次使用缓存前必须向服务器确认（走协商缓存）。
- no-store：绝对不缓存，任何地方都不存副本。
</details>

# HTML/CSS/JS 放在磁盘缓存还是内存缓存？

<details open>
<summary>缓存</summary>

- 内存缓存 (Memory Cache)： 读取快，持续时间短（关闭 tab 就没了）。一般用于较小的、频繁使用的资源（如已解析的图片、脚本）。
- 磁盘缓存 (Disk Cache)： 读取慢，容量大，持久化。一般用于大文件、CSS、HTML 等。
</details>

# DOM 树和 CSSOM 树构建关系

<details open>
<summary></summary>

- 它们是并行构建的，互不影响。
- 但是在生成渲染树 (Render Tree) 时，必须等待两者都完成。
</details>

# JS脚本是否会阻塞DOM构建？

<details open>
<summary>js</summary>

是的。因为 JS 可以修改 DOM，浏览器必须暂停构建 DOM，执行完 JS 再继续。
</details>

# js脚本会不会影响Cssom树的渲染？

<details open>
<summary>js</summary>

不会，JS 执行时如果访问样式信息，必须等待 CSSOM 构建完成。所以 CSS 加载慢会阻塞 JS 执行，进而阻塞 DOM 构建。
</details>

# 作用域类型
<details open>
<summary>js</summary>

- 全局作用域、函数作用域、块级作用域 (ES6)、模块作用域。

</details>

# React 16 有什么重要更新
<details open>
<summary>REACT</summary>
React 16 的核心更新主要引入了 Fiber 架构和 Hooks。

1. Fiber 架构
   (a) 在 V15 之前，React 的更新是同步且不可中断的。如果组件树很大，主线程就会被阻塞，导致页面掉帧或卡顿。
   (b) Fiber 将更新任务拆分成一个个小单元，实现了时间切片（Time Slicing）。
   (c) React 现在可以暂停、中止或复用渲染任务，优先处理高优先级的用户交互。
   (d) Fiber 解决了主线程阻塞导致的卡顿问题，为并发模式（Concurrent Mode）打下了基础。

2. React Hooks
   (a) 引入了 useState、useEffect 等 Hook，解决了 Class 组件中逻辑复用困难、this 指向困扰、生命周期逻辑分散等问题。

3. 错误边界 (Error Boundaries)
   (a) 引入了 componentDidCatch 等生命周期方法，防止整个应用因为某个组件报错而导致白屏。

4. Fragments
   (a) 允许组件返回多个子元素，而不需要增加多余的 DOM 节点。

5. Portals
   (a) 允许将子节点渲染到父组件 DOM 层次结构之外的 DOM 节点中。

</details>

# React 17 有什么重要更新
<details open>
<summary>REACT</summary>

React 17 的核心更新是其事件委托机制的改变：

1. 事件委托机制的优化
   (a) 在 V16 及之前版本，事件委托绑定在 Document 上
   (b) 在 V17 之后，事件委托改为绑定在 React 渲染的根容器（Root Container）上
   (c) 这一改变使得微前端框架或多版本 React 共存变得更容易。不同版本的 React 应用可以在同一个页面上运行，避免了因为事件冒泡到 Document 而产生的互相干扰

2. 新的 JSX 转换
   引入了新的 JSX 转换机制，不再需要显式地编写 `import React from 'react'` 就可以直接使用 JSX
</details>

# React 18 有什么重要更新
<details open>
<summary>REACT</summary>

React 18 有个比较重要的特性，就是的 Concurrent（并发） 模式。比如说当一个任务太重的时候，页面可能会卡死，用户点击什么都没反应。在以前，渲染一旦开始就无法停止，但现在允许暂停当前的渲染任务，先去处理更紧急的任务（如用户输入），处理完之后再继续之前的渲染。

其主要 API 包括：
1. startTransition：用于标记非紧急更新
2. useTransition
3. useDeferredValue

其他核心更新如下：

1. 自动批处理（Automatic Batching）：
   (a) 在 React 18 之前（如 V17），只有在 React 事件处理函数中的更新会自动合并，而在 setTimeout 或 fetch 回调中则不会。
   (b) 在 React 18 中，所有环境下的多次状态更新都会自动合并为一次重新渲染，这极大提升了性能。

2. 支持 SSR 与流式渲染（Streaming SSR）：
   引入了流式渲染，不再需要等待整个页面的数据都准备好才发送 HTML。可以先发送页面框架，再把耗时组件的数据流过去。

3. 新的 Root API：
   使用 createRoot 代替原有的 ReactDOM.render。
</details>

# React 19 有什么重要更新
<details open>
<summary>REACT</summary>
React 19 与服务器组件和全栈开发密切相关，其核心更新包括：

1. React Server Components (RSC)
   这是一个在服务器端运行的组件。与传统组件不同，它不向客户端发送 JavaScript 代码，只发送渲染后的结果，这极大地减少了 Bundle Size。开发者可以直接在组件内访问数据库和文件系统。

2. Server Actions
   允许客户端组件直接调用运行在服务端的函数，类似于 RPC（远程过程调用），简化了数据交互的流程。

3. 新的 use API
   可以直接在渲染函数中读取 Promise 或 Context。例如，通过 `use(Promise)` 会配合 Suspense 自动处理加载状态。

4. React Compiler
   这是一个构建时工具，旨在自动对组件进行 useMemo 和 useCallback 级别的优化。此时开发者不再需要手动编写这些记忆化（memoization）钩子来优化性能。

5. 其他细节优化：
   (a) ref 可以直接作为 props 传递给函数组件。
   (b) 支持直接在组件内编写 title、meta 等标签（即 Document Metadata），React 会自动将它们提升到 head 中。

</details>

# null 和 undefined 的区别
<details open>
<summary>js</summary>

undefined 和 null 都是基本数据类型，这两个基本数据类型分别都只有一个值，那就是 undefined 和 null。

1. undefined 代表的含义是“未定义”。一般变量声明了但还没有被赋值时，就会返回 undefined，typeof 的结果也是 undefined。
2. null 代表的是“空对象”。通常会将 null 赋值给一些可能会返回对象的变量，将其初始化。typeof 的结果为 object。
</details>

# instanceof 的实现原理
<details open>
<summary>js</summary>

instanceof 适用于检验构造函数的 prototype 是否实现在某个实例对象的原型链上。

instanceof 的原理是基于原型链的：
1. 当使用 obj instanceof Constructor 进行判断时，JavaScript 引擎会从 obj 的原型链上查找 Constructor.prototype。
2. 若存在，就返回 true；否则继续在原型链上查找。
3. 如果查找到原型链的顶端（也就是 null）仍然没有找到，就返回 false。

需要注意的是，instanceof 只能用于检查某个对象是否属于某个构造函数的实例，不能用于基本类型的检查（如 string、number 等）。
</details>

# typeof 和 instanceof 的区别
<details open>
<summary>js</summary>

typeof 和 instanceof 都是判断数据类型的方法。

1. typeof 
   会返回一个运算数的基本类型，可以判断原始数据类型（例如 null），但是无法判断引用数据类型。
2. instanceof 
   可以准确判断引用数据类型，但是不能直接判断原始数据类型。

关于为什么 typeof 判断 null 为 object，这是 JavaScript 语言的一个历史遗留问题：
它一开始是通过值的二进制前三位来判断类型。前三位为 0 的情况代表对象类型，而 null 作为一个空值，其二进制表示全为 0，所以前三位也是 0，导致 typeof null 的结果反而是 object。
</details>

# 判断数组的方法有哪些？
<details open>
<summary>js</summary>

- 通过Object.prototype.toString.call()做判断
- 通过原型链做判断（`obj.__proto__ === Array.prototype;`）
- 通过ES6的Array.isArray()做判断
- 通过instanceof做判断
</details>

# 对类数组的理解，以及如何转化为数组？
<details open>
<summary>js</summary>

类数组（Array-like）与数组相似，但不能直接调用数组的方法。

常见的类数组包括：
1. arguments 对象
2. 通过 document.getElements 等方法获取到的 HTMLCollection 内容

这些类数组通常具有 length 属性。

转换方法：
- 通过 call 调用数组的 slice 方法来实现转换
- 通过 call 调用数组的 splice 方法来实现转换
- 通过 call 调用数组的 concat 方法来实现转换
- 通过 Array.from 方法来实现转换
</details>

# object.assign和扩展运算法是深拷贝还是浅拷贝，两者区别
<details open>
<summary>js</summary>

Object.assign 方法接收第一个参数作为目标对象，后面的所有参数作为源对象。该方法将所有源对象合并到目标对象中。

在使用时，两者的区别如下：
1. Object.assign 会直接修改目标对象。
2. ES6 扩展操作符（Spread Operator）则会将数组或对象中的每一个值拷贝到一个新的数组或对象中。它不复制继承的属性和类的属性，会复制 ES6 的 Symbols 属性。

</details>

# new操作符的实现原理
<details open>
<summary>js</summary>

new 操作符会创建一个对象，并将该对象绑定到构造函数的 this 上。

new 操作符的执行过程如下：
1. 创建一个空对象
2. 设置原型：将构造函数的 prototype 属性指向空对象的原型
3. 将 this 指向这个新对象
4. 通过 apply 执行构造函数
5. 判断函数的返回值类型：
   (a) 如果是值类型，返回创建的对象
   (b) 如果是引用类型，则返回这个引用类型对象
</details>

# for...in和for...of的区别
<details open>
<summary>js</summary>

for...in和for...of都是JavaScript中的循环语句，而for…of 是ES6新增的遍历方式，允许遍历一个含有iterator接口的数据结构（数组、对象等）并且返回各项的值。ES3中的for…in获取的是对象的键名，会遍历对象的整个原型链，性能非常差不推荐使用。
for...in 循环主要是为了遍历对象而生，不适用于遍历数组；for...of 循环可以用来遍历数组、类数组对象，字符串、Set、Map 以及 Generator 对象。
</details>

# ajax、axios、fetch的区别
<details open>
<summary>js</summary>

1. ajax
   - 基于原生XHR开发，XHR本身架构不清晰。
   - 针对MVC编程，不符合现在前端MVVM的浪潮。
   - 多个请求之间如果有先后关系的话，就会出现回调地狱
   - 配置和调用方式非常混乱，而且基于事件的异步模型不友好。
2. axios
   - 支持PromiseAPI
   - 从浏览器中创建XMLHttpRequest
   - 从 node.js 创建 http 请求
   - 支持请求拦截和响应拦截
   - 自动转换JSON数据
   - 客服端支持防止CSRF/XSRF
3. fetch
   - 浏览器原生实现的请求方式，ajax的替代品
   - 基于标准 Promise 实现，支持async/await
   - fetchtch只对网络请求报错，对400，500都当做成功的请求，需要封装去处理
   - 默认不会带cookie，需要添加配置项
   - fetch没有办法原生监测请求的进度，而XHR可以。
</details>

# 什么是尾调用，使用尾调用有什么好处？
<details open>
<summary>js</summary>

尾调用就是在函数的最后一步调用函数，在一个函数里调用另外一个函数会保留当前执行的上下文，如果在函数尾部调用，因为已经是函数最后一步，所以这时可以不用保留当前的执行上下文，从而节省内存。但是ES6的尾调用只能在严格模式下开启，正常模式是无效的。
</details>

# forEach和map方法有什么区别
<details open>
<summary>js</summary>

- forEach 主要是利用数组中的数据进行操作，该方法没有返回值。

- map 方法不会改变原数组的值，它会返回一个新的数组，新数组中的值为原数组调用函数处理之后的值。
</details>

# Set 和 Map 有什么区别
<details open>
<summary>js</summary>

Map 是键值对的集合。与对象不同的是，它的键可以是任意值。Map 可以遍历，也可以和各种数据格式进行转换。

Set 是类似于数组的一种集合或数据结构。但在 Set 中，没有重复的值。
</details>

# Object 和 Map 有什么区别
<details open>
<summary>js</summary>

Map 和 Object 用来存储键值对的区别如下：

1. 键的类型
   (a) Map 的键可以是任意数据类型
   (b) Object 的键只能是字符串或者 Symbol 类型

2. 键值对的顺序
   (a) Map 中的键值对是按照插入顺序存储的
   (b) Object 中的键值对没有固定的顺序

3. 键值对的遍历
   (a) Map 的键值对可以用 for...of 进行遍历
   (b) Object 需要手动遍历键值对

4. 继承关系
   (a) Map 没有继承关系
   (b) Object 是所有对象的基类
</details>

# WeakMap 和 Map 有什么区别
<details open>
<summary>js</summary>

1. Map 的键可以是任意类型；WeakMap 的键只能是对象类型。

2. Map 使用常规的强引用来管理键值对之间的关系：
   (a) 即使键不再使用，Map 也会保留该键的内存。
   (b) 只有当 Map 本身被销毁或手动删除键时，内存才会被释放。

3. WeakMap 使用弱引用来管理键值对之间的关系：
   (a) 如果键不再有其他引用，垃圾回收机制可以自动回收该键值对。
   (b) 这有助于防止内存泄漏，特别适用于需要缓存对象信息但不影响其生命周期的场景。
</details>

# Promise.all 和 Promise.allsettled 区别
<details open>
<summary>js，Promise</summary>

Promise.all 和 Promise.allSettled 都是用来处理多个 Promise 实例的方法，它们的区别主要在以下几点：

1. Promise.all
   只有当所有 Promise 实例都 resolve 之后，它才会 resolve，并返回一个由所有 Promise 返回值组成的数组。如果其中有一个 Promise 实例 reject，就会立即被拒绝，并返回该拒绝原因。这可以理解为“团队的成功才算成功”，如果有一个失败，整体就算失败。

2. Promise.allSettled
   它会等所有 Promise 执行完毕，不管成功还是失败，都会把每个 Promise 状态的信息放到一个数组里面返回。
</details>

# 对async/await 的理解
<details open>
<summary>js</summary>

async 都是语法糖，它能实现的效果都能用 Promise 链来实现，它就是为了优化异步操作而开发出来的。

1. 基本用法：
   (a) 通过 async 关键字声明一个异步函数
   (b) await 用于等待一个异步方法执行完成，并且会阻塞后续代码的执行

2. 返回值机制：
   (a) async 函数返回一个 Promise 对象
   (b) 如果在函数中 return 一个变量，async 会把这个直接量通过 Promise.resolve() 转换成 Promise 对象
   (c) 如果没有返回值，则返回 Promise.resolve(undefined)
</details>

# async/await对比Promise的优势
<details open>
<summary>js</summary>

使用 async/await 的代码可读性更高。虽然 Promise 摆脱了回调地狱，但其自身的链式调用仍会影响可读性。

相比 Promise，async/await 的优势如下：
1. 语法更加优雅，传递更方便
2. 对错误处理更友好，可以通过 try...catch 捕获
3. 对比之下，Promise 的错误捕获虽然也存在，但 async/await 的处理方式显然更加容易实现
</details>

# ES6 模块和 CommonJS 有什么区别？
<details open>
<summary>js</summary>

1. 语法不同
   (a) ES6 模块使用 import 和 export 关键字来导入和导出模块
   (b) CommonJS 模块使用 require 和 module.exports 或 exports 来导入和导出模块

2. 异步加载能力
   (a) ES6 模块支持动态导入和异步加载，使得按需加载模块成为可能，从而提高性能
   (b) CommonJS 模块在设计时没有考虑异步加载需求，通常在模块顶部进行同步加载
</details>

# 关于原型的认识
<details open>
<summary>js，原型</summary>

1. prototype
JS 通过构造函数来创造对象。每个构造函数内部都会有一个 prototype 属性，指向另外一个对象。这个对象包含了可以由该构造函数的所有实例共享的属性和方法。
2. `__proto__` 属性
   当使用该构造函数创造一个实例对象后，可以通过 `__proto__` 访问到 prototype 属性。
3. constructor
   实例对象通过这个属性可以访问到构造函数。
</details>

# 原型链
<details open>
<summary>js，原型</summary>

每一个实例对象都有属性，指向它构造函数的原型对象。这个原型对象也会有它自己的原型对象，一层一层往上，直到原型链的终点也就是顶级的原型对象 null，这样就形成了一个原型链。

当访问对象一个属性或方法时，如果该对象自己没有，就会沿着原型链往上查找。
直到查找到该属性或方法的位置。

原型链的顶层原型是 Object.prototype。如果这里还是没有，最后就只能指向 null 了
</details>

# 对闭包的理解和它的使用场景
<details open>
<summary>js</summary>

闭包（Closure）是指有权访问函数作用域中变量的函数。创建闭包的常见方式是在一个函数内创建另一个函数，创建的函数可以访问到当前函数的局部变量。

1. 闭包的优点：
   (a) 创建全局私有变量
   (b) 避免变量全局污染
   (c) 可以实现封装、缓存等功能

2. 闭包的缺点：
   (a) 创建的变量不能被自动回收
   (b) 容易消耗内存
   (c) 使用不当会导致内存泄漏

为了解决这些问题，建议在不需要使用时手动将变量设为 null。

闭包主要用于以下场景：
1. 创建全局私有变量
2. 封装类或模块
3. 实现函数柯里化
</details>

# 闭包一定会造成内存泄漏吗？
<details open>
<summary>js，原型</summary>

闭包并不一定会造成内存泄漏。

如果在项目中使用闭包后，变量没有被及时销毁，可能会带来内存泄漏的风险。但只要合理使用闭包，就不会造成内存泄漏。
</details>

# 对作用域、作用域链的理解
<details open>
<summary>js，作用域</summary>

作用域是一个变量或函数的可访问范围，它控制着变量或函数的可见性和生命周期。

1. 全局作用域
   (a) 可以全局访问。最外层函数和最外层定义的变量拥有全局作用域。
   (b) Window 上的对象属性拥有全局作用域。
   (c) 未定义直接赋值的变量，会自动声明并拥有全局作用域。
   (d) 过多的全局变量会导致全局污染和命名冲突。

2. 函数作用域
   (a) 只能在函数中访问和使用，在函数中定义的变量都只能在内部使用。
   (b) 内部作用域可以访问外层作用域，但外层无法访问内部作用域。

3. ES6 中的块级作用域
   (a) 只能在代码块（由花括号 {} 包裹的代码）中使用。
   (b) ES6 中新增的 let 和 const 声明的变量具备块级作用域。
   (c) let 和 const 声明的变量不会导致变量提升，且 const 不能重复声明。
   (d) 块级作用域主要用来解决由变量提升导致的变量覆盖问题。

作用域链就是当变量在指定的作用域中没有找到时，会依次向上一层作用域进行查找，直到全局作用域。这个查找过程被称为作用域链。
</details>

# call() 、bind（）、 apply() 的区别？
<details open>
<summary>js</summary>

这三者都可以改变 this 的指向。call、apply 和 bind 的区别主要在于：

1. 入参形式：
   (a) call 和 bind 都是传入对象
   (b) apply 则是传入一个数组

2. 执行时机：
   (a) call 和 apply 改变 this 指向后，会立即执行函数
   (b) bind 在改变 this 指向后，会返回一个新函数，不会立即执行，需要手动调用

在 JavaScript 中，连续多次调用 bind 方法，最终函数的 this 指向是由第一次调用 bind 方法时的参数决定的
</details>

# 浏览器的垃圾回收机制的理解
<details open>
<summary>浏览器</summary>

JavaScript 在运行时需要分配内存空间来存储变量和值。当变量不再参与运行，就需要系统收回被占用的内存空间。如果不及时清理，就会造成系统卡顿、内存溢出，这就是垃圾回收机制。

在 V8 引擎中，堆内存被分为新生代和老生代两个区域：

1. 新生代
   存放的是生存时间短的对象。Minor GC（副垃圾回收器）主要负责新生代垃圾的回收。

2. 老生代
   存放的是生存时间久的对象。Major GC（主垃圾回收器）主要负责老生代垃圾的回收。

通常情况下，新生代占用的内存较小，而老生代占用的内存空间较大，其垃圾回收执行的时间也相对较长。
</details>

# 新生代（副垃圾回收器）
<details open>
<summary>浏览器</summary>
副垃圾回收器主要负责新生代的垃圾回收。大多数对象最开始会被分配在新生代，该存储空间相对较小，分为两个空间：From 空间和 To 空间。

这个 To 空间是空闲区。新增变量会放到 From 空间，当空间满后执行一次垃圾清理操作，对垃圾数据进行标记。标记完成后，将存活的数据复制到 To 空间中有序排列。

此时交换两个空间：原来的 To 变成 From，旧的 From 变成 To。

</details>

# 老生代（主垃圾回收器）
<details open>
<summary>浏览器</summary>

老生代中的垃圾回收主要负责存储一些占用空间大、存活时间长的数据。它采用“标记-清除”算法，过程分为标记和清除两个阶段：

1. 标记阶段：将所有变量打上标记 0，然后从根节点开始遍历，把存活的变量标记为 1。
2. 清除阶段：清除标记为 0 的对象并释放内存。清除后，将标记为 1 的变量重新改为 0，以便进行下一轮回收。

对同一块内存多次执行标记-清除算法后，会产生大量不连续的内存碎片。当碎片过多时，会导致大对象无法分配到足够的连续内存。

于是又引入了另一种算法——“标记-整理”算法：
(a) 标记过程仍然与标记-清除算法一致，先标记可回收对象。
(b) 但后续步骤不是直接清理，而是让所有存活对象都向一端移动，最后直接清理掉端边界之外的内存。
</details>

# 引用计数法
<details open>
<summary>浏览器</summary>

一个对象被引用一次，引用数加一；反之就减一。当引用数为零时，就会触发垃圾回收。

这种方式会产生一个问题：当对象存在循环引用时，引用数永不为零，导致无法回收。
</details>

# 哪些情况会导致内存泄漏
<details open>
<summary>浏览器</summary>

以下情况会导致内存泄漏：

1. 全局变量
   由于使用未声明的变量而意外创建了一个全局变量，使该变量一直存在于内存中无法被回收。

2. 被遗忘的计时器或回调函数
   设置了 setInterval 定时器而忘记取消。如果循环函数内有对外部变量的引用，那么这些变量就会一直留在内存中，无法被回收。

3. 脱离 DOM 的引用
   获取了一个 DOM 元素的引用，而后续该元素在页面中被删除。由于代码中一直保留着对该元素的引用，导致它也无法被从内存中删除。

4. 闭包
   不合理地使用闭包，从而导致变量一直被留在内存中。

5. 缓存
   不断往一个 Map 里塞数据却从不清理。
</details>

# src和href的区别
<details open>
<summary>HTML</summary>

src 和 href 加载外部资源的区别如下：

1. src (Source)
   当浏览器解析到该元素时，会暂停其他资源的加载和处理，直到资源加载完成。它会将资源内容嵌入到当前标签所在的位置，并应用到文档内（如 JS 脚本等）。
   (a) 常用标签：img、script、iframe 等

2. href (Hypertext Reference)
   指向外部资源所在的位置，与当前元素位置建立连接。当浏览器识别到它所指向的位置并将其下载时，不会阻止其他资源的加载和解析。
   (a) 常用标签：a、link 等
</details>

# DOCTYPE(⽂档类型) 的作⽤
<details open>
<summary>HTML</summary>

DOCTYPE 是一种标准通用标记语言的文档类型声明，用来告诉浏览器的解析器该用什么样的方式去加载网页文档。
</details>

# iframe 有那些优点和缺点？
<details open>
<summary>HTML</summary>

iframe 通常用来加载网页内容。

1. 优点：
   (a) 可以将网页原封不动地加载进来，增加代码的可用性
   (b) 用来加载加载速度较慢的内容（如广告、音频等），且不会影响主页面内容的加载

2. 缺点：
   (a) 加载的内容无法被浏览器识别，对 SEO 不友好
   (b) 会阻塞 onload 事件的加载
   (c) 会产生很多页面，不利于管理
</details>

# Canvas和SVG的区别
<details open>
<summary>HTML</summary>

1. Canvas 画布
   是用来绘制的 2D 图，是逐像素进行渲染的。

2. SVG 矢量图
   是基于 XML 描述的 2D 图形语言，每个元素都是可用的，可以为其添加事件。
</details>

# script标签中defer和async的区别
<details open>
<summary>HTML</summary>

它们俩都是用来标记外部 JS 脚本的异步加载，不会阻塞页面的加载和解析。其区别主要体现在执行顺序上：

1. 执行顺序
   (a) 多个 async 标签不能保证先后的执行顺序
   (b) 多个 defer 标签可以按照脚本在页面中出现的先后顺序执行

2. 执行时机
   (a) async 标签在加载完脚本后会立即执行
   (b) defer 标签要等到整个文档解析完后才执行
</details>

# 讲一下盒模型的理解
<details open>
<summary>HTML</summary>

CSS 盒模型是网页布局的基石，可以将 HTML 中的每一个元素都看成是一个矩形的盒子。



这个盒子有四个组成部分，从内到外分别是：

1. Content（内容）

2. Padding（内边距）

3. Border（边框）

4. Margin（外边距）



它一共有两个标准：

1. 标准盒模型

   可以使用 `box-sizing: content-box` 来设置。它的计算公式中，width 仅指 content 的宽度。

2. 怪异盒模型

   设置方法是 `box-sizing: border-box`。它的计算公式中，width 包含了 content 加 padding 再加 border 的总和
</details>

# CSS选择器的优先级
<details open>
<summary>HTML</summary>
!important > 内联样式 > ID 选择器 > 类选择器、伪类选择器、属性选择器 > 标签选择器、伪元素选择器 > 关系选择器、通配符选择器

权重计算公式
为了不记混，你可以使用 (0, 0, 0, 0) 权重计分制：

- 第 1 位 (Inline)：内联样式，计 (1, 0, 0, 0)

- 第 2 位 (ID)：ID 选择器，计 (0, 1, 0, 0)

- 第 3 位 (Class)：类、伪类、属性，计 (0, 0, 1, 0)

- 第 4 位 (Element)：标签、伪元素，计 (0, 0, 0, 1)

注意： 10 个类选择器也不会超过 1 个 ID 选择器（在大多数现代浏览器逻辑中，位与位之间是不进位的）。
</details>

# 单行、多行文本溢出
<details open>
<summary>HTML</summary>

单行

```css
overflow: hidden; // 溢出隐藏
text-overflow: ellipsis; // 溢出用省略号显示
whtie-space: nowrap; //规定段落中的文本不进行换行
```

多行

```css
overflow:hidden
text-overflow: ellipsis;     // 溢出用省略号显示
display:-webkit-box;         // 作为弹性伸缩盒子模型显示。
-webkit-box-orient:vertical; // 设置伸缩盒子的子元素排列方式：从上到下垂直排列
-webkit-line-clamp:3;        // 显示的行数
```

</details>

# px、em、rem的区别
<details open>
<summary>HTML</summary>

1. px：是绝对单位，不能随其他元素的变化而变化。
2. em：是相对于这个大小的。
3. rem：是相对于根元素的单位，会随根元素的变化而变化。
</details>

# flex布局理解
<details open>
<summary>HTML</summary>

Flex 布局是 CSS3 新增的一种布局方式，可以根据不同屏幕尺寸的变化来自适应大小。

常用的属性包括：

1. flex-direction：决定主轴的方向。
2. flex-wrap：定义如果一条轴线排不下，该如何换行。
3. flex-flow：是 flex-direction 和 flex-wrap 的结合形式，默认值是 row no-wrap。
4. justify-content：定义了项目在主轴上的对齐方式。
5. align-items：定义项目在交叉轴上如何对齐。
6. align-content：定义多根轴线的对齐方式（如果项目中只有一根轴线，该属性不起作用）。
</details>

# 对BFC的理解，如何创建BFC
<details open>
<summary>HTML</summary>

BFC（Block Formatting Context，块级格式化上下文）是 CSS 布局中的一个重要概念。在 BFC 布局中的元素不受外部元素的影响。

创建 BFC 需要满足以下四个条件之一：
1. overflow 的值不是 visible
2. display 的值为 inline-block、flex、grid 或 table-cell
3. position 的值为 absolute 或者 fixed
4. float 的值存在且不为 none

BFC 的主要作用如下：

1. 解决 margin 重叠问题
   由于 BFC 是一个独立的区域，内部元素和外部元素互不影响，将两个元素变为 BFC 即可解决 margin 重叠。

2. 创建自适应两栏布局
   可以用来创建自适应两栏布局，例如左边宽度固定，右边宽度自适应，从而解决宽度弹性问题。

3. 解决高度塌陷问题
   在子元素设置浮动后，父元素会发生高度塌陷（即父元素高度变为 0）。解决这个问题只需要将父元素变成一个 BFC。
</details>

# XSS
<details open>
<summary>浏览器</summary>

XSS（跨站脚本攻击）是一种代码注入攻击。攻击者通过在网站中注入恶意脚本，使之在用户的浏览器上运行，从而盗取用户的信息（如 Cookie 等）。

主要的避免方法包括：
1. 不使用服务端渲染
2. 对一些敏感信息进行保护，比如将 Cookie 设置为 HttpOnly，使得脚本无法获取
3. 仔细检查用户输入的地方和变量的长度
4. 绝对不要信任用户的输入。使用成熟的库（如 DOMPurify）过滤 HTML 标签，对左尖括号、右尖括号、分号、引号等字符做过滤
5. CSP (内容安全策略)：通过 HTTP Header Content-Security-Policy 白名单，限制浏览器只能从指定的域名加载脚本，禁止内联脚本执行。
</details>

# XSS 的具体攻击过程
<details open>
<summary>浏览器，安全</summary>

- 反射型：恶意脚本藏在 URL 里（如 `?q=<script>alert(1)</script>`），后端直接把搜索词拼接到 HTML 里返回。

- 存储型：黑客在评论区提交恶意脚本，存入了数据库。所有看这条评论的用户都会中招。

- DOM 型：纯前端漏洞，前端取出 URL 参数或输入框内容，未经转义直接通过 innerHTML 插入到页面。黑客可以用它偷走 document.cookie 发送到自己的服务器。
</details>

# CSRF（跨站请求伪造）
<details open>
<summary>浏览器</summary>

CSRF 攻击利用了 Cookie 会在同源请求中自动携带发送给服务器的特点，以此来实现用户冒充。

防御方法如下：
1. 添加验证码验证
2. 使用 Token 验证
3. 限制 Cookie 不能被第三方使用，进行同源检验
</details>

# CSRF 的具体攻击过程

<details open>
<summary>浏览器,安全</summary>

1. 用户登录了银行网站 bank.com，浏览器存了 Cookie。

2. 用户没退出，被诱导打开了恶意网站 bad.com。

3. bad.com 里有一段隐藏代码，比如 `<img src="http://bank.com/transfer?to=hacker&money=1000" />`。

4. 浏览器解析到 img，会自动向 bank.com 发请求，且会自动带上 bank.com 的 Cookie。服务器一看凭证有效，就把钱转了。

除了上面的 `<img>` GET 请求，还可以用隐藏的 `<form>` 表单自动提交（POST 请求），或者用 fetch/XHR 发送跨域请求。

</details>

# CSRF 怎么防御

<details open>
<summary>浏览器,安全</summary>

1. SameSite Cookie：设置 Cookie 的 SameSite=Lax 或 Strict，禁止跨站携带 Cookie（目前浏览器的默认策略，极大遏制了 CSRF）。

2. CSRF Token：服务器给每次会话下发一个随机 Token，前端每次请求放在 Header 里，黑客的网站拿不到这个 Token。

</details>

# 浏览器有哪些进程
<details open>
<summary>浏览器</summary>

浏览器主要包含以下进程：

1. 浏览器进程
   负责处理用户输入、渲染应用等主要任务。

2. 渲染进程
   负责解析 HTML、CSS、JavaScript，并将网页渲染成可视化的内容。

3. GPU 进程
   负责处理浏览器中的 GPU 加速任务。

4. 网络进程
   负责处理浏览器中的网络请求和响应，包括下载网页和资源等。

5. 插件进程
   负责控制浏览器的插件运行。
</details>

# 浏览器渲染优化
<details open>
<summary>浏览器</summary>

- 优化javaScript，JavaScript会阻塞HTML的解析，改变JavaScrip加载方式。

   - 将JavaScript放到body最后面
   - 尽量使用异步加载JS资源，这样不会阻塞DOM解析，如defer、async


- 优化CSS加载，

   - CSS样式少，使用内嵌样式
   - 导入外部样式使用link，而不是@import，因为它会阻塞渲染。


- 减少回流重绘

   - 避免频繁操作样式
   - 避免频繁操作DOM
   - 复杂动画使用定位脱离文当流
   - 使用transform替代动画
</details>

# Cookie、LocalStorage、SessionStorage区别
<details open>
<summary>浏览器</summary>

1. Cookie
   大小只有 4KB，跨域不能共享。安全性较低，容易被截获，且会随 HTTP 请求发送，影响传输效率。

2. Session Storage
   数据存储在内存中，体积相对较大。当浏览器窗口或标签页关闭时，数据会消失。相比 Cookie 更加安全，且不会被包含在请求中。

3. Local Storage
   数据存储在硬盘中，容量大，可以存储更多内容。生命周期长，除非手动删除，否则会一直存在。与 Session Storage 一样，它不会像 Cookie 那样随请求发送，安全性更高。
</details>

# 什么是同源策略
<details open>
<summary>浏览器</summary>

同源策略指的是浏览器只能访问同源的资源，不能跨过边界去读取另一个网站的数据。

同源的要求是协议、域名及端口号必须一致。跨域问题其实就是浏览器的同源策略造成的。
</details>

# 如何解决跨域问题
<details open>
<summary>浏览器</summary>

1. CORS（跨域资源共享）
   服务器通过设置特定的 HTTP header（如 Access-Control-Allow-Origin）来告诉浏览器允许哪些域名的请求访问。

2. JSONP 方案
   利用 `<script>` 标签不存在跨域限制的性质来发送请求。但它只支持 GET 请求，且安全性较低。

3. 代理跨域
   (a) Nginx 代理跨域
   (b) Node.js 中间件代理跨域：通过 Node 开启一个代理服务器来转发请求
</details>

# 事件流
<details open>
<summary>浏览器</summary>

事件流分为三个阶段：捕获阶段、目标阶段和冒泡阶段。

1. 捕获阶段：
   事件从最外层的阶段开始，逐级向下传播，直到到达目标阶段。

2. 目标阶段：
   事件到达目标节点，触发目标节点上的事件处理程序。

3. 冒泡阶段：
   事件从目标节点开始，逐级向上传播，直到到达最外层节点。
</details>

# 事件冒泡和捕获的区别
<details open>
<summary>浏览器</summary>

事件冒泡和事件捕获的区别在于传播方向不同：

1. 事件冒泡
   (a) 从下向上传播
   (b) 从子元素冒泡到父元素
   (c) 执行父元素的事件处理

2. 事件捕获
   (a) 从根节点开始，直接向下传播到具体的子元素
   (b) 也就是从父元素传播到子元素
</details>

# 如何阻止事件冒泡
<details open>
<summary>浏览器</summary>

- 普通浏览器：event.stopPropagation()
- IE浏览器：event.cancelBubble = true
</details>

# 对事件委托的理解
<details open>
<summary>浏览器</summary>

利用了浏览器的事件冒泡机制。在冒泡过程中，事件会上传到父节点，并且父节点可以通过事件对象捕获到目标节点。

具体实现方式：
1. 可以把子节点的监听函数定义在父节点上
2. 由父节点的监听函数统一处理多个子元素的事件
</details>

# 回流（重排）与重绘
<details open>
<summary>浏览器</summary>

当 DOM 的变化影响了元素，比如元素的尺寸、布局、显示或隐藏等改变了，就需要重新构建。一个页面至少需要一次回流，即在页面第一次加载的时候，这个时候一定会发生回流。

重绘则是当一个元素的外观发生变化，但没有改变布局时，重新渲染元素的外观（如 background-color）。回流必将引起重绘，但重绘不一定会引起回流。

如何避免回流和重绘：
1. 避免使用 table 布局
2. 尽可能在 DOM 树的最末端改变 class
3. 不要频繁操作元素的样式
4. 避免设置多层内联样式
5. 开启 GPU 加速
6. 使用 absolute 或者 fixed 脱离标准文档流
</details>

# process.nextTick

<details open>
<summary>JavaScript, Event Loop</summary>

它会在轮询的各个阶段结束时，进入到下一个阶段之前立即执行。
</details>

# setImmediate 和 setTimeout

<details open>
<summary>JavaScript, Event Loop</summary>

当代码直接在全局（Main Module）运行
```js
setTimeout(() => {
    console.log('setTimeout')
}, 0)
setImmediate(() => {
    console.log('setImmediate')
})
```
这种情况下，定时器的执行顺序是随机的。

如果把这两个函数放入一个 I/O 循环内调用，setImmediate 总是被优先调用
</details>

# this 的指向

<details open>
<summary>JavaScript</summary>

普通函数的 this 指向取决于‘函数是如何被调用的’（谁调用就指向谁），而箭头函数没有自己的 this，它在‘定义时’就已经永远继承了外层词法作用域的 this。

普通函数的调用场景可以分为：
- 默认绑定：独立调用，在非严格模式下，this 指向全局对象，在严格模式（'use strict'）下，this 无法绑定到全局对象，会被设置为 undefined。
- 隐式绑定：作为对象的方法调用
- 显式绑定（call/apply/bind）
- new 绑定
</details>

# 什么是 Virtual DOM（虚拟 DOM）？它的优势是什么？

<details open>
<summary>React</summary>

虚拟 DOM 本质上是一个 JS 对象，是真实 DOM 的轻量级抽象。
它的优势在于：
- 批量处理能力
- 跨平台能力

创建虚拟DOM目的就是为了更好将虚拟的节点渲染到页面视图中，虚拟DOM对象的节点与真实DOM的属性一一照应
</details>

# 虚拟 DOM 和真实 DOM 的区别

<details open>
<summary>React</summary>

虚拟 DOM 不会进行重排与重绘操作，而真实 DOM 会频繁重排与重绘。

1. 虚拟 DOM 的总损耗：
   虚拟 DOM 增删改 + 真实 DOM 差异增删改 + 重排与重绘

2. 真实 DOM 的总消耗：
   真实 DOM 完全增删改 + 重排与重绘
</details>

# 请简述 React 的 Diff 算法机制。

<details open>
<summary>React</summary>

同层比较（Tree Diff）、组件类型比较（Component Diff）、通过 key 标识复用节点（Element Diff）
</details>

# React Fiber 架构解决了什么痛点？

<details open>
<summary>React</summary>

React 15 的栈调和（Stack Reconciler）是同步不可中断的，会导致页面卡顿。Fiber 将渲染任务拆分成多个可中断的小任务（基于时间分片），优先响应高优先级的交互（如用户点击）。
</details>

# useState 和 useRef 的本质区别是什么？

<details open>
<summary>React</summary>

破题要点：useState 的更新会触发组件重新渲染（Re-render）；useRef 的更新（修改 .current）是静默的，不会触发重新渲染，常用来保存跨渲染周期的可变数据或 DOM 节点引用。
</details>

# 为什么 Hooks 不能写在 if 语句或循环里？

<details open>
<summary>React</summary>

React 底层是通过单向链表（或数组顺序）来记录 Hooks 的调用状态的。如果放在条件判断里，会导致渲染时的 Hooks 调用顺序和挂载时不一致，状态就会错乱。
</details>

# 在 useEffect 中如何正确处理闭包陷阱（Stale Closure）？

<details open>
<summary>React</summary>

在依赖数组（Dependency Array）中正确声明所有被使用到的响应式变量，或者使用 useRef 来保持对最新值的引用。
</details>

# useMemo 和 useCallback 的区别及使用场景？

<details open>
<summary>React</summary>

useMemo 缓存的是计算结果（通常是昂贵的计算逻辑），useCallback 缓存的是函数引用本身。注意：不要滥用，只有当它们作为 props 传递给子组件（且子组件被 React.memo 包裹）时，才具有实质的优化意义。
</details>

# 谈谈你对 React.memo 的理解。

<details open>
<summary>React</summary>

它是高阶组件（HOC），用于浅比较（Shallow Compare）组件的 props。如果 props 没变，就跳过渲染。适合那些经常被打断、但自身数据很少变化的纯展示型组件。
</details>

# React 18 中的并发渲染（Concurrent Rendering）带来了什么？

<details open>
<summary>React</summary>

引入了 useTransition 和 useDeferredValue，允许将某些非紧急的 UI 更新标记为“低优先级”，从而保持界面的丝滑响应。
</details>

# 服务端组件（React Server Components, RSC）与传统的 SSR 有什么区别？

<details open>
<summary>React</summary>

RSC 只在服务器端运行，零 JS 打包体积发送到客户端，且可以直接访问后端资源（如数据库）。SSR 是在服务端生成 HTML 字符串，客户端依然需要下载对应的 JS 并在浏览器端进行 Hydration（水合）。
</details>

# 类组件的生命周期

<details open>
<summary>React</summary>

- 挂载阶段
  - defaultProps：设置 props 的默认值
  - propTypes：props 数据类型检查
  - constructor(props)：初始化 props and state，绑定事件处理函数
  - componentWillMount()：组件挂载前钩子
  - componentDidMount()：组件挂载成功钩子，该过程组件已经成功挂载到了真实 DOM 上。由于在渲染过程中只执行一次，因此常用来监听事件，获取到真实 DOM，请求后台接口。
- 更新阶段
  - componentWillReceiveProps(newProps)：父组件更新 props 钩子
  - shouldComponentUpdate(nextProps, nextState)：组件是否更新钩子
  - componentWillUpdate()：组件更新前钩子 (17版本后不推荐使用)
  - componentDidUpdate()：此生命周期方法在组件更新完后被调用。
- 卸载阶段
  - componentWillUnmount()：这是 unmount 阶段唯一的生命周期，在这里进行的是善后工作：清理计时器、取消网络请求或者取消事件监听等。
</details>

# 函数组件的生命周期

<details open>
<summary>React</summary>

在函数组件中，使用 useEffect 将 componentDidMount、componentDidUpdate 和 componentWillUnmount 结合起来。

生命周期的执行流程如下：
1. 最开始先执行 useState 的初始赋值（run lazy initializer）。
2. 执行 render，即函数组件自身执行并生成虚拟 DOM。
3. 执行 browser paint，浏览器把 UI 画到屏幕上。
4. 执行 cleanup effects。如果是更新阶段，会先执行上一次渲染留下的 cleanup 函数。
5. 执行 run effects，即执行当前的 useEffect 逻辑。

此外，还有一个特殊的 Hook 叫作 useLayoutEffect。它的特点是同步执行，在 DOM 更新后、浏览器画图形前执行。

如果你需要根据 DOM 元素的尺寸来相应地调整样式，使用 useEffect 可能会看到页面闪烁。在这种情况下，需要使用 useLayoutEffect，在浏览器涂色之前进行操作。
</details>

# MVVM 概念

<details open>
<summary>React</summary>

MVVM 是一种软件架构模式。MVVM 分别表示 Model、View 和 ViewModel。

1. Model
   代表数据模型，数据和业务逻辑都在 Model 层中定义。
2. View
   表示 UI 视图，负责数据的展示。
3. ViewModel
   负责监听 Model 中数据的变化，并控制视图的更新，处理用户交互操作。

Model 和 View 之间没有直接关联，而是通过 ViewModel 来进行联系的。Model 和 ViewModel 之间有着双向数据绑定的联系，因此：
- 当 Model 中的数据发生改变时，会触发 View 层的刷新。
- View 中由于用户交互操作而改变的数据，也会在 Model 中同步。
</details>

# React diff

<details open>
<summary>React</summary>

React 采用虚拟 DOM 的方法，避免对真实 DOM 的无效操作，从而提高页面构建效率。

React 在内存中维护一棵虚拟 DOM 树，当状态发生改变时，会自动更新虚拟 DOM，获得一个新的虚拟 DOM 树。随后通过 Diff 算法比较新旧虚拟 DOM 树，找出最小变化的部分并加入队列，最终批量将这些 Patch 更新到实际的 DOM 中。

传统的 Diff 算法是将一棵树通过最小操作步数映射到另一棵树，这种算法被称为 Tree Edit Distance。由于传统算法无法达到高性能要求，React 团队基于大胆的假设提出了相关策略，成功将 O(n³) 复杂度的问题转化为 O(n) 复杂度。

其核心包含两点假设与三个策略：
1. 两个不同类型的元素会产生不同的树。
2. 开发者可以通过 `key` 属性来暗示哪些子节点在不同的渲染下能保持稳定。

具体的 Diff 优化基于以下三个层面：
1. Tree Diff（分层对比策略）：
   在 Web UI 中，DOM 节点跨层级的移动操作特别少，可以忽略不计。React 对虚拟 DOM 树进行分层比较，只比较同层级的节点。
2. Component Diff：
   (a) 拥有相同类型的两个组件将会生成相似的树形结构。
   (b) 不同类型的组件会生成不同的树形结构。
   (c) 开发者可以通过 `shouldComponentUpdate` 策略对 Component Diff 进行优化。
3. Element Diff：
   对于同一级的一组节点，它们可以通过唯一的 `key` 进行区分。通过设置唯一 `key` 策略，React 可以高效地识别节点并进行算法优化。

那么，React 具体是如何执行 Diff 的呢？
React 是基于组件构建的。首先将整个虚拟 DOM 树抽象为 React 组件树，每一个组件由一棵更小的组件树组成。以此类推，将 React Diff 策略应用于这棵组件树的比较：若其中某个组件需要比较，则将其看作一个较小的组件树，继续使用该策略进行递归比较，直到层次遍历完所有需要比较的组件。
</details>

# React Fiber 架构现代深度总结

<details open>
<summary>核心架构与运行机制</summary>

## 1. 核心单元：FiberNode

Fiber 既是一种**数据结构**（链表节点），也是一个**工作单元**。

* **数据结构**：它通过 `child`、`sibling`、`return` 指针构成了一棵**单向链表树**，解决了传统 Virtual DOM 必须递归遍历且无法中断的弊端。
* **工作单元**：每个节点记录了组件的状态、Props 以及要执行的任务。

## 2. 调度机制：Lane 模型 (取代 ExpirationTime)

React 18+ 使用 **Lane（车道）模型** 来处理优先级。

* **原理**：使用 31 位二进制位（位掩码）来表示优先级。
* **优势**：支持**优先级重叠与合并**。例如，可以将多个不连续的低优先级更新合并成一个批处理，或者在处理高优先级任务时，通过位运算快速判断是否包含某个低优先级任务。

## 3. 双缓存机制 (Double Buffering)

React 维护两棵树：**Current Tree**（当前屏幕显示内容）和 **Work-in-Progress (WIP) Tree**（正在内存中构建的内容）。

* **更新流程**：所有更新都在 WIP Tree 上进行。
* **原子切换**：一旦 WIP Tree 构建完成（通过提交阶段），React 仅仅通过修改一个指针（`root.current`），瞬间完成树的替换。
* **价值**：保证了渲染的原子性；如果构建中途出错或被高优先级任务打断，直接丢弃 WIP 树即可，不会影响现有 UI。

---

## 4. 运行过程：两阶段模型

### 阶段一：调和阶段 (Reconciliation / Render Phase)

* **特点**：**异步、可中断**。
* **执行逻辑**：
* **Scheduler (调度器)**：利用 `MessageChannel` 模拟浏览器空闲时间，根据任务的 Lane 优先级分配执行时机。
* **beginWork (自顶向下)**：对比新旧 Fiber 节点（Diff 算法），为有变化的节点打上 `Flags`（如 Placement, Update）。
* **completeWork (自底向上)**：收集子树的副作用，将所有带 `Flags` 的节点冒泡到根节点，形成 **Effect List**。


* **注意**：此阶段不涉及真实 DOM 操作。

### 阶段二：提交阶段 (Commit Phase)

* **特点**：**同步、不可中断**。一旦开始，就会一鼓作气执行完。
* **内部细分步骤**：
1. **Before Mutation**：DOM 真正变化前。执行 `getSnapshotBeforeUpdate` 等。
2. **Mutation (核心)**：**操作真实 DOM**。进行节点的增、删、改。
3. **Layout**：DOM 已更新，浏览器绘画前。执行 `useLayoutEffect` 同步钩子及 `componentDidMount/Update`。


* **最后**：切换指针，将 WIP 树变为 Current 树。

---

## 5. 为什么 Fiber 能让页面更流畅？

* **时间分片 (Time Slicing)**：它把长达 100ms 的 JavaScript 计算任务拆分成多个 5ms 的小片。在小片之间，React 会把控制权还给浏览器，让浏览器去处理动画或点击事件。
* **并发能力 (Concurrency)**：支持任务的“插队”与“恢复”。

</details>

# 为什么提交阶段（Commit）一定要同步不可中断？

<details open>
<summary>React，Fiber</summary>

为了保证 **UI 的一致性**。如果提交阶段可中断，用户可能会在某一帧看到“半成品” UI（比如一个列表，上半部分更新了，下半部分还没更新），这会导致极其糟糕的用户体验和布局抖动。
</details>

# 既然 `useEffect` 是异步的，它在 Commit 阶段的哪个位置？

<details open>
<summary>React，Fiber</summary>

它不在 Commit 阶段的同步链路里。它会在 Commit 阶段彻底结束、浏览器完成绘画（Paint）后，由调度器异步触发。
</details>

# Fiber 进阶补充
![](https://raw.githubusercontent.com/LJL17378/my-img/main/20260224014333103.png)

# Loader和Plugin的区别

<details open>
<summary>工程化</summary>

Loader 和 Plugin 的本质与区别：

1. Loader（转化器）
   Loader 本质上是一个函数，起转化器的作用。Webpack 默认只能解析原生 JS 文件，对于其他类型的文件（如 CSS、图片等），就需要通过对应的 Loader 进行转换。
   (a) 配置方式：在 `module.rules` 下进行配置。
   (b) 结构：类型为数组，每一项都是一个 Object，描述了对于什么类型的文件使用什么样的加载参数。

2. Plugin（插件）
   Plugin 是一个插件，用于增强 Webpack 的功能。Webpack 在运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在核心生命周期中通过 Webpack 提供的 API 改变输出结果。
   (a) 配置方式：在 `plugins` 下进行配置。
   (b) 结构：类型为数组，每一项都是一个 Plugin 的实例，参数通过构造函数传入。

两者用法不同，Loader 侧重于文件内容的转换，而 Plugin 侧重于功能扩展和流程控制。
</details>

# Webpack 的作用是什么？

<details open>
<summary>工程化</summary>

Webpack 的核心作用是模块化管理和自动化构建。

它通过依赖图将项目中的所有资源视为模块进行打包，解决了前端开发中的两个核心问题：

兼容性：利用 Loader 将 TS、Sass 等高级语法转译为浏览器识别的资源。

性能：通过压缩、混淆、Tree Shaking 和代码分割，优化最终产物的加载效率。

此外，它还提供了强大的插件系统和开发服务器，构建了一套完整的前端开发工作流。
</details>

# Webpack 构建流程（进阶版）

<details open>
<summary>工程化</summary>

## 1. 初始化阶段 (Initialization)

* **参数解析**：从配置文件（`webpack.config.js`）和 Shell 语句中读取并合并参数。
* **实例化 Compiler**：用配置参数初始化 `Compiler` 对象，它负责文件监听和启动编译。
* **挂载插件**：遍历所有 Plugin，执行它们的 `apply` 方法。**注意：** Webpack 的插件机制是基于 **Tapable** 的发布订阅模式，插件会在后续特定的时间点（钩子）触发。

## 2. 编译阶段 (Development / Building)

* **确定入口**：根据 `entry` 配置找到所有入口文件。
* **编译模块 (Make)**：从入口开始，调用特定的 **Loader** 对模块进行转译。
* **递归解析**：转译后的模块会经过 AST（抽象语法树）解析，找出该模块依赖的其他模块，递归执行该步骤，直到所有文件都经过了处理。

## 3. 完成编译与输出 (Seal & Emit)

* **组装 Chunk (Seal)**：根据模块之间的依赖关系，将多个 Module 组合成 **Chunk**（代码块）。此时会进行代码合并、优化（如 Tree Shaking、Code Splitting）。
* **生成资源 (Assets)**：把每个 Chunk 转换成一个单独的文件加入到输出列表。
* **写入文件 (Emit)**：确定好输出内容后，根据 `output` 配置，将文件内容写入文件系统。

</details>

# 什么是Webpack的热更新（Hot Module Replacement）？原理是什么？

<details open>
<summary>工程化</summary>

Webpack的热更新（Hot Module Replacement，简称HMR），在不刷新页面的前提下，将新代码替换掉旧代码。

HRM的原理实际上是 webpack-dev-server（WDS）和浏览器之间维护了一个websocket服务。当本地资源发生变化后，webpack会先将打包生成新的模块代码放入内存中，然后WDS向浏览器推送更新，并附带上构建时的hash，让客户端和上一次资源进行对比。客户端对比出差异后会向WDS发起Ajax请求获取到更改后的内容（文件列表、hash），通过这些信息再向WDS发起jsonp请求获取到最新的模块代码。
</details>

# bundle，chunk，module是什么？

<details open>
<summary>工程化</summary>

- bundle 捆绑包：它是构建过程的最终产物，由所有需要的chunk和module组成。
- chunk 代码块：一个chunk由多个模块组合而成，用于代码的合并和分割，在构建过程中一起被打包到一个文件中。
- module 模块：是代码的基本单位，可以是一个文件、一个组件、一个库等。在编译的时候会从 entry 中递归寻找出所有依赖的模块。
</details>

# 什么是Code Splitting？

<details open>
<summary>工程化</summary>

Code Splitting代码分割，是一种优化技术。它允许将一个大的chunk拆分成多个小的chunk，从而实现按需加载，减少初始加载时间，并提高应用程序的性能。

通常Webopack会将所有代码打包到一个单独的bundle中，然后在页面加载时一次性加载整个bundle。这样的做法可能导致初始加载时间过长，尤其是在大型应用程序中，因为用户需要等待所有代码加载完成才能访问应用程序。

Code Splitting 解决了这个问题，它将应用程序的代码划分为多个代码块，每个代码块代表不同的功能或路由。这些代码块可以在需要时被动态加载，使得页面只加载当前所需的功能，而不必等待整个应用程序的所有代码加载完毕。

在Webpack中通过optimization.splitChunks配置项来开启代码分割。
</details>

# Webpack的Source Map是什么？如何配置生成Source Map？

<details open>
<summary>工程化</summary>

Source Map是一种文件，它建立了构建后的代码与原始源代码之间的映射关系。通常在开发阶段开启，用来调试代码，帮助找到代码问题所在。

可以在Webpack配置文件中的devtool选项中指定devtool: 'source-map'来开启。
</details>

# Webpack的Tree Shaking原理
<details open>
<summary>工程化</summary>

一句话定义：
Tree Shaking 是一种基于 ES Module 静态分析的优化技术，它能在打包时“摇掉”代码中未被引用的部分（Dead Code），从而减小产物体积。

核心原理：

1. 静态分析（基于 ESM）：
Tree Shaking 必须依赖 ES6 模块规范。因为 ESM 的 import/export 是静态的（只能在模块顶层，不能在 if 语句里），Webpack 可以在不运行代码的情况下，通过 AST（抽象语法树）推导出完整的依赖关系图。

2. 标记阶段（Marking）：
Webpack 在构建依赖图时，会给每个模块的导出成员打上标签。如果某个导出项没有被任何地方引用，它会被标记为 unused harmony export。

3. 剔除阶段（DCE）：
在压缩混淆阶段（通常使用 Terser 或 UglifyJS），工具会识别这些“未引用标记”，并物理删除对应的变量和函数。
</details>

# 为什么有时候 Tree Shaking 会失效？
<details open>
<summary>工程化</summary>

1. 副作用（Side Effects）：
这是最常见的原因。即使一个模块没有导出任何东西，它内部的代码可能修改了全局变量（如 window.a = 1）或修改了原型链。

   - 解决方法：在 package.json 中配置 "sideEffects": false，明确告诉 Webpack 哪些文件是没有副作用的，可以放心“摇”。

2. CommonJS 规范：
如果是用 require() 导入的模块，因为 CJS 是动态加载的，Webpack 无法进行静态分析，此时 Tree Shaking 会失效。

3. Babel 转译问题：
有些旧版的 Babel 会把 ESM 转译成 CJS，导致 Webpack 拿到的代码已经失去了静态特性。所以要确保 Babel 的配置中 modules: false。
</details>

# 如何提高webpack的打包速度
<details open>
<summary>工程化</summary>

- 利用缓存：利用Webpack的持久缓存功能，避免重复构建没有变化的代码。可以使用cache: true选项启用缓存。
- 使用多进程/多线程构建 ：使用thread-loader、happypack等插件可以将构建过程分解为多个进程或线程，从而利用多核处理器加速构建。
- 使用DllPlugin和HardSourceWebpackPlugin： DllPlugin可以将第三方库预先打包成单独的文件，减少构建时间。HardSourceWebpackPlugin可以缓存中间文件，加速后续构建过程。
- 使用Tree Shaking: 配置Webpack的Tree Shaking机制，去除未使用的代码，减小生成的文件体积
- 移除不必要的插件: 移除不必要的插件和配置，避免不必要的复杂性和性能开销。
</details>

# 如何减少打包后的代码体积
<details open>
<summary>工程化</summary>

- 代码分割（Code Splitting）：将应用程序的代码划分为多个代码块，按需加载。这可以减小初始加载的体积，使页面更快加载。
- Tree Shaking：配置Webpack的Tree Shaking机制，去除未使用的代码。这可以从模块中移除那些在项目中没有被引用到的部分。
- 压缩代码：使用工具如UglifyJS或Terser来压缩JavaScript代码。这会删除空格、注释和不必要的代码，减小文件体积。
- 使用生产模式：在Webpack中使用生产模式，通过设置mode: 'production'来启用优化。这会自动应用一系列性能优化策略，包括代码压缩和Tree Shaking。
- 使用压缩工具：使用现代的压缩工具，如Brotli和Gzip，来对静态资源进行压缩，从而减小传输体积。
- 利用CDN加速：将项目中引用的静态资源路径修改为CDN上的路径，减少图片、字体等静态资源等打包。
</details>

# vite比webpack快在哪里
<details open>
<summary>工程化</summary>

- 冷启动速度：vite是利用浏览器的原生ES moudle，采用按需加载的当时，而不是将整个项目打包。而webpack是将整个项目打包成一个或多个bundle，构建过程复杂。
- HMR热更新： vite使用浏览器内置的ES模块功能，使得在开发模式下的热模块替换更加高效，那个文件更新就加载那个文件。它通过WebSocket在模块级别上进行实时更新，而不是像Webpack那样在热更新时重新加载整个包。
- 构建速度： 在生产环境下，Vite的构建速度也通常比Webpack快，因为Vite的按需加载策略避免了将所有代码打包到一个大文件中。而且，Vite对于缓存、预构建等方面的优化也有助于减少构建时间。
- 缓存策略： Vite利用浏览器的缓存机制，将依赖的模块存储在浏览器中，避免重复加载。这使得页面之间的切换更加迅速。
- 不需要预编译： Vite不需要预编译或生成中间文件，因此不会产生大量的临时文件，减少了文件IO操作，进一步提升了速度。
</details>

# 什么是幽灵依赖
<details open>
<summary>工程化</summary>

幽灵依赖是指：B包未在package.json中声明，但是A包（已声明）需要，所以也被安装到node_modules下。并且我在项目中用了B包（因为我发现可以直接导入，以为声明了）。之后不需要A包了（或者A包升级了，并且A包需要依赖其他版本的B包了），那么A包所依赖的B包就被删除了，但是项目里我直接用了B包，就error了
</details>

# React 合成事件（SyntheticEvent）的意义
<details open>
<summary>React</summary>

React 并不直接使用浏览器的原生事件，而是实现了一套自己的事件机制。

1. 抹平浏览器差异：封装了跨浏览器的标准接口，开发者无需处理不同浏览器的兼容性问题。

2. 性能优化：通过事件委托（Event Delegation）。React 17 之前委托在 document，React 17+ 委托在应用挂载的根节点（Root Container）。这避免了在每个 DOM 节点上频繁绑定/卸载事件。

3. 更好的垃圾回收：React 通过事件池（Event Pool，注：React 17 后已取消）或统一的对象管理，减少了内存开销。
</details>

# React 性能优化排查流程
<details open>
<summary>React,实战</summary>

当页面卡顿时，应遵循以下排查步骤：

- 使用 React DevTools Profiler：录制组件渲染过程。查看“为什么这个组件会渲染”（Why did this render?），找出不必要的 Props 变化。

- 使用 Chrome Performance：观察 Main 线程，定位是否存在超过 50ms 的长任务（Long Tasks）。

- 定位“重渲染渲染源”：检查是否因为 Context 滥用、顶层 State 设置不当导致的大面积 Re-render。

- 代码分割检查：通过网络面板查看 bundle 大小，检查是否某些大库（如 Echarts）被全量引入，应改为 React.lazy 动态导入。
</details>

# 如何解决 Context 导致的“全家桶”无效渲染？
<details open>
<summary>React</summary>

Context 的本质是广播，一人改变全家更新。解决方案：

1. 拆分 Context：将不常变的数据（如 UserInfo）和高频变的数据（如 Timer）拆分到不同的 Provider 中。

2. 组件内部分流：在消费者端，不直接在大型组件里 useContext，而是写一个中间件组件获取数据并传给被 React.memo 包裹的子组件。

3. 使用组合（Composition）：将子组件作为 children 传递，这样子组件不会随 Provider 的重新渲染而重排。
</details>

# Redux 与 Zustand 的区别及选型
<details open>
<summary>React,状态管理</summary>

1. Redux (Toolkit)：

- 优点：流程极度规范，中间件生态丰富（Saga, Thunk），适合极其庞大且对状态回溯有严格要求的团队。

- 缺点：样板代码（Boilerplate）太多，学习曲线陡峭。

2. Zustand：

- 优点：极其轻量（1KB），基于 Hooks，无需 Provider 包裹根组件即可跨组件共享状态，天然支持局部选择器（Selector）以减少渲染。

- 结论：除非项目复杂度极高或已有沉淀，否则现代 React 开发首选 Zustand。
</details>

# 为什么 key 不能用 Index（索引）？
<details open>
<summary>React</summary>

Key 的作用是辅助 Diff 算法识别节点稳定性。

- 潜在风险：如果列表发生逆序或插入操作，Index 会发生变化。
- 表现：
  1. 性能损耗：原本可以复用的节点因为 Index 变了被强制销毁重建。

  2. 状态错误：如果组件内部有非受控状态（如 Input 里的值），由于 React 认为节点还在（只是 Index 变了），会导致 Input 里的文字不随列表移动，产生 UI 错误。

</details>

# React 17 和 18 在事件处理上的重大区别
<details open>
<summary>React</summary>

1. 事件委托点：17 改为 Root 节点而非 document，解决了微前端架构下多个 React 实例并存时的事件冲突。

2. 自动批量更新 (Automatic Batching)：在 18 中，像 setTimeout、Promise、原生 DOM 事件里的 setState 都会自动合并；而 17 仅限于 React 合成事件内部。

3. 新增并发特性：18 允许通过 useTransition 降低某些事件触发的更新优先级，确保输入框等交互不卡顿。

</details>

# React Context API 的作用
<details open>
<summary>React</summary>

1. 核心作用：跨层级数据传递
Context 提供了一种在组件树中穿透传递数据的方法，而无需手动地通过 props 在每一个层级逐级传递（即解决 Props Drilling / 属性钻取 问题）。

2. 适用场景
它主要用于存储那些对于组件树而言是“全局”或“共享”的数据，例如：

- 主题管理（Dark / Light Mode）

- 用户信息（当前登录的用户头像、权限等）

- 语言国际化（i18n 配置）

- 配置信息（路由状态、全局配置参数）

3. 核心 API 组成
- React.createContext(defaultValue)：创建一个 Context 对象。

- Context.Provider：生产者，通过 value 属性分发数据。

- useContext(Context)：消费者，Hooks 方式获取数据，使代码更简洁。

4. 优缺点分析
- 优点：

   - 解耦：中间组件不再需要感知不需要的 props。

   - 内置：无需引入第三方状态库（如 Redux）即可实现轻量级全局状态共享。

- 缺点：

   - 性能问题：当 Provider 的 value 发生变化时，所有消费该 Context 的组件都会重新渲染。如果 Context 存储了过于庞大且频繁变动的数据，会导致大面积无效渲染。

   - 组件复用性下降：组件如果过度依赖 Context，会导致其难以在其他地方独立复用（因为必须包裹在特定的 Provider 内）。
</details>

# React 状态提升 (Lifting State Up)
<details open>
<summary>React</summary>

1. 概念定义
当多个组件需要共享同一个变化的数据时，将这个状态从各自的内部提取出来，移动到它们共同的最近父组件（Closest Common Ancestor）中进行管理。

2. 解决的痛点
- 数据不一致：两个兄弟组件各自维护同一份数据的副本，容易导致 UI 显示不同步。

- 通信困难：兄弟组件之间无法直接传参。

3. 具体工作模式
   1. 下发 State：父组件通过 props 将状态传递给子组件。

   2. 下发 Handler：父组件将修改状态的函数（回调函数）也传给子组件。

   3. 向上通信：子组件通过调用父组件传下来的回调函数，通知父组件修改状态。


4. 状态提升 vs Context API
   - 状态提升：适用于层级较浅、关系紧密的组件。优点是数据流极其清晰（显式 Props 传递），符合“单向数据流”。

   - Context API：适用于 **跨层级（深层嵌套）** 的全局数据。优点是避免了 Props Drilling（属性钻取）。

</details>

# 什么是 JSX？
<details open>
<summary>React 基础</summary>

1. 概念定义
JSX 全称 JavaScript XML。它是 JavaScript 的一种语法扩展，允许我们在 JavaScript 代码中直接编写类似 HTML 的结构。

2. 本质：它不是 HTML
JSX 看起来像 HTML，但它最终会被编译为普通的 JavaScript 对象。

- 在 React 17 之前：被编译为 React.createElement() 调用。

- 在 React 17+ 之后：被编译为自动引入的 _jsx() 函数调用。
</details>

# 为什么要使用 JSX？
<details open>
<summary>核心价值</summary>

1. 关注度分离（Separation of Concerns）的现代解释
- 传统的开发模式提倡“HTML 和 JS 分离”。但 React 认为：渲染逻辑与 UI 结构本质上是耦合的。

- 作用：JSX 允许我们将逻辑（JS）和结构（Markup）放在同一个地方（组件），这使得组件更加独立、易于维护。

2. 开发体验（DX）与可读性
- 直观：编写嵌套的 React.createElement 极其痛苦且难以阅读。JSX 提供了视觉上的层次感。

- 类型安全：JSX 在编译阶段就能发现一些明显的语法错误。

3. 执行效率与优化
- 静态分析：由于 JSX 的结构相对固定，React 的编译器可以在编译时进行一些静态优化。

- 防止注入攻击（XSS）：React 会在渲染前默认转义所有字符串，有效防止了跨站脚本攻击。

4. 强大的表现力
- 在 JSX 中，你可以使用完整的 JavaScript 表达式（放在 {} 里的内容），这比传统模板引擎（如 Mustache 或 Handlebars）的逻辑处理能力强得多。

</details>

# React 是如何减少重排与重绘的？
<details open>
<summary>React 核心价值</summary>

1. 虚拟 DOM 与 批量更新 (Batch Updates)
- 痛点：在原生 JS 中，如果你循环 10 次向 DOM 插入节点，浏览器可能会触发 10 次重排。

- React 方案：React 将 10 次修改先应用在虚拟 DOM 上，计算出最终的差异（Patch），最后只对真实 DOM 进行 1 次 操作。

- 本质：将多次引起重排的操作合并为一次，将 O(多次重排) 降为 O(1次重排)。

2. Diff 算法的“最小化更新”
- React 的 Diff 算法通过同层比较，精准找到哪些 DOM 节点需要变动。

- 例子：如果你只是修改了一个列表项的颜色，React 只会更新该节点的 style（触发重绘），而不会删除并重新创建整个列表（避免了大面积重排）。

3. Fiber 架构与时间分片
- 痛点：如果一次重排的任务过重（比如渲染一个超长列表），浏览器主线程会被卡死，导致动画掉帧。

- React 方案：Fiber 将渲染任务拆分。虽然它不能减少单次重排的固定成本，但它能优先响应交互，让浏览器有喘息机会去处理高优先级的 Paint，从而在视觉上解决卡顿感。

</details>

# DNS解析的详细过程
<details open>
<summary>计算机网络</summary>

DNS 解析的详细过程如下：

1. 本地查询
   (a) 查找浏览器缓存
   (b) 查找操作系统缓存（Hosts 文件）
   (c) 查找路由器缓存

2. 递归查询
   如果本地没有相关记录，客户端会向网络运营商提供的 Local DNS 发起递归查询。

3. 迭代查询过程
   (a) Local DNS 向根域名服务器发起请求，根域名服务器返回顶级域名服务器的 IP
   (b) Local DNS 向顶级域名服务器发起请求，顶级域名服务器返回权威域名服务器的 IP
   (c) Local DNS 向权威域名服务器发起请求，获取最终的目标 IP 地址

4. 结果返回
   Local DNS 将获取到的 IP 地址返回给客户端，并在各层级进行缓存。
</details>

# 虚拟 DOM 的缺点
<details open>
<summary>底层真相</summary>

1. 额外的内存开销
VDOM 是真实 DOM 的一个完整 JavaScript 对象描述。在大型应用中，维护这棵巨大的 JS 树会占用显著的内存。

2. 初次渲染慢
VDOM 并不是直接操作 DOM，它多了一步“计算”过程：JSX -> VDOM -> 真实 DOM。

- 在首次加载页面时，由于没有旧树可以对比，VDOM 必须全量构建 JS 对象再转化为 DOM，性能其实比直接 innerHTML 或直接创建 DOM 慢。

3. 极端场景下的计算压力
当组件树非常庞大且更新频繁时，Diff 算法本身的计算（递归遍历、Map 对比）会消耗大量 CPU 时间。如果计算耗时超过 16.6ms，页面就会掉帧卡顿（这也是 React 推出 Fiber 架构来分片任务的原因）。

</details>

# 虚拟 DOM vs 真实 DOM：谁性能更强？
<details open>
<summary>面试决胜点</summary>

结论：没有绝对的快慢，只有场景的适配。
- 真实 DOM 的优势：在单次、微小的更新中（如修改一个颜色），直接操作 DOM 是最快的。

- 虚拟 DOM 的优势：在大量、复杂的更新中，它通过“批处理”和“最小化差异更新”，减少了浏览器的重排和重绘次数，保证了性能的下限。

- 面试金句：虚拟 DOM 并不是比原生 DOM 快，它真正的价值是在不需要手动优化的情况下，提供了一种足够好的性能表现，并且实现了跨平台（如 RN）和声明式编程。

</details>

# 不同场景下的技术真实 DOM 和虚拟 DOM 的选择
<details open>
<summary>工程实战</summary>

1. 选择虚拟 DOM 的场景（React/Vue）
- 复杂交互应用：如后台管理系统、社交平台、协同文档。

- 数据驱动频繁：状态经常变化，且多个 UI 之间存在联动。

- 跨平台开发：需要一套代码同时运行在 Web、App (Native) 和小程序。

2. 选择直接操作真实 DOM 的场景
- 极致轻量级页面：如简单的活动 H5、静态展示页。引入 React 库本身的大小和开销就不划算。

- 局部极致优化：

  - 高性能动画：如游戏引擎、复杂的 3D 渲染（通常直接操作 Canvas 或 DOM 的 Transform 属性）。

  - 超大数据表格/长列表：有时候 VDOM 的 Diff 依然会卡，工程师会手动进行 DOM 节点的复用和回收（Virtual Scrolling）。

- 三方库集成：比如集成 D3.js 或 Echarts 进行复杂图表绘制时，通常直接操作真实 DOM。

</details>

# interface（接口）与 type（类型别名）的区别？
<details open>
<summary>TS</summary>

- 共同点：都可以用来描述对象或函数的形状，并且都支持继承（扩展）。

- 核心区别：

   - 适用范围：type 可以声明基本类型别名、联合类型（Union）、元组（Tuple），而 interface 只能声明对象/类/函数。

   - 声明合并 (Declaration Merging)：最重要的区别。同一个作用域内定义多个同名的 interface，它们会自动合并为一个；而重复定义同名的 type 会报错。

   - 扩展方式：interface 使用 extends 关键字；type 使用交叉类型 &。

在开发 React 组件时，通常优先使用 type 来定义 Props，因为它写联合类型更方便；但在开发会被外部引入的工具库，或者写 NestJS 的数据传输对象（DTO）时，会优先使用 interface，因为它支持声明合并，方便使用者进行扩展。
</details>

# any、unknown 与 never 的底层逻辑
<details open>
<summary>TS</summary>

- any (顶级类型 - 逃生舱)：放弃类型检查。任何类型都可以赋值给 any，any 也可以赋值给任何类型（除 never外）。极度不推荐。

- unknown (安全的顶级类型)：任何类型都可以赋值给 unknown，但你不能直接操作 unknown 类型的值，必须先进行“类型收窄（Type Narrowing）”（比如用 typeof 检查）后才能使用。

- never (底部类型)：表示永远不会发生的值的类型。没有任何类型可以赋值给 never。

   - 应用场景：抛出异常的函数、死循环函数的返回值；最精妙的用法是用于联合类型的详尽检查（Exhaustiveness Checking）（在 switch-case 的 default 分支中把值赋给 never 类型的变量，如果未来新增了枚举类型却忘了写 case，TS 会直接报错）。
</details>

# 类型守卫 (Type Guards) 与 is 关键字
<details open>
<summary>TS</summary>

当我们在处理联合类型或 unknown 时，如何安全地告诉 TS “现在这个变量到底是哪个具体类型”？

- 原生 JS 守卫：使用 typeof（判断基础类型）、instanceof（判断类实例）、in（判断属性是否存在于对象上）。

- 自定义类型守卫 (is 关键字)：
   如果把判断逻辑封装成一个函数，TS 会丢失类型推导。此时函数的返回值必须写成 parameterName is Type。

```ts
// 自定义类型守卫
function isString(val: unknown): val is string {
  return typeof val === 'string';
}

function process(val: unknown) {
  if (isString(val)) {
    console.log(val.toUpperCase()); // TS 知道这里 val 一定是 string，不会报错
  }
}
```
</details>

# Utility Types
<details open>
<summary>TS</summary>

- Partial<T>,将传入属性全变成可选 (?),表单局部更新时极度常用
- "Pick<T, K>",从类型 T 中挑选出属性 K,只要某几个字段
- "Omit<T, K>",从类型 T 中剔除属性 K,排除某些字段（React 封装原生 HTML 标签时常用，比如剔除原生的 onChange）
- "Record<K, T>",构建一个对象类型，键为 K，值为 T,"声明字典/哈希映射表（如 Record<string, User>）"
</details>

# 浏览器沙箱
<details open>
<summary>浏览器</summary>

概念：浏览器把网页的执行环境隔离在一个“受限的盒子”里。

作用：防止网页里的恶意 JS 代码读取你的本地硬盘文件、操作系统的其他进程、或者悄悄安装木马。即便是利用了 V8 引擎的漏洞，逃逸沙箱也是非常困难的。

</details>

# Cookie 会跟随跨域请求发送吗？
<details open>
<summary>浏览器</summary>

- 默认情况：不会。

- 如何发送：前端必须设置 withCredentials: true (XHR) 或 credentials: 'include' (Fetch)。同时，后端的响应头必须包含 Access-Control-Allow-Credentials: true，且 Access-Control-Allow-Origin 绝对不能是 *，必须明确指定具体的域名。

</details>

# 怎么向跨域接口发起 POST 请求？
<details open>
<summary>网络请求</summary>

如果是 application/json 类型的 POST 请求，浏览器会触发预检请求 (Preflight)：

1. 浏览器先静默发一个 OPTIONS 请求去问服务器：“我要发 POST，带 JSON，可以吗？”

2. 服务器响应允许的 Header（如 Access-Control-Allow-Methods: POST）。

3. 浏览器确认无误后，才会真正发出那个 POST 请求。

</details>

# Cookie 有哪些字段？
<details open>
<summary>浏览器,网络请求</summary>

核心字段：Name, Value, Domain (生效域名), Path (生效路径), Expires/Max-Age (过期时间), HttpOnly (防 XSS 偷取), Secure (只允许 HTTPS), SameSite (防 CSRF)。
</details>

# 如何子域共享？
<details open>
<summary>浏览器,网络请求</summary>

默认情况下，a.example.com 中的 Cookie，b.example.com 看不到。
- 如何子域共享：在写入 Cookie 时，明确指定顶级域名：Domain=.example.com（最前面的点在现代浏览器中可省略，直接写 Domain=example.com）。这样所有子域名（包括 m.example.com）在同路径下都能共享这份 Cookie。
</details>

# 强缓存如果想临时清除，该怎么做？
<details open>
<summary>缓存</summary>

强缓存（Cache-Control: max-age=xxx）命中时，浏览器根本不会发请求给服务器。所以服务器没法通知浏览器“文件更新了”。
- 标准做法（工程化）：文件哈希（Hash）。前端打包工具（如 Webpack/Vite）会在文件名里注入内容 Hash（例如 app.a1b2c3.js）。代码一旦修改，打包出来的新文件名变了。index.html（HTML 通常设为不缓存或协商缓存）引用的就是一个全新的 URL，浏览器自然会重新下载，完美绕过旧文件的强缓存。
- 临时做法：给请求资源的 URL 后面加个时间戳或版本号参数，例如 script.js?v=20260301，浏览器会认为这是一个新的资源。
</details>

# 一些网络状态码的内容
<details open>
<summary>网络请求</summary>

2xx (成功)：201 Created (POST 新建资源成功)，204 No Content (处理成功但没返回内容，OPTIONS 预检常返回这个)，200 成功

3xx (重定向)：301 Moved Permanently (永久重定向，浏览器会记住)，302 Found (临时重定向)，304 客户端请求的资源自上次访问以来未发生变化

4xx (客户端错误)：400 Bad Request (参数错误)，401 Unauthorized (没登录/Token失效)，403 Forbidden (登了但没权限)，405 Method Not Allowed (接口只接受 POST 你发了 GET)，404 not found

5xx (服务端错误)：500 Internal Server Error (后端代码抛异常了)，502 Bad Gateway (网关/Nginx 报错)，503 Service Unavailable (服务器过载或维护中)。
</details>

# 大文件上传会自动分片吗？
<details open>
<summary>网络请求</summary>

绝对不会。 HTTP 协议和浏览器原生的 fetch/XMLHttpRequest 不具备“自动把一个 5GB 文件切成小块分批发送”的能力。如果你直接传，大概率会因为请求超时或服务器限制（如 Nginx 的 client_max_body_size）而崩溃。
</details>

# 如何实现大文件上传自动分片？
<details open>
<summary>网络请求</summary>

- 利用 File 对象继承自 Blob 对象的特性，使用 File.prototype.slice(start, end) 方法，用 JS 循环把大文件切成比如每个 5MB 的小块（Chunk）。

- 将这些 Chunk 并发或顺序上传给服务器，并带上索引号（Index）和文件唯一标识（通常算一个文件的 MD5 值）。

- 所有切片上传完后，发一个合并请求，让后端把碎片拼接起来。
</details>

# 幽灵依赖问题与解决
<details open>
<summary>管理</summary>

- 问题：你没有在 package.json 中声明包 A，但因为包 B 依赖了 A，npm/yarn 1.x 会将 A 提升（Hoisting）到根目录 node_modules，导致你在代码里能直接 import A。一旦 B 升级不再依赖 A，你的代码就会直接报错。
- 解决：使用 pnpm。pnpm 通过虚拟存储（Content-addressable storage）和符号链接，严格限制只有声明过的依赖才能被访问。
</details>

# 桶文件问题与解决
<details open>
<summary>管理</summary>

- 问题：指 index.ts 这种批量 export * from './module' 的文件。它虽方便导出，但在大型项目中会导致：

   1. 开发环境变慢：即使只用一个组件，Vite 也必须解析桶文件里引用的所有模块。

   1. Tree-shaking 失败：某些复杂的循环引用会导致工具无法剔除无用代码。
- 解决：
  - 减少使用：尽量直接导入具体文件。

  - Lint 约束：使用 eslint-plugin-import 限制大导出。

  - Vite 优化：利用 optimizeDeps 预构建相关的包。
</details>

# 小程序有哪些线程
<details open>
<summary>小程序</summary>
小程序的运行环境由两个线程组成：

1. 逻辑层（App Service）
   (a) 运行环境：在 iOS 上是 JavaScriptCore，在 Android 上是 V8，在开发工具上是 NW.js（即 Chrome 内核）。
   (b) 主要职责：负责运行 JavaScript 代码，处理业务逻辑、接口请求和数据管理。
   (c) 关键点：这是一个纯净的 JS 环境，没有 DOM 和 BOM 接口，所以你不能在小程序里使用 window、document 或直接操作 DOM。

2. 视图层
   (a) 运行环境：运行在 WebView 控制器中。
   (b) 主要职责：负责页面的渲染，将 WXML 模板和 WXSS 样式转化为界面。
   (c) 关键点：一个小程序通常有多个视图层线程，每个页面对应一个 WebView，但只有一个逻辑层线程。

</details>

# 微信小程序为什么要搞两种线程？
<details open>
<summary>小程序</summary>

它之所以不将 JS 和渲染都放在一个进程里面，核心原因主要是关于安全管控的：

1. 安全管控
   如果允许 JS 直接操作 DOM，开发者可以轻易地在页面注入恶意脚本或跳转外部链接。通过双线程模型配合沙箱机制，让逻辑层无法直接触碰视图层的 DOM，从而保证了微信宿主环境的安全。

2. 性能考量
   在性能方面也有所考量。当逻辑层运行繁重的业务计算时，视图层的滚动等交互操作也不会被阻塞。
</details>

# 逻辑层和视图层之间是怎么通信的？
<details open>
<summary>小程序</summary>

在逻辑层调用 setData 时，数据会经过微信客户端的中转。

数据在传输前，必须经过 JSON.stringify 变成字符串传过去，然后再用 JSON.parse 还原。

为什么说 setData 不能传得太频繁，也不能传太大的数据？

频繁的序列化和跨线程通信会阻塞系统消息总线。
这会导致页面卡顿，也就是我们常说的 Bridge 延迟。
</details>

# WXS
<details open>
<summary>小程序</summary>

WXS 运行在视图层。虽然它也就是微信 Script，运行在视图层，但是由于视图层主要负责渲染，微信专门为它开辟了一个独立的脚本环境。

WXS 直接运行在视图层。当你需要做复杂的交互时：
1. 如果用 setData，数据在两个线程之间来回跑，会严重掉帧。
2. 当用 WXS 的时候，可以直接在视图层修改样式，实现零延时的原生级交互。
</details>

# 小程序有哪些进程
<details open>
<summary>小程序</summary>

微信小程序运行在微信的主进程中，采用了一套复杂的多进程模型，主要包含以下几种进程：

1. 微信主进程
   职责是控制微信整体的生命周期、登录状态以及网络请求中转。它是所有小程序的宿主，如果主进程崩溃，微信就会退出。

2. 小程序服务进程
   负责管理小程序的运行环境、包下载以及缓存管理。这个进程通常在后台常驻，用来快速拉起小程序。

3. 小程序业务进程
   每个或每组小程序通常运行在独立的进程中。

   为何这样设计：
   1. 防止崩溃：如果某个小程序因为代码逻辑导致崩溃，系统只会杀掉它所在的业务进程，而不会导致微信主程序闪退。
   2. 资源隔离：保证不同小程序之间的内存互不干扰。
   3. 方便内存管理：微信可以根据系统的内存压力，按需回收某个长时间不使用的小程序进程。
</details>

# WXSS 和 CSS 的区别
<details open>
<summary>小程序</summary>

WXSS 与 CSS 的区别主要体现在以下几个方面：

1. 尺寸单位：rpx
   微信小程序规定屏幕宽度恒为 750rpx。微信底层会自动根据不同的手机屏幕宽度进行等比换算。之所以选择 750 这个数字，是因为在早期的移动端设计稿中，通常以 iPhone 6 为原型，其物理像素宽度正好是 750。这样开发者可以直接按照设计稿标注的数值编写代码，无需在 CSS 中手动计算 rem 或 vw。

2. 样式引入：@import
   在样式引入方面，WXSS 使用 @import 方式。虽然原生 CSS 也支持 @import，但在 Web 开发中通常不建议频繁使用，因为会额外增加 HTTP 请求，影响页面加载速度。而微信对 @import 进行了底层优化：在小程序的编译阶段，编译器会把引入的 WXSS 直接合并到最终的样式文件内，因此在小程序中可以大胆地进行模块化样式编写。

3. 选择器支持程度
   WXSS 对选择器做了一些限制，不支持复杂的层级选择器。例如：
   (a) 不支持后代选择器
   (b) 不支持子元素选择器
   (c) 不支持属性选择器

4. 样式隔离与全局样式
   在传统的 CSS 开发中，容易出现全局样式污染的问题，通常需要使用 CSS Modules 或 BEM 命名法来解决。而小程序天生支持组件样式隔离，自定义组件内的 WXSS 只对该组件生效，避免了样式相互干扰。
</details>

# JS Bridge 是什么？
<details open>
<summary>JS</summary>

JS Bridge 是允许运行在 WebView 中的 JavaScript 与 Native 之间相互通信的机制。

在移动开发中，代码运行在两个完全隔离的世界：
1. WebView 世界：运行 HTML、JS、CSS，擅长 UI 交互和快速迭代，但无法直接调用摄像头、相册、蓝牙等手机底层硬件。
2. Native 体系：可以运行 Java、Kotlin、C++、Swift，拥有操作系统的最高权限，但更新代码需要重新发版审核。

JS Bridge 的作用就是打通这两者，让 Web 页面拥有原生 App 的能力。其通信逻辑主要分为两个方向：

方向一：JS 调用 Native（H5 到 Native）
这是最常见的场景，例如点击网页按钮唤起原生相机。实现方法有三种：
1. 拦截 URL Scheme：JS 发送一个特殊的网络请求（如 `jsbridge://camera?callback=ID1`），原生代码拦截该请求，解析参数后执行相应功能。
2. 注入 API：原生容器直接在 Web 的 window 对象上挂载一个对象。JS 就像调用普通函数一样调用它，例如 `window.nativeBridge.takePhoto()`。
3. 拦截 Prompt 或 Console：通过监听 JS 的 alert、prompt 或 console 弹窗信号来传递数据，这种方式目前比较少用。

方向二：Native 调用 JS
这个方向相对简单，原生容器可以直接在 WebView 页面执行 JS 字符串。
   (a) Android 可以使用 `webView.evaluateJavascript(code, callback)`。
   (b) iOS 也有类似的调用方式。

一个典型的调用流程（以扫一扫为例）：
1. H5 调用 `jsBridge.scanCode(callback)`。
2. Bridge 将请求打包，通过注入的 API 传给 Native。
3. Native 接收请求，唤起手机相机。
4. Native 扫描成功并拿到结果字符串。
5. Native 执行一段 JS 代码，将结果传回给 H5 的回调函数。
6. H5 拿到结果后显示在页面上。
</details>

# 什么是样式隔离？
<details open>
<summary>CSS</summary>

在默认情况下，CSS 是全局生效的。如果你在 A 组件写了 `.title { color: red; }`，而 B 组件也有一个 `.title`，那么 B 组件的文字也会变红。

样式隔离就是通过技术手段，保证 A 组件的样式只对 A 组件起作用：
1. 不会溢出到其他地方
2. 也不会被其他地方的样式轻易覆盖
</details>

# 样式隔离的作用？
<details open>
<summary>CSS</summary>

样式隔离的主要作用包括：

1. 防止样式污染
   (a) 避免不同开发者定义的同名类名相互覆盖（比如常用的 .container 或 .item）
   (b) 提高维护性：修改一个组件的样式时，不用担心会引发蝴蝶效应，导致其他页面 UI 错乱

2. 支持组件复用
   组件自带样式，拖到任何项目里都可以保持原样，不会被宿主环境的全局样式所搞砸
</details>

# React 中一般怎么做样式隔离？
<details open>
<summary>CSS</summary>

1. CSS Modules
   这是官方脚手架默认支持的，也是目前最平衡、最常用的方案。它可以将 CSS 类名重命名为一个哈希值（例如将 index.css 编译成 index_title__3a5f2.css 之类）。
   (a) 优点：依旧编写原生 CSS，学习成本极低，且能实现完全隔离。
   (b) 示例：import styles from './App.module.css'

2. CSS in JS
   直接在 JavaScript 里面写 CSS，通过 JS 动态生成唯一的类名。
   (a) 优点：样式与组件逻辑高度绑定，支持复杂的 JS 逻辑判断。

3. BEM 命名规范
   这是一种人为的命名规定，不依赖技术，而是依赖团队规范。
   (a) 写法：点 block__element--modifier，或者点 navbar__item--active。
   (b) 缺点：命名太长，且基本上全靠自觉。一旦有人不遵守就会失效，因此需要投入很多时间和精力进行 code review。

4. Shadow DOM
   这是一种原生隔离，也是 Web Components 的核心技术。其原理是创建一个完全封闭的 DOM 子树，外部 CSS 绝对无法进入（除非使用特定的变量）。
   (a) 现状：在 React 中使用较少，通常用于微前端架构或者开发独立的插件 UI。

5. Tailwind CSS
   这是一种原子化隔离方案，通过大量的工具类来构建 UI，不鼓励编写自定义类名。
   (a) 优点：因为基本不用自定义 class，从根本上减少了命名冲突的可能性。
</details>

# Vue3 相比 Vue2 有什么区别？
<details open>
<summary>CSS</summary>

1. 响应式系统的重写（性能质变）
这是 Vue3 最重要的底层变化。

- Vue2： 使用 Object.defineProperty。它通过拦截对象的属性来实现响应式。

   - 缺点： 无法检测到对象属性的添加或删除，也无法直接监听数组下标的变化（需要使用 $set）。

- Vue3： 使用 ES6 的 Proxy。

   - 优点： 可以完美监听对象的所有操作（包括动态添加属性、删除属性、数组变化）。它不再需要初始化时递归遍历所有属性，性能显著提升。

2. Composition API (组合式 API) vs Options API
这是开发者感触最深的变化：

- Vue2 (Options API)： 逻辑按照 data, methods, computed 分块。当组件变大时，同一个功能的逻辑会散落在不同的块里，维护时需要反复“上下秦王绕柱”。

- Vue3 (Composition API)： 使用 setup() 函数，允许你将相同功能的逻辑代码组合在一起。

   - 逻辑复用： 以前靠 Mixins（容易命名冲突、来源不明），现在靠 Hooks（类似 React，逻辑清晰且类型推导友好）。

3. 更好的 TypeScript 支持
- Vue2： 源码是用 Flow 写的，对 TS 的支持像是“外挂”，需要复杂的装饰器才能有较好的开发体验。

- Vue3： 源码完全用 TypeScript 重写。无论你是否使用 TS，开发时的代码提示和类型检查都变得极其顺滑。

4. 虚拟 DOM 的优化 (编译时优化)
Vue3 在编译阶段变得更“聪明”了：

- 静态提升 (Static Hoisting)： 页面中永远不会变的 HTML 节点会被提取到渲染函数之外，下次更新直接复用，不再重复创建。

- 补丁标记 (Patch Flags)： 在编译时标注哪些是动态内容（比如只有 class 会变）。在 Diff 算法比对时，Vue3 会直接跳过静态节点，只比对带标记的动态部分。

- 碎片 (Fragments)： Vue3 终于支持组件有多个根节点了，不再强制套一层 <div>。

5. 新内置组件与体积减小
- Teleport (瞬移)： 可以把组件（如 Modal 弹窗）挂载到 DOM 树之外的任何地方（比如 body 下），解决样式层级堆叠问题。

- Suspense： 处理异步组件加载时的等待状态。

- Tree-shaking (摇树优化)： Vue3 采用了按需引入的模式。如果你没用到 watch 或 computed，打包时这些代码就不会包含在最终文件中，体积更小。
</details>

# 什么是 Monorepo？它解决了 Multirepo 的哪些痛点？
<details open>
<summary>工程化</summary>

Monorepo 是一种项目管理策略，将多个项目（Packages）存放在一个 Git 仓库中。

- 解决的痛点：

   - 代码复用难： 在 Multirepo 中，公共组件需要发 npm 包才能给其他项目用，链路长且繁琐。Monorepo 支持本地引用。

   - 版本一致性： 多个项目共享同一套规范（如 ESLint、Prettier）和基础设施。

   - 原子提交： 一个需求涉及多个包的改动时，可以在一个 Commit 中完成，避免版本脱节。
</details>

# pnpm 是如何处理 Monorepo 依赖的？为什么它比 npm/yarn 更好？
<details open>
<summary>工程化</summary>

- 硬链接与 CAS： pnpm 将所有依赖存储在全局目录，通过硬链接（Hard Links）映射到项目的 node_modules，节省空间且安装飞快。

- 非扁平化结构： pnpm 使用符号链接（Symlinks）构建嵌套的依赖树，解决了 “幽灵依赖”（Ghost Dependencies）问题，即项目无法访问未在 package.json 中声明的间接依赖。
</details>

# 如何提升 Monorepo 的构建速度？
<details open>
<summary>工程化</summary>

“只做有必要的计算”
ZenUI 只有代码变动的包才重新编译。

1. 任务缓存
   使用 Nx（或 Turborepo）将构建结果缓存。下次执行时，如果哈希值没变，直接从缓存读取。
2. 并行执行
   自动分析包之间的拓扑依赖关系，互不依赖的任务并行运行。
3. 远程缓存
   团队成员共享云端构建缓存，一人编译，全员加速。
</details>

# Monorepo 的缺点
<details open>
<summary>工程化</summary>

- Git 体积爆炸： 长期运行后，仓库可能变得巨大。

- 权限控制难： 无法在 Git 层限制开发者只能修改某个包。

- 配置复杂： 统一的 CI/CD、代码规范配置（如共享 ESLint 插件）需要较高的工程化水平。

- IDE 性能： 几百个项目在同一个 Workspace，VS Code 的 TS 服务器可能会崩溃。
</details>

# 在 Monorepo 中如果多个项目依赖了同一个库的不同版本会怎么处理？
<details open>
<summary>工程化</summary>

pnpm（推荐方案）
- 处理逻辑： 如果项目 A 依赖 lodash@4.17.20，项目 B 依赖 lodash@4.17.21，pnpm 会将这两个版本都下载到全局 Store 中。

- 结构： 在各自项目的 node_modules 中，pnpm 会通过符号链接（Symlinks）指向对应的版本。

- 优势： 互不干扰，完全隔离，且不会像 npm 那样产生大量的重复文件占满硬盘。

Yarn/npm (传统方案)
- 处理逻辑： 它们会尝试“提升”（Hoisting）。

- 冲突时： 只能有一个版本被提升到根目录的 node_modules。另一个版本会被放入子项目的 node_modules 中。

- 风险： 容易引发“依赖地狱”，有时会导致某些构建工具（如 Webpack）引用到错误的版本。
</details>

# 在工程管理层面怎么去解决 Monorepo 项目中 的版本割裂问题
<details open>
<summary>工程化</summary>

- 策略 A：强行一致性
很多大厂倾向于全仓库只有一个版本。做法是利用如同 SyncPack 之类的工具，强制检查所有的 package.json。如果发现同名包版本不一，CI 流程会直接报错。
这种做法的优点是可以减少构建产物体积，并避免多个版本的 React 或者 Vue 同时存在导致的应用崩溃。

- 策略 B：目录级别的 overrides 或 resolutions
如果必须从某个深层依赖解决安全漏洞，或者需要强行统一某个库的版本，可以在根目录的 package.json 中进行配置：
1. pnpm：使用 pnpm.overrides
2. Yarn：使用 resolutions

通过这些配置，可以强制整个 Workspace 中所有的该插件都指向你指定的唯一版本。

- 策略 C：在 peerDependencies 中严格约束
在开发内部 UI 组件库时，通常将 React 或 Vue 设为 peerDependencies。
其目的就是强制消费该组件库的项目必须提供指定版本的资源文件，从而在源头上规避多版本并存的问题。
</details>

# Monorepo 中多版本共存会出现什么问题？
<details open>
<summary>工程化</summary>

1. 单例模式失效： 某些库（如 React, Vue, Styled-components）依赖单例。如果项目里同时加载了两个版本的 React，会报 Invalid hook call 错误。（还会有上下状态同步失败和样式覆盖混乱的问题）
2. 构建冗余： 打包工具（Webpack/Rollup）可能会把两个版本的库都打进 Bundle，导致首屏加载变慢。
3. 类型冲突： TypeScript 可能会因为识别到两个版本的 @types 而产生类型兼容性报错。
</details>

# Monorepo 中如何管理和下载依赖
<details open>
<summary>工程化</summary>

在 Monorepo 项目中，我们通过以下机制管理和下载依赖：

1. 物理存储策略
   我们首选 pnpm，它使用内容寻址存储（Content-addressable store）策略：
   (a) 将依赖统一存储在全局 Store 上。
   (b) 在项目中使用硬链接（Hard Link）引用，极大节省了磁盘空间并加快了安装速度。
   (c) 在依赖组织上使用软链接（Symbolic Link），解决项目间的相互引用和幽灵依赖（Phantom dependency）问题。

2. 版本管理
   对于版本控制，我们通常采取以下手段：
   (a) 使用 pnpm.overrides 来强制统一关键依赖的版本。
   (b) 使用 workspace 协议（workspace:），确保内部引用始终指向最新的本地开发版本，而不是 NPM 上的旧包。

3. 依赖分层安装
   (a) 公共工具：对于所有项目都会用到的工具，通常安装在根目录的 devDependencies 里面。
   (b) 私有依赖：对于子项目特有的业务逻辑依赖，则安装在各自的目录中。
</details>

# react router 的实现原理
<details open>
<summary>react router</summary>

React Router 的实现原理可以概括为以下三个核心步骤：

1. 监听（Listening）
   通过 History 库监听浏览器地址的变化。在监听过程中，系统会捕获 popstate 或 hashchange 等事件，实时监控 URL 的变动。

2. 匹配（Matching）
   React Router 内部维护了一套匹配算法。它会根据当前的 location 对象，在路由表中按顺序寻找路径最匹配的 element。

3. 渲染（Rendering）
   利用 React 的 Context API 将路由状态向下传递。当状态发生改变时，会触发 Provider 的更新，从而重新渲染对应的组件。
</details>

# HashRouter 和 BrowserRouter 有什么区别？
<details open>
<summary>react router</summary>

| 特性 | HashRouter | BrowserRouter |
| --- | --- | --- |
| URL 格式 | 带有 #（如 /#/user） | 正常路径（如 /user） |
| 底层原理 | 监听 hashchange 事件 | 使用 HTML5 history.pushState API |
| 后端支持 | 不需要。# 后面的内容不会发给服务器。 | 需要。必须配置 Nginx 将所有请求指向 index.html，否则刷新会 404。 |
| SEO | 较差 | 友好 |
</details>

# React Router v6 相比 v5 有哪些重大改进？
<details open>
<summary>react router</summary>

1. 组件更名：Switch 变为 Routes，路径匹配取消了 exact 属性
2. V6 采用更智能的匹配算法，自动选择更精准的匹配
3. 配置式路由：引入了 useRoutes hook，支持以 JS 对象的形式定义路由表，类似 Vue Router
4. 嵌套路由：引入了 Outlet 组件作为子路由占位符，简化了布局嵌套
5. 体积：移除了对 history 的直接依赖，体积缩小了约 50%
</details>

# 什么是 `<Outlet />`？它解决了什么问题？
<details open>
<summary>react router</summary>

`<Outlet />` 是 React Router v6 引入的组件，主要用于在父路由组件中声明子路由的渲染位置。

以前需要在父组件内部手动编写匹配逻辑，导致代码分散。现在通过路由配置配合 `<Outlet />`，可以将布局与内容分离，使结构更清晰。
</details>

# 路由传参有哪几种方式？
<details open>
<summary>react router</summary>

主要有三种方式：

1. params 传参
   使用 useParams 获取，适用于标识特定资源。

2. search 或 query 传参
   类似于 `?id=1&name=jack`，通过 useSearchParams 获取，适用于筛选和搜索。

3. state 传参
   通过 navigate 的第二个参数传递数据。数据不仅是在 URL 中，还可以通过 useLocation 获取，适用于传递复杂对象或不希望用户看到的临时状态。
</details>

# 如何实现路由懒加载？
<details open>
<summary>react router</summary>

结合 React 的 lazy 和 Suspense 使用：
```js
const Home = React.lazy(() => import('./pages/Home'));

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <React.Suspense fallback={<div>Loading...</div>}>
          <Home />
        </React.Suspense>
      } />
    </Routes>
  );
}
```
</details>

# 什么是动态路由？如何实现权限控制（路由守卫）？
<details open>
<summary>react router</summary>

React Router 没有像 Vue 那样的原生全局前置守卫（beforeEach），通常通过 高阶组件（HOC） 或 包装组件 实现。

- 实现思路： 创建一个 ProtectedRoute 组件，内部判断登录状态。已登录则渲染 children 或 `<Outlet />`，未登录则渲染 `<Navigate to="/login" />`。
</details>

# 从 HTTP/1.1 到 HTTP/2 到 HTTP/3 解决了哪些问题？
<details open>
<summary>计算机网络</summary>

HTTP/1.1 引入了持久连接但受困于队头阻塞；HTTP/2 通过二进制分帧实现了多路复用，极大提升了并发性能；而 HTTP/3 为了解决 TCP 固有的丢包阻塞，改用基于 UDP 的 QUIC 协议，实现了真正的零阻塞和连接迁移。
</details>

# Error Boundary它能捕获所有的错误吗？
<details open>
<summary>React</summary>

- 不能。 Error Boundary 只能捕获其子组件树在渲染期间、生命周期方法和构造函数中发生的错误（比如刚才那个 render 里的 null.map）。

- 不能捕获的场景： 异步代码（setTimeout 或 Promise 里的错误）、事件处理器（onClick 里的报错）、服务端渲染（SSR）、它自身的错误。

- 补充说明： 对于事件或异步请求的报错，我们通常在 try...catch 或者 axios 的全局响应拦截器里去处理，结合 Message 组件提示用户。
</details>

# 为什么 React 16 发现一个错误要把整个页面卸载掉（白屏），而不是保留旧的 UI？
<details open>
<summary>React</summary>

这是 React 官方的 **‘宁缺毋滥’** 设计哲学。React 认为，显示损坏的、错误的 UI，比完全不显示任何东西（白屏）更糟糕。比如在支付页面，如果错误的数据导致把‘给别人转账’显示成了‘别人给你转账’，后果是不堪设想的。所以 React 选择卸载整个树，强迫开发者去捕获并正确处理这些错误（也就是使用 Error Boundary）。
</details>

# React 与 Vue 的核心心智模型（视图层）差异是什么？
<details open>
<summary>React, Vue</summary>

- React（在 JS 里写 HTML）： 拥抱纯 JS (JSX)。{} 是一扇“任意门”，用来告诉解析器“我要在 HTML 里写 JS 变量/表达式了”。灵活，但静态分析难。

- Vue（在 HTML 里挂载 JS）： 拥抱增强版 HTML (Template)。v- (如 v-for) 或 : (如 :key) 本身就是“任意门”。只要写了指令，引号 "" 内部就默认是 JS 环境，不需要再嵌套 {}。
</details>

# React 和 Vue 的响应式原理（视图更新机制）有什么本质区别？
<details open>
<summary>React, Vue</summary>

- React（拉 Pull / 顶层重渲染）： 基于不可变数据。状态改变时，React 不知道具体变了哪，会重新执行组件函数生成新的 Virtual DOM，全量 Diff。开发者需手动用 useMemo/useCallback 优化。

- Vue（推 Push / 靶向更新）： 基于可变数据和依赖收集。通过 Proxy 数据劫持，Vue 能精确知道哪个数据变了、哪个组件依赖了它。更新是组件级别的，结合编译期优化，不需要手动缓存函数
</details>

# Vue 2 和 Vue 3 的响应式（双向绑定）原理有何不同？为什么换成 Proxy？
<details open>
<summary>Vue</summary>

- Vue 2 (Object.defineProperty)： 递归遍历对象属性重写 getter/setter。缺点： 无法监听对象属性的新增/删除；无法完美拦截数组索引修改；初始化深度遍历大型对象时性能差。

- Vue 3 (Proxy)： 代理整个对象。在 getter 中收集依赖（track），在 setter 中触发更新（trigger）。优点： 完美监听属性新增/删除；原生支持数组方法拦截；“懒代理”机制（只有读取到深层属性时才去代理），初始化性能极佳。
</details>

# Vue 的 computed 和 watch 有什么区别？对应 React 的什么概念？
<details open>
<summary>Vue</summary>

- computed（计算属性）： 有缓存！只有依赖的数据发生变化时才会重新计算，多次访问直接返回缓存。必须有返回值。对标 React 的 useMemo（但 Vue 不需要手动写依赖数组）。

- watch（侦听器）： 无缓存！专门用来观察特定数据的变化，执行副作用（如发 Ajax 请求、操作 DOM）。对标 React 的 useEffect 监听特定变量（同样，Vue 不需要手动维护依赖数组，或使用 watchEffect 自动追踪）。
</details>

# Vue 的 computed 和 watch 有什么区别？对应 React 的什么概念？
<details open>
<summary>Vue</summary>

- 静态提升 (Static Hoisting)： 模板中没有绑定变量的纯静态 HTML 节点，会在编译时被提取到渲染函数外部。每次重新渲染直接复用，避免像 React 那样每次都 createElement。

- PatchFlag (补丁标记)： 给动态节点打上数字标记（比如标记它“只有文本是动态的”或“只有 class 是动态的”）。Diff 算法遇到标记时，直接跳过全量对比，只比对发生变化的部分，实现“靶向更新”。
</details>

# Vue 组件通信中，Props 和 Emits 与 React 有何不同？
<details open>
<summary>Vue</summary>

- React： 父传子数据、子传父回调函数，全部塞在同一个 props 对象里传递。

- Vue： 严格区分“数据”与“事件”。

   - defineProps：专门接收父组件传来的数据。

   - defineEmits：专门声明子组件会向外抛出哪些自定义事件（父组件通过 @事件名 监听）。
</details>

# Vue 中的 v-if 和 v-show 有什么区别？
<details open>
<summary>Vue</summary>

- v-if： 真正的条件渲染。条件为假时，DOM 节点被完全销毁/不渲染。切换开销大。对应 React 中的 condition && `<div />`。

- v-show： DOM 始终渲染并保留在树中，仅仅通过 CSS 的 display: none 来切换显隐。初始开销大，但切换开销小。

- 总结： 频繁切换显隐用 v-show，不频繁切换用 v-if。
</details>

# 为什么 Vue 不需要 React 的 useCallback？
<details open>
<summary>Vue</summary>

- React： 组件状态更新时，整个组件函数会重新执行，导致内部的普通函数被重新创建（引用地址改变）。如果把这些函数传给子组件，会导致子组件无意义的重新渲染，因此需要 useCallback 缓存函数引用。

- Vue： `<script setup>` 里的代码只在组件创建时执行 一次。函数一旦声明，引用永远不变。视图更新是由底层 Proxy 触发特定的 render 函数，不会重新执行整个 setup 逻辑，因此根本不需要缓存函数。
</details>

# Vue 组件生命周期有哪些？(对比 React)
<details open>
<summary>Vue,React</summary>

- setup (相当于 React 的 constructor + componentWillMount)

- onMounted (相当于 useEffect(fn, []))

- onUpdated (组件更新后)

- onUnmounted (相当于 useEffect 中 return 的清理函数)
</details>

# HTML、CSS、JS的本质
<details open>
<summary>前端基础</summary>

- HTML (Structure)：语义化的骨架，定义内容的层级与含义。

- CSS (Presentation)：表现层，负责视觉编码、布局与美化。

- JS (Behavior)：逻辑层，处理交互、数据流与动态更新。
</details>

# 证书如何防篡改、防调包？
<details open>
<summary>计算机网络</summary>

- 防篡改：CA 机构将证书信息（域名、公钥等）进行 Hash，再用 CA 的私钥加密生成签名。浏览器用内置的 CA 公钥解密签名并对比 Hash 值，若不一致则说明被篡改。

- 防调包：证书内绑定了特定的域名。如果黑客换成自己的合法证书，浏览器会发现证书域名与当前访问域名不匹配，报错。
</details>


# 什么是MVC
<details open>
<summary>架构</summary>
MVC 是老牌的经典架构，最早在后端（如 Java Spring, ASP.NET）大放异彩，后来也被早期前端框架（如 Backbone.js）采纳。

- Model（模型）： 负责处理数据（如从 API 获取的数据）和业务逻辑。

- View（视图）： 负责界面的展示，也就是用户能看到的 HTML/CSS。

- Controller（控制器）： 它是中间人。当用户点击按钮时，Controller 收到指令，告诉 Model 更新数据，再通知 View 更新界面。

它的痛点：
在前端开发中，MVC 往往会导致 View 和 Model 之间的耦合度还是太高，而且 Controller 会变得非常臃肿（所谓的 Fat Controller），维护起来挺头疼的。
</details>

# 什么是MVVM
<details open>
<summary>架构</summary>
MVVM 是随着 Vue 和 Angular 等现代框架兴起的，它是对 MVC 的一种演进，也是目前前端的主流方案。

- Model（模型）： 依然是纯粹的数据。

- View（视图）： 依然是界面。

- ViewModel（视图模型）： 这是 MVVM 的灵魂。它通过 数据双向绑定（Data Binding） 把 View 和 Model 连接起来。

核心优势：
你不需要手动去操作 DOM（比如 document.getElementById）。你只要修改了 Model 里的数据，ViewModel 会自动让 View 更新；反之，用户在输入框打字，Model 里的数据也会自动变。这种“自动化”让开发者可以只关注业务逻辑，而不必痛苦地搬运 DOM 节点。
</details>

# Babel 的工作原理（三个阶段）
<details open>
<summary>工程化</summary>
Babel 是一个 JavaScript 编译器（准确说是 Source-to-Source 编译器）。它的执行过程分为三步：

1. 解析 (Parse)： 将代码字符串转换成 AST (抽象语法树)。这个过程又分为词法分析和语法分析。

2. 转换 (Transform)： 核心步骤。Babel 会遍历 AST，通过各种 插件 (Plugins) 对 AST 进行增删改查（比如把箭头函数的 AST 节点换成普通函数的节点）。

3. 生成 (Generate)： 将修改后的 AST 再转换回普通的代码字符串，并生成 SourceMap。
</details>

# Babel 的 Plugin (插件) 和 Preset (预设) 有什么区别？
<details open>
<summary>工程化</summary>
- Plugin (插件)： Babel 的功能执行者。一个插件通常只负责转换一种语法。例如 @babel/plugin-transform-arrow-functions 专门转箭头函数。

- Preset (预设)： 插件的大礼包。为了避免开发者一个个配置几十个插件，Babel 把常用的插件打包在一起。

   - preset-env：最常用的，根据你设置的目标浏览器自动决定加载哪些插件。

   - preset-react：包含转换 JSX 等 React 特有语法的插件。

执行顺序（常考）： 插件先执行，预设后执行；插件按顺序执行，预设按逆序执行。
</details>

# Vite 为什么比 Webpack 快？
<details open>
<summary>工程化</summary>

1. 开发环境：从“全量打包”到“按需编译”
Webpack： 必须先抓取整个应用的依赖图，进行 Bundle（打包），只有打包完成了，本地服务器才能启动。即使你只改了一个文件，它也得重新处理相关依赖。

Vite： 利用 原生 ESM (ES Modules)。启动时不需要打包！浏览器请求哪个文件，Vite 才现场编译哪个文件并返回。这叫 “按需加载”。

2. 预构建 (Pre-bundling)：处理 node_modules
面试追问： “如果 Vite 不打包，那 node_modules 里成千上万个小文件（比如 lodash-es）会导致浏览器发几千个 HTTP 请求，页面不就卡死了吗？”

回答技巧： Vite 在启动前会进行 预构建。它使用 esbuild（Go 语言编写）将这些 CommonJS 或大量的 ESM 依赖预先打包成一个或几个大的 ESM 文件。这样浏览器只需要发一个请求。

esbuild 的威力： 它不需要像 Babel 那样经过复杂的 AST 转换，直接操作机器码，速度快 10-100 倍。

3. 更新速度：HMR (热更新) 的差异
Webpack： 随着项目规模变大，HMR 的速度会线性下降（因为需要重新构建模块及其依赖链）。

Vite： HMR 速度永远是 常数级。无论项目多大，Vite 只需要让浏览器重新请求那个改变的模块即可，利用了浏览器的缓存（HTTP 强缓存 Cache-Control: max-age 和协商缓存），速度快到飞起。

4. 生产环境：为什么还要打包？
冷知识补充： 尽管开发环境不打包，但 Vite 生产环境依然使用 Rollup 进行打包。

原因： 因为在生产环境，原生 ESM 会带来过多的网络往返（RTT），为了获得最佳的加载性能，目前进行 Tree-shaking、懒加载和代码分割（Code Splitting）仍然是必要的。

</details>

# 什么是 mcp
<details open>
<summary>AI</summary>

MCP (Model Context Protocol)，即 模型上下文协议。

- 定义：由 Anthropic 发布的开放标准。它类似于 USB 接口，旨在让 AI 模型（如 Claude, GPT-4）能够以统一的方式连接到各种外部数据源和工具（如 Google Drive、Slack、本地 GitHub 仓库等）。

- 解决的痛点：以前每个 AI 助手要连接外部工具，开发者都得针对特定平台写一套代码。有了 MCP，开发者只需要写一次“连接器”，任何支持 MCP 的 AI 客户端都能直接使用。

- 三层架构：

   1. MCP 客户端 (Client)：如 Claude Desktop、IDE，负责发起请求。

   2. MCP 服务器 (Server)：暴露特定工具或数据的中间件。

   3. 本地/远程资源：实际存储数据的地方（数据库、文件系统）。
</details>

# Jotai 状态管理：对比与更新原理

<details open>
<summary>状态管理, Jotai</summary>

#### 与其他库的对比
* **对比 Redux / Zustand (中心化 / Top-down)**：传统库倾向于建一个庞大的全局 Store。而 Jotai 是**原子化 (Atomic / Bottom-up)** 的，状态被拆分为一个个极其细粒度的“原子（Atom）”。
* **对比 Recoil (同为原子化)**：Jotai 更轻量，不需要给每个状态起一个全局唯一的 `key` 字符串（Jotai 内部通过对象引用来识别），API 更像 React 原生的 `useState`。

#### 与 Context 相比
* **性能瓶颈**：React Context 的致命弱点是**渲染穿透**。只要 Context Provider 里的值变了，所有消费这个 Context 的子组件全都要重新渲染，哪怕它只用到了其中很小一部分数据。
* **Jotai 的破局**：Jotai 只会精准更新订阅了具体某个 Atom 的组件。它还能彻底解决多层嵌套的 “Provider Hell”（提供者地狱）问题。

#### Jotai 是怎样实现状态更新的？
1. **定义与存储**：你定义的 Atom 仅仅是个“配置项”，真正的值存在 Provider 的 Store（底层是一个 `WeakMap`）里。
2. **依赖追踪**：当 Atom A 依赖 Atom B 时，Jotai 在内部构建了一个有向无环图（DAG）。
3. **精准触发**：当你调用 `setAtom` 更新值时，Jotai 会遍历依赖图，计算出最新的值，并通过发布订阅模式（Pub/Sub），直接通知使用了该 Atom 的组件调用 `forceUpdate` 重新渲染。
</details>


# 组件内外是怎样实现状态共享的？

<details open>
<summary>状态管理, React</summary>

无论是 Jotai、Zustand 还是 Redux，核心原理都是**“脱离 React 生命周期的数据闭包” + “桥接器”**。

* **组件外（Vanilla JS）**：状态库的核心其实是一个原生的 JavaScript 对象/闭包（Store）。在 Jotai 中，你可以通过 `getDefaultStore()` 拿到这个对象。既然是原生 JS 对象，你当然可以在普通的 `.ts` 文件、Axios 拦截器或者路由守卫里直接调用 `store.get()` 和 `store.set()`。
* **组件内（React 环境）**：状态库会提供自定义 Hook（如 `useAtom`）。这个 Hook 的作用就是一个**桥接器（Bridge）**。它在组件挂载时，把组件的强制更新函数（比如 `const [, forceUpdate] = useState({})`）注册到外部 Store 的监听器列表里。外部数据一变，触发 `forceUpdate`，组件就能拿到新状态。现代 React 通常使用 `useSyncExternalStore` 这个官方 API 来完成这件事。
</details>

# 怎样使用 SSE 搭建监控看板？

<details open>
<summary>网络, SSE, WebSocket</summary>

#### 使用 SSE 搭建看板
**SSE (Server-Sent Events)** 是一种基于 HTTP 的单向服务器推送技术。
1. **后端**：设置响应头 `Content-Type: text/event-stream`，然后不断地往响应流里 `write` 数据，不断开连接。
2. **前端（React）**：利用原生的 `EventSource` API 建立连接：
   ```javascript
   useEffect(() => {
     const source = new EventSource('/api/monitor');
     source.onmessage = (event) => setMetrics(JSON.parse(event.data));
     return () => source.close(); // 卸载时断开
   }, []);
   ```
</details>

# WS 和 SSE 的区别？为什么 WS 可以全双工？

<details open>
<summary>网络, WebSocket, SSE</summary>

| 对比项 | SSE (Server-Sent Events) | WebSocket (WS) |
| :--- | :--- | :--- |
| **底层协议** | HTTP (严格来说是一次长 HTTP 请求) | 独立的 WebSocket 协议 (`ws://`) |
| **通信方向** | **单向** (服务端 -> 客户端) | **全双工 / 双向** |
| **数据格式** | 只能发送文本 (Text) | 支持文本和二进制 (Binary) |
| **断线重连** | 浏览器原生支持，自动重连 | 需要开发者手动写心跳和重连机制 |

#### 为什么 WS 可以全双工？
WebSocket 起手式也是一个 HTTP 请求，但它带了 `Upgrade: websocket` 的请求头。一旦服务器同意升级，HTTP 协议就完成了历史使命被“抛弃”。
接下来，**TCP 连接的控制权直接交给了 WebSocket 协议**。因为底层的 TCP 本身就是支持双向传输的，WS 把数据打包成轻量的“帧（Frame）”，客户端和服务器就可以在这个 TCP 隧道里同时、独立地收发数据帧，互不干扰，从而实现全双工。
</details>

# 衡量网站性能的指标？怎样收集？白屏时间过长怎么分析？

<details open>
<summary>性能监控, Web Vitals</summary>

#### 核心指标 (Web Vitals)
* **FP (First Paint)**: 首次绘制，白屏结束的点。
* **FCP (First Contentful Paint)**: 首次内容绘制，有实际的文本或图片出来了。
* **LCP (Largest Contentful Paint)**: 最大内容绘制，用户感觉“页面加载完了”的核心指标。
* **CLS (Cumulative Layout Shift)**: 累积布局偏移，衡量页面抖不抖（比如图片突然加载撑开页面）。

#### 怎样收集？
* **浏览器 API**：使用原生的 `PerformanceObserver` API 可以精准捕获上述指标。
* **现成方案**：Google 提供的 `web-vitals` 库。收集到数据后，通常使用 `navigator.sendBeacon()` 无阻塞地将数据上报给监控后台。

#### 白屏时间过长怎么分析？
在 Chrome DevTools 的 Performance 和 Network 面板中排查：
1. **网络层 (TTFB 长)**：DNS 解析慢？服务器响应慢？TCP/SSL 耗时过长？
2. **资源层 (下载长)**：主 JS Bundle 体积是不是太大了？没有做代码分割（Code Splitting）？或者网络没用 Gzip/Brotli 压缩？
3. **解析层 (阻塞渲染)**：是不是在 `<head>` 里放了巨大的同步 JS 脚本阻塞了 HTML 的解析？
4. **架构层**：纯 CSR（客户端渲染）应用，必须等 JS 下载完并执行完才会生成 DOM。如果瓶颈在此，考虑骨架屏预加载，或者上 SSR。
</details>

# 关于 SSR (服务端渲染)

<details open>
<summary>服务端渲染, SSR</summary>

* **概念**：Server-Side Rendering。把 React 等组件在 **Node.js 服务器上**运行，直接拼接好一段有内容的 HTML 字符串返回给浏览器。浏览器拿到 HTML 后立马就能展示（解决白屏），随后再执行 JS 绑定事件（这个过程叫 Hydration 注水）。
* **优点**：极快的首屏内容加载（极佳的 FCP/LCP），对 SEO（搜索引擎优化）极其友好（爬虫能直接抓取到内容）。
* **缺点**：非常消耗服务器 CPU 资源；开发心智负担加重（组件在服务端执行时没有 `window` 和 `document` 对象，容易报错）。现在的企业级方案通常直接用 Next.js 这种元框架。
</details>

# 关于 CDN (内容分发网络)

<details open>
<summary>网络, CDN</summary>

* **核心逻辑**：“空间换时间”。在全球各地部署边缘服务器。当用户请求静态资源（JS, CSS, 图片）时，DNS 会把请求路由到**物理距离离用户最近**的服务器节点，从而大幅降低网络延迟。
* **前端工程化配合**：前端打包时（Webpack/Vite），会将静态资源文件名带上内容 Hash（如 `app.3f8a.js`）。配合 CDN 设置超长的强缓存机制，只要文件内容没改，用户永远从 CDN 加载缓存；一旦修改，Hash 变化，强制触发重新获取资源。
</details>

# 项目开发用 JS 还是 TS？差异？

<details open>
<summary>TypeScript, JavaScript</summary>

在现代前端工程中，**企业级项目毫无疑问首选 TS (TypeScript)**。

* **核心差异**：JS 是动态弱类型，只有在代码**跑起来（Runtime）**报错了你才知道出 Bug 了；TS 是 JS 的超集，引入了**静态类型系统**，把大量错误暴露在**写代码时（Compile Time）**。
* **为什么用 TS**：
    1. **消灭低级错误**：比如拼错属性名、对 `undefined` 调用方法等，占了日常 Bug 的一大半。
    2. **代码即文档**：看 Interface 就能知道后端接口返回什么结构、组件需要传什么 Props，极其降低沟通成本。
    3. **IDE 极致体验**：VS Code 的类型推导和代码补全能让开发效率起飞，重构代码时也不用提心吊胆。
</details>

# React 主要解决了什么问题？

<details open>
<summary>React, 框架原理</summary>

这是一个宏观架构题，不要仅仅说“它很快”。React 的出现是前端从“手工作坊”走向“工业化”的标志：

1. **声明式 UI (Declarative)**：
   以前用 jQuery（命令式），我们要手动查 DOM、绑事件、改样式，状态和视图很容易脱节。React 提出了 `UI = f(state)`，你只需要维护数据（State），React 负责帮你把数据变化映射到屏幕上。
2. **组件化 (Componentization)**：
   把巨无霸页面拆解成独立、可复用、高内聚的组件（按钮、表单、头部），使得大型团队协作开发大型复杂页面成为可能。
3. **跨平台与虚拟 DOM (Virtual DOM)**：
   React 抽象出了一层虚拟 DOM。这不仅通过 Diff 算法优化了批量更新真实 DOM 的性能，更重要的是**它解耦了渲染层**。同一套 React 代码，可以通过 `react-dom` 渲染到网页，通过 `react-native` 渲染到 iOS/Android，极大拓宽了前端的边界。
</details>
