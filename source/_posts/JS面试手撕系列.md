---
title: JS面试手撕系列
---
# 手写 Promise.all
```js
/**
   * 1.返回一个新的promise对象
   * 2.遍历传入的数据，将数据包装成一个 promise 对象
   * 3. 执行resolve 或者reject
   * 4. 返回结果
   * 这里的代码是一个 forEach 循环，对于每个 Promise，调用 MyPromise.resolve 方法将其转换为 Promise 对象，然后调用 then 方法，将 fulfilled 的值存储到 results 数组中，count 加 1。当 count 等于 promises 数组的长度时，说明所有的 Promise 都 fulfilled，此时调用 resolve 方法，将 results 数组作为返回值传递给新的 Promise。
   * 在遍历时记录当前promise在数组中的位置，这个位置就是index。
   */
  all(array) {
    return new MyPromise((resolve, reject) => {
      if (!Array.isArray(array)) {
        throw new TypeError('You must pass an array to all.')
      }
      const result = []
      let count = 0
      // 遍历 array 拿到每一条数据
      array.forEach((promise, index) => {
        MyPromise.resolve(promise).then(
          (value) => {
            result[index] = value
            count++
            // 判断 result 结果值的长度 和 array参数的长度相等  执行最外面的 resolve 返回 all 结果
            if (count === array.length) {
              resolve(array)
            }
          },
          (err) => {
            reject(err)
          },
        )
      })
    })
  }
```

# 实现深拷贝
```js
function deepClone(obj, hash = new WeakMap()) {
    // 1. 处理非对象和 null typeof null 为 null
    if (obj === null || typeof obj !== 'object') return obj;

    // 2. 检查循环引用
    if (hash.has(obj)) return hash.get(obj);

    // 3. 初始化：保持继承原型
    let cloneObj = Array.isArray(obj) ? [] : {};
    hash.set(obj, cloneObj);

    // 4. 递归拷贝
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepClone(obj[key], hash);
        }
    }
    return cloneObj;
}
```


# 实现浅拷贝

```js
function shallowCopy(obj) {
    if (typeof obj !== 'object' || obj === null) return obj;
    
    // 根据是数组还是对象来初始化
    const newObj = Array.isArray(obj) ? [] : {};
    
    for (let key in obj) {
        // 只拷贝对象自身的属性，不拷贝原型链上的
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
```

# 实现new操作符
```js
const myNew = (fn, ...args) => {
    if (typeof fn !== 'function'){
        throw new TypeError("fn must be a function")
    }
    let obj = null
    // 设置原型
    obj = Object.create(fn.prototype)
    let result = fn.apply(obj, args)
    return result && (typeof result === 'object' ||  typeof result === 'function') ? result : obj
}
```

# 实现一个instanceof操作符
```js
/** 手写 instanceof 方法
 * 用法：instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
 * 思路：
 *  1、通过 Object.getPrototypeOf 获取 obj 的原型
 *  2、循环判断 objProtoType 是否和 constructor 的原型相等
 *    2.1、如果相等就返回 true
 *    2.2、如果不相等 就重新赋值一下 obj 的原型 进入下一次循环
 *  3、判断是 objProtoType 是否为空 如果为空就说明不存在 返回 false
 * __proto__ 是非标准属性，虽然浏览器都支持
 * 但 Object.getPrototypeOf() 是 ES6 推荐的标准方法
 * 更具兼容性和性能优势。所以不使用 __proto__
 * @param {Object} obj 需要判断的数据
 * @param {Object} constructor
 * @return {*}
 */
function myInstanceof(obj, type) {
  let objPrototype = Object.getPrototypeOf(obj)

  while (true) {
    if (!objPrototype) return false
    if (objPrototype === type.prototype) return true

    objPrototype = Object.getPrototypeOf(objPrototype)
  }
}
```

