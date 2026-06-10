---
title: jotai和tanstack query入门教程
slug: jotai-and-tanstackquery
publishedAt: '2025-05-24'
updatedAt: '2025-05-24'
summary: >-
  1. 为什么选择这些工具？ 让我们想一下，我们之前在管理状态的时候是怎么做的，我们经常使用 localstorage
  来进行存储，但是当我们需要状态在多个组件或者页面里面使用和修改的时候，如果我们对这个状态进行了更新，那么别的页面该如何及时更新呢？是利用生命周期钩子函数来进行更新还是如何？思考这些问
tags:
  - React
draft: false
sourceFile: jotai&&tanstackquery.md
---
## 1. 为什么选择这些工具？
让我们想一下，我们之前在管理状态的时候是怎么做的，我们经常使用`localstorage`来进行存储，但是当我们需要状态在多个组件或者页面里面使用和修改的时候，如果我们对这个状态进行了更新，那么别的页面该如何及时更新呢？是利用生命周期钩子函数来进行更新还是如何？思考这些问题无疑徒增了我们的心智负担。所以我们要学习如何通过`jotai`来管理用户的状态。
### 1.1 Jotai vs Redux vs localStorage
| 特性               | Jotai          | Redux         | localStorage  |
|--------------------|---------------|--------------|---------------|
| 学习曲线           | 简单           | 陡峭          | 简单          |
| 代码量             | 极少           | 多            | 少           |
| 响应式更新         | ✅             | ✅            | ❌            |
| 服务端渲染支持     | ✅             | ✅            | ❌            |
| 状态共享           | 自动           | 需要connect    | 手动          |
| TypeScript支持     | 一流           | 良好          | 无           |

**选择理由**：Jotai提供轻量级的原子化状态管理，完美契合React心智模型，无需繁琐的action/reducer配置。当改变的时候原子内的数据的时候，别的使用到这个原子的地方也会及时地响应式更新。

### 1.2 TanStack Query


**TanStack Query**（原名为 React Query）是一个专为现代前端应用设计的强大数据同步库，用于高效管理服务端状态（Server State）。它通过提供声明式、自动化的异步数据管理能力，显著简化了网络请求、缓存、数据更新和错误处理的复杂度。无论是简单的 CRUD 操作还是复杂的分页、无限滚动、实时数据同步场景，TanStack Query 都能提供开箱即用的解决方案。

以下是其核心优势：

1. **自动化缓存与智能更新**  
   - 自动缓存请求结果，根据策略（如`staleTime`、`cacheTime`）智能复用缓存数据，减少重复请求。
   - 后台自动重新验证数据（如窗口重新聚焦、网络重连时），确保数据始终新鲜。

2. **声明式 API，代码简洁**  
   - 通过`useQuery`和`useMutation`等直观的 Hook，将异步操作转换为同步式代码逻辑，告别冗长的`useEffect`和手动状态管理。

3. **内置错误处理与重试机制**  
   - 提供统一的错误处理方式，支持自定义重试策略（如指数退避重试），提升应用健壮性。

4. **数据同步与乐观更新**  
   - 支持乐观更新（Optimistic Updates），在请求未完成时预更新 UI，提升用户体验，失败后自动回滚。
   - 多标签页/设备间自动同步数据（通过`queryClient.invalidateQueries`）。

5. **与 UI 框架解耦**  
   - 核心逻辑不依赖 React，支持 Vue、Solid 等框架（通过`@tanstack/vue-query`等适配库）。

6. **开发者体验友好**  
   - 内置 Devtools 可视化调试工具，实时查看缓存状态、请求队列和依赖关系。

---

**选择理由：**  
传统方式中，开发者需要手动管理请求的`loading`、`error`和`data`状态，通过`useState`和`useEffect`组合处理缓存、竞态条件和数据更新。这种方式不仅代码冗余，还容易引入 Bug（如内存泄漏、陈旧数据）。  

**TanStack Query 的解决方式**：  
- **抽象复杂性**：将数据获取、缓存、同步的逻辑封装为通用模式，开发者只需关注「要什么数据」，而非「如何获取和管理」。  
- **性能优化**：减少不必要的请求，最大化利用缓存，同时保证数据一致性。  
- **统一数据源**：避免组件间状态分散，确保整个应用使用同一份最新数据。

## 2. 项目环境搭建

```bash
npx create-next-app@latest jt-demo
cd jt-demo
npm install jotai @tanstack/react-query @tanstack/react-query-devtools ua-parser-js
```

---

## 3. Jotai用户信息管理

### 3.1 创建原子
```typescript
// store/user.ts
import { atom } from 'jotai'

export const userAtom = atom<{
  ip: string | null
  location: string | null
  device: string | null
  os: string | null
}>({
  ip: null,
  location: null,
  device: null,
  os: null
})
```

