---
title: 学线前端第三次例会正式学习文档
slug: di-san-ci-zheng-shi-li-hui
publishedAt: '2024-09-21'
updatedAt: '2024-09-21'
summary: >-
  项目结构（新的） components 用来装子组件的 assets 用来装css图片等资源 router 有一个 index.js
  用来装不同的url路径对应的处理函数以及所对应的挂载的组件 store 里面装的是一个用来存储不同网页的共同使用的资源的文件 views
  里面装的是组件的视窗部分，就
tags:
  - React
  - Vue
  - JavaScript
  - CSS
draft: false
sourceFile: 第三次正式例会.md
---
# 项目结构（新的）
## components
用来装子组件的
## assets
用来装css图片等资源
## router
有一个`index.js`用来装不同的url路径对应的处理函数以及所对应的挂载的组件
## store
里面装的是一个用来存储不同网页的共同使用的资源的文件
## views
里面装的是组件的视窗部分，就是给路由用的

## reactive和ref函数
|          | ref                                        | reactive           |
| -------- | ------------------------------------------ | ------------------ |
| 数据类型 | 原始数据、对象                             | 对象               |
| 操作     | `js`中需要添加`.value`，`tamplate`中则不用 | 都不用添加`.value` |
# watch监听
```javascript
watch(count, (newCount, oldCount) =>{
  console.log(`count change from ${oldCount} to ${newCount}`);
})
//count 的位置可以填对象，基本数据，计算属性等
```
## 立即执行
```javascript
watch(
  zzy,
  () => {
    console.log("zzy changed");
  },
  {
    immediate: true,
  }
);
```
## 深度监听
当你监听的是一个对象而且没有进行深度监听的时候，当对象的某个属性值改变的时候是不会触发监听事件的。这个时候就要加上一个`{deep:true,}`
```javascript
watch(
  zzy,
  (newZzy, prevZzy) => {
    console.log(`zzy changed from  ${prevZzy.age} to ${newZzy.age}`);
  },
  {
    deep: true,
  }
);
```
## 多重监听
主要是把单个名字改成一个数组形式，
```javascript
watch(
  [count, zzy],
  ([newCount, newZzy], [prevCount, prevZzy]) => {
    console.log(`多重监听count changed from  ${prevCount} to ${newCount}`);
    console.log(`多重监听zzy changed from  ${prevZzy.age} to ${newZzy.age}`);
  },
  {
    deep: true,
  }
);
```
## 监听单个属性
```javascript
watch(
  () => zzy.value.age,
  (newAge, prevAge) => {
    console.log(`zzy.age changed from  ${prevAge} to ${newAge}`);
  }
);
```
使用箭头函数作为watch的回调函数可以让我们再函数内部访问到变化前后的属性值
# templateRef
1. 需要在你想要调用的元素的标签名里面加上`ref = index（这是一个别名）`
2. 在`<script setup>`里面写上`const index = ref(null)`这里写上`null`并没关系。
3. 调用templateRef
```javascript
<div ref="index">
      <h1>templateRef模板引用</h1>
      <p>打开控制台查看</p>
    </div>
//以下是script
import {ref} from 'vue'

const index = ref(null)

function handleClick() {
  console.log(index.value)
}
//以下是在控制台的输出结果
<div ref="index">
      <h1>templateRef模板引用</h1>
      <p>打开控制台查看</p>
    </div>
```
4. 实现dom树的修改