# 手写 Object.create
```js
const myCreate = (proto) => {
    if(typeof proto !== 'object' && typeof proto !== 'function') {
        throw new TypeError("Object prototype may only be an Object or null")
    }
    function F(){}
    F.prototype = proto
    let obj = new F()
    if(proto === null){
        Object.setPrototypeOf(obj,null)
    }
    return obj
}
```

# 手写节流
```js
const throttle = (fn, wait) => {
    let timer = null
    return function(...args){
        if (timer) return
        timer = setTimeout(()=>{
            fn.apply(this, args)
            timer = null
        }, wait);
    }
}
```

# 手写防抖
```js
const debounce = (fn, wait) => {
    let timer = null
    return function(...args){
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, wait);
    }
}
```

# 手写 call
```js
/** 手写 call
 * 用法：call 方法用于调用一个函数，并指定函数内部 this 的指向，传入一个对象
 * 思路：
 *  1、判断 this 是否指向一个函数  只有函数才可以执行
 *  2、获取传入的 context 上下文 也就是我们要指向的 如果不存在就指向 window
 *  3、将当前 this 也就是外部需要执行的函数 绑定到 context 上 然后执行获取 result 传入 ...args 确保参数位置正确
 *  4、删除 context 对象的 fn 属性 并将 result 返回
 */

Function.prototype.myCall = function(context, ...args) {
    // 1. 确保调用者是函数
    if (typeof this !== 'function') {
        throw new TypeError("Type Error");
    }

    // 2. 处理 context：null/undefined 指向 window，基本类型转为包装对象
    // Object(context) 可以把 1 变成 Number{1}，把 "a" 变成 String{"a"}
    context = (context !== null && context !== undefined) ? Object(context) : window;

    // 3. 使用 Symbol 创建唯一键，避免污染/覆盖原对象属性
    const fnKey = Symbol('fn');

    // 4. 将函数挂载到对象上（此时 this 就是那个函数）
    context[fnKey] = this;

    // 5. 执行函数并保存结果
    const result = context[fnKey](...args);

    // 6. 卸磨杀驴：删除临时属性
    delete context[fnKey];

    // 7. 返回结果
    return result;
};
```

# 手写 apply
```js
/** 手写 apply
 * 用法：apply 方法用于调用一个函数，并指定函数内部 this 的指向，传入一个数组
 * 思路：
 *  1、判断 this 是否指向一个函数  只有函数才可以执行
 *  2、获取传入的 context 上下文 也就是我们要指向的 如果不存在就指向 window
 *  3、将当前 this 也就是外部需要执行的函数 绑定到 context 上的一个 fn 属性上
 *  4、执行 fn 函数 判断 args 是否有 如果没有参数就直接执行 如果有参数 将参数展开传入 fn
 *  5、删除 context 对象的 fn 属性 并将 result 返回
 */

Function.prototype.myApply = function(context, args) {
    // 1. 确保调用者是函数
    if (typeof this !== 'function') {
        throw new TypeError("Type Error");
    }

    // 2. 处理 context：null/undefined 指向 window，基本类型转为包装对象
    // Object(context) 可以把 1 变成 Number{1}，把 "a" 变成 String{"a"}
    context = (context !== null && context !== undefined) ? Object(context) : window;

    // 3. 使用 Symbol 创建唯一键，避免污染/覆盖原对象属性
    const fnKey = Symbol('fn');

    // 4. 将函数挂载到对象上（此时 this 就是那个函数）
    context[fnKey] = this;

    // 5. 执行函数并保存结果
    const result = args ? context[fnKey](...args) :  context[fnKey]();

    // 6. 卸磨杀驴：删除临时属性
    delete context[fnKey];

    // 7. 返回结果
    return result;
};
```

