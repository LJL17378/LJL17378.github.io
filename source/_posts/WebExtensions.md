---
title: WebExtensions入门and实战
---
# WebExtensions
WebExtensions 是一种跨浏览器扩展开发标准，旨在让开发者能够“一次编写，多浏览器运行”。目前支持 WebExtensions 的主流浏览器如下：
- 火狐浏览器
- Chrome浏览器
- Edge浏览器（Chromium内核的）
对于喜欢~~偷懒~~效率的程序员来说这是最好不过的了。
## 开始
我们首先创建一个文件夹用来专门存放我们这个浏览器扩展中的全部文件，在进入到文件夹之后创建一个名为`manifest.json`的文件，它用来说明当前文件夹中的文件将如何被组织成为一个浏览器扩展，这是一个基础的`manifest.json`:
```json
{
  "manifest_version": 3,
  "name": "Test",
  "version": "1.0",

  "description": "This is a test.",

  "icons": {
    "48": "icons/border-48.png"
  },

  "content_scripts": [
    {
      "matches": ["*://*.mozilla.org/*"],
      "js": ["borderify.js"]
    }
  ]
}

```
说明：
- `manifest_version`:指定了manifest.json的版本
- `version`:扩展的版本
- `name`:扩展的名字
- `description`:扩展的描述（可选），可以将描述附加在扩展管理器中
- `icons`:这是可选的，但是建议使用，这是一个对象，描述了扩展不同尺寸的图标大小下对应的图标图片，在这个[网站](https://uutool.cn/icon-batch/)可以比较方便地导出不同尺寸的图片。对于不同的值的解释，例如`48`描述的就是`48*48`的图片，你还能添加`32`,`64`,`128`等为键的键值对，对于提供的图标的尺寸最好是`32*32`像素的，因为这是扩展管理器的默认图标的大小，当然你可以提供任意大小的图片，浏览器会为你自动使用最合适的图标。
## 提供的能力及其api
WebExtensions 是一套基于标准 Web 技术（HTML/CSS/JavaScript）的跨浏览器扩展开发框架，支持 Firefox、Chrome、Edge 等主流浏览器。其能力覆盖浏览器功能的多个层面，以下按核心功能领域分类说明对应的接口：

### 🔧 **一、浏览器界面定制**  
通过添加或修改浏览器 UI 元素增强交互体验：  
1. **工具栏按钮**  
   - **接口**：`browserAction`（常驻按钮） 或 `pageAction`（条件显示按钮）  
   - **能力**：定义图标、提示文本和点击触发的弹出窗口（Popup）。  
   - **示例配置**（manifest.json）：  
     ```json
     "browser_action": {
       "default_icon": "icon.png",
       "default_popup": "popup.html"
     }
     ```

2. **右键菜单**  
   - **接口**：`contextMenus`  
   - **能力**：向页面或选中文本的右键菜单添加自定义选项。  

3. **侧边栏与开发者工具面板**  
   - **接口**：`sidePanel`（侧边栏）、`devtools.panels`（开发者工具面板）  
   - **能力**：创建定制化面板，如调试工具或数据监控界面。  

---

### 📑 **二、标签页与窗口管理**  
操控浏览会话的核心单元：  
- **接口**：`tabs` 和 `windows`  
- **核心能力**：  
  - 创建/关闭/移动标签页：`tabs.create()`, `tabs.remove()`  
  - 查询标签页：`tabs.query({active: true})` 获取当前标签  
  - 修改标签页属性：`tabs.update()` 修改 URL 或是否静音  
  - 窗口管理：`windows.create()` 创建新窗口  
- **权限需求**：manifest.json 中声明 `"tabs"` 和 `"windows"` 权限。  

---

### 🧩 **三、网页内容操作**  
动态修改页面内容或样式：  
1. **内容脚本注入**  
   - **接口**：`contentScripts` 或 `scripting`  
   - **能力**：向匹配特定 URL 的页面注入 JS/CSS，操作 DOM 或监听事件。  
   - **配置示例**（manifest.json）：  
     ```json
     "content_scripts": [{
       "matches": ["*://*.example.com/*"],
       "js": ["content-script.js"],
       "css": ["styles.css"]
     }]
     ```

2. **消息通信**  
   - **接口**：`runtime.sendMessage()` 与 `runtime.onMessage`  
   - **能力**：实现内容脚本与后台脚本的双向数据传递。  

---

### 🌐 **四、网络请求控制**  
监控或修改网络流量：  
- **接口**：`webRequest` 和 `declarativeNetRequest`  
- **核心能力**：  
  - 拦截请求：`webRequest.onBeforeRequest` 监听请求发起  
  - 重定向或阻塞请求：`declarativeNetRequest.updateDynamicRules()` 动态修改规则  
- **权限需求**：`"webRequest"`、`"webRequestBlocking"` 或 `"declarativeNetRequest"`。  

---

### 💾 **五、数据存储与状态管理**  
持久化存储扩展数据：  
- **接口**：`storage`  
- **存储类型**：  
  - `storage.local`：本地存储（较大容量）  
  - `storage.sync`：跨设备同步（需用户登录）  
- **示例**：  
  ```javascript
  browser.storage.local.set({ key: "value" }).then(() => { /* 回调 */ });
  ```

---

### 🔔 **六、事件与通知**  
响应用户或系统事件：  
1. **事件监听**  
   - **接口**：`alarms`（定时任务）、`idle`（系统空闲状态）、`downloads`（下载事件）  
2. **用户通知**  
   - **接口**：`notifications`  
   - **能力**：调用操作系统原生通知系统提示用户。  

---

### ⚙️ **七、浏览器环境交互**  
访问浏览器底层功能：  
- **接口**：  
  - `cookies`：管理 Cookie  
  - `history`：访问浏览历史  
  - `privacy` 和 `browserSettings`：修改隐私设置（如跟踪防护）  
- **权限需求**：如 `"cookies"`、`"history"` 等需在 manifest.json 显式声明。  

---

### 🔗 **八、跨扩展与外部通信**  
实现扩展间或与本地应用协作：  
- **接口**：`runtime.connect()` 和 `runtime.sendNativeMessage()`  
- **应用场景**：  
  - 扩展间通信：传递数据或指令  
  - 与本地应用交互：如调用桌面程序。  

---

### 📊 **功能与接口对照表**
| **功能领域**       | **核心能力**                     | **对应接口**                     | **权限示例**               |
|--------------------|----------------------------------|----------------------------------|----------------------------|
| **界面定制**       | 工具栏按钮、右键菜单             | `browserAction`, `contextMenus`  | 无                         |
| **标签页管理**     | 创建/关闭/查询标签页             | `tabs`, `windows`                | `"tabs"`, `"windows"`      |
| **内容操作**       | 注入脚本、修改 DOM               | `contentScripts`, `scripting`    | `"activeTab"`              |
| **网络控制**       | 拦截/修改请求                    | `webRequest`, `declarativeNetRequest` | `"webRequestBlocking"`     |
| **数据存储**       | 本地/同步存储                    | `storage`                        | `"storage"`                |
| **事件通知**       | 定时任务、系统通知               | `alarms`, `notifications`        | `"alarms"`, `"notifications"` |
| **浏览器环境**     | 管理 Cookie、历史记录            | `cookies`, `history`             | `"cookies"`, `"history"`   |
| **跨进程通信**     | 扩展间或与本地应用通信           | `runtime`                        | `"nativeMessaging"`        |

---

### ⚠️ **跨浏览器兼容性注意事项**  
1. **命名空间差异**：  
   - Firefox：`browser.*`（基于 Promise）  
   - Chrome：`chrome.*`（多使用回调函数）  
   - 解决方案：使用 [webextension-polyfill](https://github.com/mozilla/webextension-polyfill) 统一写法。  
2. **API 支持度**：  
   - 部分 API（如 `userScripts`）仅特定浏览器支持，需检查 [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API)。  

---

### 💡 **快速入门建议**  
- **学习资源**：参考 [MDN 官方示例库](https://github.com/mdn/webextensions-examples)，包含标签页管理、网络拦截等完整案例。  
- **调试工具**：使用 `web-ext` 命令行工具实时加载和测试扩展。  

> 通过上述接口组合，可构建广告拦截器、翻译工具、密码管理器等复杂扩展。实际开发时需在 manifest.json 声明权限并处理异步通信（如 `Promise` 或回调函数）。

## 调试（web-ext）

## 网络请求

## 多平台

## 打包