```javascript
function changeColor() {
  if(index.value.style.color == 'red')index.value.style.color = 'blue'
  else index.value.style.color = 'red'
}
```
# 父子组件通信
## 子组件向父组件传输数据
### defineEmits
```javascript
const emit = defineEmits(['pass-msg-to-father'])
const msg2 = ref(666)
onMounted(()=>{
  emit('pass-msg-to-father', msg2)
})
```
**注意**：这里emit不可以随便修改，两个都是！
在父组件中子组件的标签内用`@pass-msg-to-father = "getMagFromSon"自己定义的一个方法名`
在`<script setup>`中添加
```javascript
const msg2 = ref('')
const getMagFromSon = (data) => {
  msg2.value = data.value
}
```
来实现子组件向父组件的通信
当然，这里的`data`也是一个别名
### defineExpose（学长甄选，更加符合直觉，我也是这么觉得滴）
```javascript
defineExpose({
  sonMsg,
  changeSonMsg
})
```
这里的`sonMsg`和`changeSonMsg`等就是已经在子组件已经定义的变量和函数 
然后再在父组件的`script`里面加上这几句,其实就是你平时怎么用就怎么用就好了
```javascript
const getMsgFromSon2 = () => {
  console.log(son2.value.sonMsg)
  son2.value.changeSonMsg()
  son2Msg.value = son2.value.sonMsg
  console.log(son2.value.sonMsg)
}
```
## 父组件向子组件的通信
### defineProps
在子组件当中创建一个`props`对象
```javascript
const props = defineProps({
  msg: {
    type: Number,
    required: true
  }
})
```
这里的`defineProps`就相当于给子组件添加了新的属性
然后再在父组件当中的子组件标签当中用`v-bind`实现双向绑定，然后再再父组件中添加`const msg = ref(0)`等语句就可以实现父组件给子组件传值。
# 祖孙组件传值
provide and inject
```javascript
import { provide, ref } from 'vue';

const count = ref(0);
const addCount = () => {
  count.value++;
}
provide('count', count);
provide('addCount', addCount);
```
只要在祖组件当中使用过一次`provide`子组件和孙组件等只需要`inject`就可以共享使用变量和方法了
```javascript
<script setup>
import sonComponent from './sonComponent.vue';
import { inject } from 'vue';

const count = inject('count');
const addCount = inject('addCount');
</script>
```
```javascript
<script setup>
import { inject } from 'vue';

const count = inject('count');
const addCount = inject('addCount');
</script>
```
然后只要按照平时使用变量和函数的方法正常使用就没有问题了
# pinia
是vue专属的最新的**状态管理库**，允许跨组件或页面来共享数据的状态
## 添加pinia项目
- 命令行添加依赖`npm install pinia`
- 在入口文件`main.js`中引入Pinia
```javascript
import { createPinia } from 'pinia'
//别的乱七八糟
app.use(createPinia())
```
## 使用pinia项目
要在专门的`store`文件夹里面添加不同的文件
```javascript
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  const decrement = () => count.value--

  return { count, doubleCount, increment, decrement }
})
```
**注意**:
1. `useCounterStore`位置是实际引用的时候会使用到的名称
2. 在`const`前要记得加上`export`，导入之前自然要先导出，没有疑问的
3. 回调函数的最后记得将需要导出的变量和方法名`return`出来。

在组件中使用
```javascript
<script setup>
import {useCounterStore} from '@/stores/counter'

const counterStore = useCounterStore()

</script>
```
然后正常使用就可以了，比如需要用`count`直接写`counterStore.count`想要使用，想要使用`increment`方法就可以直接写`counterStore.increment`
## 实践
在实际使用的时候只要在创建vue项目的时候选择添加`pinia`就可以了
# router
## 添加router项目
创建一个`router`文件夹，这个文件夹和组件`store`等在同一层
然后在`router`文件夹里面创建一个`index.js`文件
## index.js
在`index.js`的开头记得加上`import { createRouter, createWebHistory } from 'vue-router'`
```javascript
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: refAndReactive
    },
    {
      path: '/refAndReactive',
      name: 'refAndReactive',
      component: refAndReactive
    },
    {
      path: '/computedAndWatch',
      name: 'computedAndWatch',
      component: () => import('../views/computedAndWatch.vue')
    },
  ]
})

export default router
```
这是路由的模板，有两种挂载组件的方法，可以在一开始导包`import refAndReactive from '../views/refAndReactive.vue'`然后在路由当中用`component: refAndReactive`直接挂载，但是如果每次都一次性导包，效率未免有些低，所以可以用`component: () => import('../views/computedAndWatch.vue')`让其在实际使用的时候才挂载起来
## 组件中使用
```javascript
import { RouterLink, RouterView } from 'vue-router'
const List = [
  {
    url:'/refAndReactive',
    name: '响应式和ref与reactive'
  },
  {
    url:'/computedAndWatch',
    name: 'computed和watch'
  },
  {
    url:'/tamplateRef',
    name: 'templateRef模板引用'
  },
  {
    url:'/lifeCycle',
    name: '生命周期函数'
  },
  {
    url: '/defineProps',
    name: '父子组件通信'
  },
  {
    url: '/provideAndInject',
    name: '祖孙组件通信'
  },
  {
    url: '/pinia',
    name: 'pinia'
  },
  {
    url: '/router',
    name: 'router'
  }
]
```
从`vue-router`导入`RouterLink`和`RouterView`等，然后创建一个数组，存储`url`和`name`
然后使用
```javascript
<router-link :to="item.url">{{ item.name }}</router-link> 
```
来创建链接实现跳转，`item.url`就是要跳转的url不过是在`App.vue`的基础上跳转的，`item.name`就是相对的名字等
```javascript
<router-view></router-view>
```
这个就是用来展示`views`的视窗
### v-on绑定
```javascript
<button @click="$router.push('/refAndReactive')">点击返回refAndReactive</button>
```
使用`v-on`绑定事件`$router.push('url')`就可以直接跳转到对应的页面
### useRouter
```javascript
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const toPage = (url) => {
  router.push(url)
}
</script>
```
```javascript
<button @click="toPage('/computedAndWatch')">点击返回computedAndWatch</button>
```
`'/computedAndWatch'`处也是填入对应的url