# 手写 bind
```js
Function.prototype.myBind = function (context, ...args1) {
  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }

  const _this = this;

  const boundFn = function (...args2) {
    // 判断是否是通过 new 调用的
    // 如果是通过 new 调用的，this 会指向实例（instanceof boundFn 为 true）
    // 此时 this 就不应该指向 context，而是指向它自己
    const finalContext = this instanceof boundFn ? this : context;
    
    return _this.apply(finalContext, [...args1, ...args2]);
  };

  // 这一步是为了让 boundFn 能够继承原函数的原型链
  // 这样通过 new 出来的实例才能访问原函数 prototype 上的属性
  boundFn.prototype = Object.create(_this.prototype);

  return boundFn;
};
```

# 手写科里化
```js
function curry(fn, args){
    let length = fn.length
    args = args || [] 
    return function(...args2){
        const newArgs = [...args, ...args2]
        if(newArgs.length >= length){
            return fn.apply(this, newArgs)
        }else{
            return curry(fn, newArgs)
        }
    }
}
```

# 手写 Promise
```js
class MyPromise {
  constructor(executor) {
    this.state = 'pending'
    this.value
    this.reason

    this.onResolveCallbacks = []
    this.onRejectCallbacks = []

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.value = value
        this.state = 'fulfilled'
        this.onResolveCallbacks.forEach((fn) => fn())
      }
    }

    const reject = (reason) => {
      if (this.state === 'pending') {
        this.reason = reason
        this.state = 'rejected'
        this.onRejectCallbacks.forEach((fn) => fn())
      }
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    // 判断类型
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reason) => {
            throw reason
          }

    const p2 = new MyPromise((resolve, reject) => {
      // 执行成功
      // 执行失败
      // pending状态放入任务队列
      if (this.state === 'fulfilled') {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value)
            this.resolvePromise(p2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0)
      } else if (this.state === 'rejected') {
        setTimeout(() => {
          try {
            const x = onRejected(this.reason)
            this.resolvePromise(p2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0)
      } else {
        this.onResolveCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value)
              this.resolvePromise(p2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })

        this.onRejectCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason)
              this.resolvePromise(p2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
      }
    })

    return p2
  }

  resolvePromise(p2, x, resolve, reject) {
    // 判断 p2 和x是否相等
    if (p2 === x) {
      return reject(new TypeError('type error'))
    }

    // 执行锁 确保执行一次完resolve或者reject后 不再执行
    let called = false

    // 判断x数据类型  如果是函数 对象 需要递归执行  如果是值类型 直接resolve
    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
      try {
        // 判断 then是否为函数
        const then = x.then
        if (typeof then === 'function') {
          then.call(
            x,
            (y) => {
              if (called) return
              called = true
              this.resolvePromise(p2, y, resolve, reject)
            },
            (r) => {
              if (called) return
              called = true
              reject(r)
            },
          )
        } else {
          resolve(x)
        }
      } catch (error) {
        if (called) return
        called = true
        reject(error)
      }
    } else {
      resolve(x)
    }
  }
}
```