### 3.2 对于原子的使用
```typescript
// hooks/useUserInfo.ts
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { userAtom } from '../store/user'

export const useUserInfo = () => {
  const [user, setUser] = useAtom(userAtom)

  useEffect(() => {
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(pos => {
        setUser(prev => ({
          ...prev,
          location: `${pos.coords.latitude}, ${pos.coords.longitude}`
        }))
      })
    }

    getLocation()
  }, [setUser])

  return user
}
```
当你只想修改原子内的数据或者读取原子内的数据的时候，你可以像下面这样做：
```typescript
const user = useAtomValue(userAtom)
const setUser = useSetAtom(userAtom)
```
我们还可以利用`Jotai`里的`jotai/utils`包中的`atomWithStorage`来持久化一个`atom`
belike:
```typescript
import { atomWithStorage } from 'jotai/utils'

const darkModeAtom = atomWithStorage('darkMode', false)
```
随后在组件或者页面当中可以像这样使用
```typescript
const Page = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom)
  const toggleDarkMode = () => setDarkMode(!darkMode)
  return (
    <>
      <h1>Welcome to {darkMode ? 'dark' : 'light'} mode!</h1>
      <button onClick={toggleDarkMode}>toggle theme</button>
    </>
  )
}
```
你可以打开本地存储去查看便能看到持久化存储之后的值了


## 4. 数据获取与缓存：TanStack Query核心应用
### 4.1 QueryClient配置
```typescript
// app/providers.tsx
'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5分钟
      gcTime: 15 * 60 * 1000 // 15分钟
    }
  }
})

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
```
### 4.2 简单应用
#### 1. 自动缓存管理
**概念**：自动将API响应存储于内存缓存，根据`staleTime`决定何时标记为陈旧数据
**配置示例**：
```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5分钟后标记为陈旧
    }
  }
})
```

#### 2. 后台数据刷新
**概念**：当窗口重新聚焦或网络重连时，自动在后台更新陈旧数据，保持UI数据新鲜

**体验方式**：
1. 打开React Query Devtools
2. 等待数据过期
3. 切换到其他浏览器标签
4. 返回当前页面
5. 观察网络请求的自动触发

#### 3. 请求去重
**概念**：自动合并同时发起的相同请求，避免重复查询

**场景演示**：
```typescript
// 在两个组件中同时调用

  const fetchHello = async () => {
  const res = await fetch('/api/hello')
  console.log('hello')
  if (!res.ok) throw new Error('数据获取失败')
  return res.json()
  }

  const {data:helloData} = useQuery({
    queryKey: ['hello'],
    queryFn: fetchHello,
    retry: 1,
    staleTime: 1000 * 60 * 3 // 3分钟缓存
  })

// 网络请求仅发生1次
```
#### 4. 使用自带的请求状态
| 状态名       | 说明                          | 典型使用场景                     | 代码示例                          |
|--------------|-------------------------------|----------------------------------|-----------------------------------|
| `isLoading`  | **首次加载**状态（无缓存数据）| 初始加载时的加载提示             | `{ isLoading && <Loader /> }`     |
| `isError`    | 查询失败状态                  | 显示错误信息                     | `{ isError && <ErrorMsg /> }`     |
| `isSuccess`  | 查询成功状态                  | 成功后的数据渲染                 | `{ isSuccess && <DataView /> }`   |
| `isFetching` | **任何获取**进行中            | 全局加载指示器                   | `{ isFetching && <Spinner /> }`   |

**示例代码：**
```tsx
const { data, isLoading, isError, isFetching } = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos
})

return (
  <div>
    {isLoading && <p>首次加载中...</p>}
    {isError && <p>加载失败</p>}
    {isFetching && <div className="global-spinner" />}
    
    {data?.map(todo => (
      <TodoItem key={todo.id} {...todo} />
    ))}
  </div>
)
```

#### 5. 分页/无限加载
**实现示例**：
```typescript
// 后端分页模拟
// app/api/messages/route.ts
import { NextResponse } from 'next/server'

// 模拟数据库数据
const mockMessages = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  content: `消息内容 ${i + 1}`,
  timestamp: new Date().toISOString()
}))

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = Number(searchParams.get('page')) || 1
  const pageSize = 10

  // 模拟延迟
  await new Promise(resolve => setTimeout(resolve, 500))
  
  const data = mockMessages.slice(
    (page - 1) * pageSize,
    page * pageSize
  )

  return NextResponse.json({
    data,
    currentPage: page,
    totalPages: Math.ceil(mockMessages.length / pageSize),
    hasNextPage: page < Math.ceil(mockMessages.length / pageSize)
  })
}
```

