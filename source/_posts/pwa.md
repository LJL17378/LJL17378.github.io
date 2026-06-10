---
title: PWA 应用的简单教程
---
## 第一部分：PWA 是什么？

**PWA (Progressive Web App)** 中文译为“渐进式 Web 应用”。它不是一种新的编程语言，而是一组技术的集合。

简而言之，PWA 让你的**网页 (Website)** 拥有**原生 APP (Native App)** 的体验。

### 它的核心能力包括：

  * **可安装：** 可以添加到手机主屏幕或电脑桌面，像普通 App 一样有图标，没有浏览器地址栏。
  * **离线能力：** 在断网或网络差的环境下，依然可以打开并浏览（基于缓存）。
  * **推送通知：** 像 App 一样接收后台消息推送。
  * **安全：** 必须运行在 HTTPS 环境下（localhost 除外）。

-----

## 第二部分：PWA 的核心文件与作用

要把一个普通网页变成 PWA，你必须集齐“三剑客”（主要关注前两个）：

### 1\. `manifest.json` (身份证)

这是一个 JSON 配置文件。它告诉浏览器你的应用长什么样。

  * **作用：** 定义应用名称、图标 (Icon)、启动画面背景色、显示模式（全屏还是独立窗口）等。
  * **通俗理解：** 就像你给 App 填写的“入职表格”，决定了它安装在桌面上时的样子。

### 2\. Service Worker (`sw.js`) (大脑/代理)

这是一个运行在浏览器后台的独立脚本，与网页主线程分离。

  * **作用：** 拦截网络请求、管理缓存、处理离线逻辑、后台同步。
  * **通俗理解：** 它是一个**尽职的管家**。当你发起网络请求时，它会先拦截下来，看看手里（缓存）有没有；如果有，直接给你；如果没有，它再去服务器帮你拿。这就是离线也能访问的秘密。

### 3\. HTTPS (通行证)

Service Worker 权力过大（可以拦截请求），为了安全，PWA **必须**部署在 HTTPS 服务器上（本地开发 localhost 也可以）。

-----

## 第三部分：实战 —— 将普通静态页面配置为 PWA

假设你有一个最简单的静态网站结构：

```text
/my-pwa
  ├── index.html
  ├── style.css
  ├── logo.png
```

### 第一步：创建身份证 (`manifest.json`)

在根目录下新建 `manifest.json`：

```json
{
  "name": "我的第一个PWA",
  "short_name": "PWA Demo",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "logo.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```
我们可以注意到存在很多配置项，在这里先不讲解不同配置的作用
> **注意：** 在 `index.html` 的 `<head>` 中引入它：
> `<link rel="manifest" href="./manifest.json">`

### 第二步：编写管家逻辑 (`sw.js`)

在根目录下新建 `sw.js`。这是一个最基础的“缓存优先”策略：

```javascript
const CACHE_NAME = 'pwa-cache-v1';
// 需要缓存的文件列表
// 需保证这些文件确实存在
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './logo.png'
];

// 1. 安装事件：Service Worker 首次运行时触发
self.addEventListener('install', event => {
  // 等待缓存完成
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// 2. 拦截请求事件：每次页面发起请求时触发
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 如果缓存里有，直接返回缓存；否则去网络请求
        return response || fetch(event.request);
      })
  );
});
```

### 第三步：注册管家

在 `index.html` 的 `<script>` 标签（通常在 body 底部）中注册 Service Worker：

```html
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(registration => {
          console.log('SW 注册成功，范围:', registration.scope);
        })
        .catch(err => {
          console.log('SW 注册失败:', err);
        });
    });
  }
</script>
```

**完成！** 现在用 `http-server` 或 VSCode 的 `Live Server` 启动项目，打开浏览器的开发者工具 (Application 面板 -\> Service Workers)，你应该能看到 SW 已激活，且断网后页面仍能刷新。

-----

## 第四部分：进阶 —— Vite 项目零配置实现 (`vite-plugin-pwa`)

手动写 `sw.js` 很繁琐，且容易出错（比如缓存更新策略）。在现代前端开发中，我们使用插件自动生成。

假设你已经创建了一个 Vite 项目（Vue/React 均可）。

### 1\. 安装插件

```bash
npm install vite-plugin-pwa -D
```

### 2\. 配置 `vite.config.ts`

这个插件使用了 Google 的 **Workbox** 库来自动生成 Service Worker。

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // 或者是 react
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      // 注册模式：'autoUpdate' (自动更新) 或 'prompt' (提示用户更新)
      registerType: 'autoUpdate', 
      
      //不仅注入 manifest，还注入相关 meta 标签
      injectRegister: 'auto', 

      // 离线工作的核心配置 (这里使用默认生成的策略，无需深究也能跑)
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'] // 缓存相关静态资源
      },

      // manifest 配置 (复制之前的配置即可)
      manifest: {
        name: 'Vite PWA App',
        short_name: 'VitePWA',
        description: '由 Vite 驱动的 PWA',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png', // 确保 public 文件夹下有这个图
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
```

### 3\. 运行与构建

  * **开发环境：** 默认情况下，Service Worker 在开发环境（`npm run dev`）是不启用的，因为这会影响调试。
  * **生产预览：**
    1.  运行 `npm run build` 进行打包。
    2.  运行 `npm run preview` 预览打包结果。
    3.  此时打开浏览器控制台，你会发现 `vite-plugin-pwa` 已经自动帮你生成了 `sw.js` 并注册好了。

### 4\. 插件做的工作

Vite 插件帮你解决了最头疼的问题：**版本控制**。
当你更新代码并重新打包时，插件会自动修改 `sw.js` 中的版本号（Precache Manifest），浏览器检测到变化后，会自动更新缓存，确保用户不会一直看到旧页面。

-----

### 总结

1.  **PWA** = 网页 + 离线体验 + 类似 App 的入口。
2.  **Manifest** 负责“门面”（图标、名字）。
3.  **Service Worker** 负责“内政”（缓存、拦截）。
4.  **Vite 插件** 让我们只需关注配置，无需手写复杂的缓存逻辑。