# 实现 all
```js
  /**
   * 1.返回一个新的promise对象
   * 2.遍历传入的数据，将数据包装成一个 promise 对象
   * 3. 执行resolve 或者reject
   * 4. 返回结果
   * 这里的代码是一个 forEach 循环，对于每个 Promise，调用 MyPromise.resolve 方法将其转换为 Promise 对象，然后调用 then 方法，将 fulfilled 的值存储到 results 数组中，count 加 1。当 count 等于 promises 数组的长度时，说明所有的 Promise 都 fulfilled，此时调用 resolve 方法，将 results 数组作为返回值传递给新的 Promise。
   * 在遍历时记录当前promise在数组中的位置，这个位置就是index。
   */
  all(array) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(array)) {
        throw new TypeError('You must pass an array to all.')
      }
      const result = []
      let count = 0
      // 遍历 array 拿到每一条数据
      array.forEach((promise, index) => {
        Promise.resolve(promise).then(
          (value) => {
            result[index] = value
            count++
            // 判断 result 结果值的长度 和 array参数的长度相等  执行最外面的 resolve 返回 all 结果
            if (count === array.length) {
              resolve(array)
            }
          },
          (err) => {
            reject(err)
          },
        )
      })
    })
  }
```
# 实现 race
```js
race(array) {
  // 1. 返回一个新 Promise，这是所有静态工具方法的标准模板
  return new Promise((resolve, reject) => {
    
    // 2. 边界检查：如果传的不是数组，直接抛错
    // 在 Promise 内部 throw 也会被 catch 捕获并走 reject 流程
    if (!Array.isArray(array)) {
      throw new TypeError('You must pass an array.')
    }

    // 3. 遍历数组
    array.forEach((promise) => {
      // 4. 关键点：归一化
      // 即使传入的是数字或字符串，也要包装成 Promise，这样才能统一调用 .then
      Promise.resolve(promise).then(
        (value) => {
          // 5. 重点：Promise 状态凝固
          // 这里的 resolve 会被多次触发吗？会。
          // 但由于 Promise 状态一旦从 pending 变成 fulfilled 就不会再变，
          // 所以只有第一个执行 resolve 的选手能成功把结果传出去。
          resolve(value)
        },
        (err) => {
          // 谁先报错，race 结果就是这个报错
          reject(err)
        },
      )
    })
  })
}
```
# 实现数组的扁平化
```js
const flatten = (arr) => {
    let newArr = []
    arr.forEach((item) => {
        if(Array.isArray(item)){
            newArr = newArr.concat(flatten(item))
        }else{
            newArr.push(item)
        }
    })
    return newArr
}
//使用队列
const flatten = (arr) => {
  const stack = [...arr]
  const result = []
  while(stack.length){
    const next = stack.shift()
    if(Array.isArray(next)){
      stack.unshift(...next)
    }else{
      result.push(next)
    }
  }
  return result
}
//使用栈
const flatten = (arr) => {
  const stack = [...arr]
  const result = []
  while(stack.length){
    const next = stack.pop()
    if(Array.isArray(next)){
      stack.push(...next)
    }else{
      result.unshift(next)
    }
  }
  return result
}
// ES6 结构赋值
function flatten(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    // concat 配合 扩展运算符实现数组拍平，concat会自动把数组拆开
    arr = [].concat(...arr)
  }
  return arr
}

```
# 实现数组去重
```js
//Set 结构
const arr = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8]
const uniqueArr = [...new Set(arr)]
// indexOf + filter
const uniqueArr = arr.filter((item, index) => {
  return arr.indexOf(item) === index
})
// 使用Map存储
function uniqueArray(array) {
  const map = new Map();
  // 利用 filter 的简洁和 Map 的快速查找
  return array.filter((item) => !map.has(item) && map.set(item, 1));
}
```
# 实现 reduce 方法
```js
function myReduce(arr, callBack, initialValue){
    let acc = initialValue !== undefined ? initialValue : arr[0]
    let startIndex = initialValue !== undefined ? 0 : 1
    for (var i = startIndex; i < arr.length; i++) {
        acc = callBack(acc, arr[i], i, arr)
    }
    return acc
}
```
# 实现数组的 push 方法
```js
Array.prototype.myPush = function(...arr) {
  for(let i = 0;i < arr.length; i++){
    this[this.length] = arr[i]
  }
  return this.length
}
```
# 实现数组 filter 方法
```js
Array.prototype.myFilter = function(callBack) {
  if (!callback || typeof callback !== 'function') {
    throw Error('callback must be a function ')
  }
  let result = []
  for(let i = 0;i < this.length; i++){
    if(callBack(this[i], i, this)){
      result.push(this[i])
    }
  }
  return result
}
```
# 实现数组 map 方法
```js
Array.prototype.myMap = function(callBack) {
  if (!callback || typeof callback !== 'function') {
    throw Error('callback must be a function ')
  }
  let result = []
  for(let i = 0;i < this.length; i++){
    result.push(callBack(this[i], i, this))
  }
  return result
}
```
# 实现 add(1)(2)(3)
```js
const add = (...args) => {
  let result = 0;
  let count = 0;

  // 定义一个统一的参数处理函数
  const process = (params) => {
    for (let i = 0; i < params.length && count < 3; i++) {
      result += params[i];
      count++;
    }
  };

  // 处理第一波参数
  process(args);

  const helper = function(...args2) {
    // 处理后续波次的参数 args2
    process(args2);
    // 检查是否凑够 3 个
    return count >= 3 ? result : helper;
  };

  return count >= 3 ? result : helper;
};
// 或者可以先实现科里化再使用 curriedSum
```
# 将数字每千分位用逗号隔开
```js
function format(num) {
  if (typeof num !== 'number' && isNaN(num)) return num;

  let str = num.toString();
  let [integer, decimal] = str.split('.'); // 彻底解耦整数和小数

  let len = integer.length;
  let res = "";

  if (len <= 3) {
    res = integer;
  } else {
    let remainder = len % 3;
    if (remainder > 0) {
      const firstNum = integer.slice(0, remainder);
      const surplus = integer.slice(remainder).match(/\d{3}/g);
      // 手动 join 确保受控，不要依赖数组 toString
      res = firstNum + ',' + surplus.join(',');
    } else {
      res = integer.match(/\d{3}/g).join(',');
    }
  }

  // 只有真的有小数时，才拼接小数点
  return decimal ? `${res}.${decimal}` : res;
}
//正则表达式法
function format(num) {
  return num.toString().replace(/\d(?=(\d{3})+$)/g, '$&,');
}
//实战api法
const num = 1234567.89;
console.log(num.toLocaleString()); // "1,234,567.89"
```
# 数组转树
```js
function arrToTree(arr) {
  const map = {}
  const result = []
  for (const item of arr) {
    map[item.id] = item
  }
  
  for (let i = 0; i < arr.length; i++) {
    // 获取 pid  看是否在 map 中查询得到对应的
    const pid = arr[i].pid
    if (map[pid]) {
      // 当前 pid 在 map 中存在 将当前节点作为 map 中节点的子节点
      map[pid].children = map[pid].children || []
      map[pid].children.push(arr[i])
    } else {
      // 不在 map 中 说明是根节点
      result.push(arr[i])
    }
  }
  return result
}
```
# 树转数组
```js
function treeToArr(arr) {
  let stack = [...arr]
  const result = []

  while (stack.length) {
    // 从数组中获取第一个
    const first = stack.shift()

    // 判断它有没有children
    if (first['children'] && first.children.length) {
      // 有 children 将它展开再放入到栈中
      stack.push(...first.children)

      // 删除 children 属性
      delete first.children
    }

    result.push(first)
  }

  return result
}
```