```typescript
//组件
// app/components/InfiniteMessages.tsx
'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import Loading from './Loading'
import ErrorAlert from './ErrorAlert'

const fetchMessages = async ({ pageParam = 1 }) => {
  const res = await fetch(`/api/messages?page=${pageParam}`)
  if (!res.ok) throw new Error('获取消息失败')
  return res.json()
}

export default function InfiniteMessages() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    status,
  } = useInfiniteQuery({
    queryKey: ['messages'],
    queryFn: fetchMessages,
    getNextPageParam: (lastPage) => 
      lastPage.hasNextPage ? lastPage.currentPage + 1 : undefined,
    initialPageParam: 1,
    staleTime: 5 * 60 * 1000
  })

  return (
    <div className="mt-8 space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">消息列表</h2>
      
      {status === 'pending' && <Loading />}
      
      {status === 'error' && (
        <ErrorAlert message={error?.message || '未知错误'} />
      )}

      {status === 'success' && (
        <>
          <div className="space-y-2">
            {data.pages.map((page, i) => (
              <div key={i} className="space-y-2">
                {page.data.map((message: any) => (
                  <div
                    key={message.id}
                    className="p-4 bg-white rounded-lg shadow-sm border"
                  >
                    <p className="text-gray-800">{message.content}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(message.timestamp).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2">
            {hasNextPage ? (
              <button
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg 
                         hover:bg-blue-600 disabled:opacity-50 
                         disabled:cursor-not-allowed transition-colors"
              >
                {isFetchingNextPage ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin inline-block w-4 h-4 border-2 
                                   border-current border-t-transparent rounded-full" />
                    加载中...
                  </span>
                ) : (
                  '加载更多消息'
                )}
              </button>
            ) : (
              <p className="text-gray-500 py-2">已经到底了</p>
            )}
          </div>
        </>
      )}
    </div>
  )
}
```


#### 6. 错误重试机制
**配置策略**：
```typescript
useQuery({
  queryKey: ['criticalData'],
  queryFn: fetchCriticalData,
  retry: 3, // 最多重试3次
  retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000)
})
```

#### 7. 使用`useMutation`钩子更新数据
```typescript
const addTodo = async (todo: string) => {
  const res = await fetch('/api/todo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: todo})
  })
  if (!res.ok) throw new Error('添加待办事项失败')
  return res.json()
}


const [todo, setTodo] = useState('')
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: addTodo,
    onSuccess: (data) => {
      console.log('添加待办事项成功:', data)
      queryClient.invalidateQueries({ queryKey: ['todoData'] }) // 此时将对应的查询非法化，这个时候就会自动重新查询
      setTodo('') // 成功提交后清空输入
    },
    onError: (error) => {
      console.error('添加待办事项失败:', error)
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo.trim()) {
      mutate(todo) // 这里调用mutate方法
    }
  }

```


### 4.3 增强型用户信息示例
```typescript
// 带错误处理和重试的增强版本
const { data, isLoading, error } = useQuery({
  queryKey: ['userData', user.ip], // 根据IP缓存不同用户数据
  queryFn: async () => {
    const res = await fetch(`/api/user-info?ip=${user.ip}`)
    if (!res.ok) throw new Error('获取失败')
    return res.json()
  },
  enabled: !!user.ip, // 有IP时自动触发
  retry: 2,
  onError: (err) => console.error('用户数据获取错误:', err)
})

// 显示缓存状态
<>
  {data && <UserCard {...data} />}
  {isLoading && <SkeletonLoader />}
  {error && <ErrorAlert message={error.message} />}
</>
```


### 4.4缓存生命周期示意图
```
[请求发起] → [新鲜状态] → [陈旧状态] → [垃圾回收]
           ↗ 立即返回    ↗ 后台更新
```

### 4.5最佳实践配置方案
```typescript
new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,  // 窗口聚焦刷新
      refetchOnReconnect: true,    // 网络重连刷新
      refetchOnMount: true,        // 组件挂载刷新
      retry: 3,                    // 失败重试次数
      retryDelay: 1000,            // 重试间隔
      suspense: false,             // 是否启用Suspense模式
      useErrorBoundary: true       // 使用错误边界
    }
  }
})
```

## 5. 前后端协作实现

### 5.1 Next.js API路由（后端）
```typescript
// pages/api/user-info.ts
import { NextApiRequest, NextApiResponse } from 'next'
import UAParser from 'ua-parser-js'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const parser = new UAParser(req.headers['user-agent'])
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
  
  res.status(200).json({
    ip,
    device: parser.getDevice().type || 'desktop',
    os: parser.getOS().name,
    browser: parser.getBrowser().name
  })
}
```

### 5.2 前端数据获取
```typescript
// components/UserDashboard.tsx
import { useQuery } from '@tanstack/react-query'
import { useUserInfo } from '../hooks/useUserInfo'

const fetchUserData = async () => {
  const res = await fetch('/api/user-info')
  return res.json()
}

export const UserDashboard = () => {
  const user = useUserInfo()
  const { data, isLoading } = useQuery({
    queryKey: ['userData'],
    queryFn: fetchUserData
  })

  return (
    <div>
      <h2>用户信息</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          <li>IP地址：{data?.ip}</li>
          <li>地理位置：{user.location}</li>
          <li>设备类型：{data?.device}</li>
          <li>操作系统：{data?.os}</li>
        </ul>
      )}
    </div>
  )
}
```



## 6. 总结与最佳实践

**技术组合优势**：
- Jotai处理客户端状态（UI状态、用户偏好）
- TanStack Query管理服务端状态（API数据）
- Next.js统一全栈开发体验


完整代码示例可访问：[GitHub仓库链接](https://github.com/LJL17378/jotai-rq-demo)