# 使用 setTimeout 实现 setInterval
```js
function mySetInterval (fn, delay){
  let timer
  function interval(){
    fn()
    setTimeout(interval, delay)
  }
  setTimeout(interval, delay)
  return {
    clear() {
      clearTimeout(timer)
    }
  }
}
```

# 实现发布-订阅模式
```js
class EventCenter {
  constructor() {
    // 事件中心
    this.events = {}
  }

  /**
   * 订阅事件
   *
   * @param {string} eventName
   * @param {function} callback
   * @memberof EventCenter
   */
  subscribe(eventName, callback) {
    // 确保当前 eventName 在事件中心是唯一的
    if (!this.events[eventName]) {
      // 创建事件容器
      this.events[eventName] = []
    }
    // 存放事件
    this.events[eventName].push(callback)
  }

  /**
   * 取消订阅
   *
   * @param {string} eventName
   * @param {function} callback
   * @return {*}
   * @memberof EventCenter
   */
  unSubscribe(eventName, callback) {
    // 事件中心里没有这个事件
    if (!this.events[eventName]) {
      return new Error('not find event ' + eventName)
    }

    // 只有事件名 移除事件
    if (!callback) {
      delete this.events[eventName]
    } else {
      // 找到索引
      const index = this.events[eventName].findIndex((el) => el === callback)

      if (index === -1) {
        return new Error('not find callback')
      }

      // 移除事件下的某个函数
      this.events[eventName].splice(index, 1)

      // 查看事件容器是否为空 如果为空移除事件
      if (this.events[eventName].length === 0) {
        delete this.events[eventName]
      }
    }
  }

  /**
   * 触发事件
   *
   * @param {string} eventName
   * @param {Array} args
   * @return {*}
   * @memberof EventCenter
   */
  dispatch(eventName, ...args) {
    if (!this.events[eventName]) {
      return new Error('not find event ' + eventName)
    }

    // 触发事件
    this.events[eventName].forEach((el) => {
      el(...args)
    })
  }
}

const eventCenter = new EventCenter()

// 订阅事件
eventCenter.subscribe('click', (x, y) => {
  console.log(`clicked at (${x}, ${y})`)
})

// 发布事件
eventCenter.dispatch('click', 10, 20) // 输出：clicked at (10, 20)
```

# 手撕调度
```js
class Scheduler {
  constructor(limit = 2) {
    this.limit = limit;
    this.runningCount = 0;
    this.queue = [];
  }

  async add(promiseCreator) {
      if (this.runningCount >= this.limit){
          await new Promise(resolve => this.queue.push(resolve))
      }
      this.runningCount ++
      try{
       let result = await promiseCreator()
       return result
      }finally{
          this.runningCount --
          if(this.queue.length > 0){
              const next = this.queue.shift()
              next()
          }
      }
      
  }
}
```
# 函数式手撕调度
```js
/**
 * @param {Array<() => Promise<any>>} tasks 任务数组，每个元素是一个返回 Promise 的函数
 * @param {number} limit 最大并发数
 */
async function throttleTasks(tasks, limit) {
  const results = []; // 存储结果
  let i = 0; // 下一个待执行任务的索引

  // 定义一个执行器
  async function executor() {
    while (i < tasks.length) {
      const index = i++; // 抢占当前任务索引
      const task = tasks[index];
      
      try {
        // 执行任务并记录结果
        results[index] = await task();
      } catch (err) {
        results[index] = err; // 错误处理
      } finally {
        // 一个任务执行完，while 循环会自动进入下一轮，执行下一个 i++
      }
    }
  }

  // 初始化启动：启动 limit 个执行器（就像开了 limit 个窗口排队）
  const workers = Array.from({ length: Math.min(limit, tasks.length) }, executor);
  
  // 等待所有执行器完成
  await Promise.all(workers);
  return results;
}
```

# lazyMan
```js
class _LazyMan {
  constructor(name) {
    this.tasks = []; // 任务队列
    const task = () => {
      console.log(`Hi! This is ${name}!`);
      this.next();
    };
    this.tasks.push(task);

    // 关键：使用 setTimeout 确保在同步任务（所有链式调用）挂载完成后再开始执行
    setTimeout(() => {
      this.next();
    }, 0);
  }

  next() {
    const task = this.tasks.shift(); // 取出队列中的第一个任务
    if (task) task();
  }

  sleep(time) {
    this._sleepWrapper(time, false);
    return this; // 链式调用的核心：返回 this
  }

  sleepFirst(time) {
    this._sleepWrapper(time, true);
    return this;
  }

  _sleepWrapper(time, isFirst) {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}s`);
        this.next();
      }, time * 1000);
    };
    
    if (isFirst) {
      this.tasks.unshift(task); // 插到队首
    } else {
      this.tasks.push(task);    // 插到队尾
    }
  }

  eat(food) {
    const task = () => {
      console.log(`Eat ${food}~`);
      this.next();
    };
    this.tasks.push(task);
    return this;
  }
}

const LazyMan = (name) => new _LazyMan(name);
```