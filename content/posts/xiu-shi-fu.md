---
title: 修饰符
slug: xiu-shi-fu
publishedAt: '2024-09-21'
updatedAt: '2024-09-21'
summary: >-
  what is 修饰符 在 vue 中，修饰符处理了很多 DOM 事件的细节，可以让我们专注于逻辑处理和方法实现，免于疲于 DOM 事件的细节 vue
  中修饰符主要分为以下五类： 1. 表单修饰符 2. 事件修饰符 3. 鼠标按键修饰符 4. 键值修饰符 5. v-bind修饰符 常见的修饰符 表单
tags:
  - Vue
  - JavaScript
draft: false
sourceFile: 修饰符.md
---
# what is 修饰符
在`vue`中，修饰符处理了很多`DOM`事件的细节，可以让我们专注于逻辑处理和方法实现，免于疲于`DOM`事件的细节
`vue`中修饰符主要分为以下五类：
1. 表单修饰符
2. 事件修饰符
3. 鼠标按键修饰符
4. 键值修饰符
5. v-bind修饰符

# 常见的修饰符
## 表单修饰符
- lazy
- trim
- number

1. lazy

默认情况下，`v-model`会在每次`input`事件更新数据。可以通过添加`lazy`修饰符来改为在每次`change`事件之后更行数据：
```javascript
<input type="text" v-model.lazy="value">
<p>{{value}}</p>
```
2. trim

可以通过在`v-model`后添加`.trim`修饰符来自动去除用户输入内容中两端的空格：
```javascript
<input type="text" v-model.trim="value">
```
3. number

可以自动把用户输入的内容转换为数字：
```javascript
<input type="number" v-model.number="age">
```
## 事件修饰符
- stop
- prevent
- self
- once
- capture
- passive
- native

1. stop

使用`.stop`可以**阻止点击事件冒泡**：
```javascript
<div @click="divClick">
    <button @click.stop="btnClick">按钮</button>
</div>
```
这样在点击按钮的时候就不会触发到父元素的`divClick`事件
2. prevent

阻止了事件的默认行为，例如提交事件之后不会再重新加载页面，再例如点击链接之后不会自动跳转到对应的页面：
```javascript
<form @submit.prevent="onSubmit"></form>
<a href="http://www.baidu.com" @click.prevent="aClick">点击不跳转</>
```
3. self

仅当事件处理的目标是元素本身的时候才会触发事件处理器，例子：
```javascript
id="_Red" v-on:click="doThat1(event)" style="width: 500px;height: 500px;background: red;">
 
                <div v-on:click="doThat(event)" id="_Blue" style="width: 200px;height: 200px;background: blue;">
 
                </div>
 
 
            </div>

```
vue 实例方法
```javascript
doThat:function(e){
 
                        alert('doThat'+$(e.target).attr('id'));
 
                    },
doThat1:function(e){
 
                        alert('doThat1'+$(e.target).attr('id'));
 
                    }
```
没有添加修饰符的时候，点击`blue`部分的输出结果是：
```javascript
doThat_Blue
doThat1_Blue
//这里要说明一下，事件冒泡除了事件触发以外传入的事件对象也是事件源的对象，并非是事件绑定的元素，因此两次输出的都是Blue而不是一次Blue一次Red
```
当我们再Red上加上`.self`修饰符的时候再点击`Blue`就会发现只输出了doThat_Blue就不会再输出了，因为`.self`只执行直接作用在该元素上的事件。
**注意**：
使用修饰符时需要注意调用顺序，使用`@click.prevent.self`会阻止元素及其子元素的所有点击事件的默认行为而`@click.self.prevent`则只会阻止对元素本身的点击事件的默认行为。
4. once

绑定了事件以后就只能触发一次，第二次就不会触发了。
```javascript
<button @click.once="shout(1)">ok</button>
```
5. capture

当元素发生冒泡时先处理带有`.capture`的事件，如果有多个事件带有该修饰符则从外向内逐个处理，而没有带该修饰符的就会从内向外处理：
 ```javascript
 <div @click.capture="shout(1)">
    obj1
<div @click.capture="shout(2)">
    obj2
<div @click="shout(3)">
    obj3
<div @click="shout(4)">
    obj4
</div>
</div>
</div>
</div>
// 输出结构: 1 2 4 3 
```
 6. passive

在移动端，当我们在监听元素滚动的时候，会一直触发`onscroll`事件让我们的网页变卡，在使用了这个修饰符之后就相当于给`onscroll`事件添加了一个`.lazy`修饰符。

`.passive`修饰符一般用于触摸事件的监听器，可以用来**改善移动端设备的滚屏性能**。
**注意**：不要同时使用`.passive`和`.prevent`
7. native

让组件变成像`html`内置标签那样监听根元素的原生事件，否则组件上使用 v-on 只会监听自定义事件
```javascript
<my-component v-on:click.native="doSomething"></my-component>
```
## 鼠标按钮修饰符
鼠标按钮修饰符针对的就是左键，中键，右键点击，有如下：
- left 左键点击
- right 右键点击
- middle 中间点击

```javascript
<button @click.left="shout(1)">ok</button>
<button @click.right="shout(1)">ok</button>
<button @click.middle="shout(1)">ok</button>
```
## 键盘修饰符
键盘修饰符就是用来修饰键盘事件的，用来检查特定的键盘按键，我们可以在`v-on`或者`@`监听按键事件的时候添加按键修饰符。
```javascript
//仅在 `key` 为 `Enter` 时调用 `submit`，同理可以使用别的按键别名
<input @keyup.enter="submit" />

<input @keyup="submit" />//在按下键盘任意键的时候触发事件
```
### 按键别名
- `.enter`
- `.tab`
- `.delete`(Delete or Backspace)
- `.esc`
- `.up`
- `.down`
- `.left`
- `.right`

### 系统按键修饰符
- `.ctrl`
- `.alt`
- `.shift`
- `.meta`(windows里面就是windows键)

举例来说：
```javascript
<!-- Alt + Enter -->
<input @keyup.alt.enter="clear" />

<!-- Ctrl + 点击 -->
<div @click.ctrl="doSomething">Do something</div>
```
### .exact修饰符
```javascript
<!-- 当按下 Ctrl 时，即使同时按下 Alt 或 Shift 也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 仅当按下 Ctrl 且未按任何其他键时才会触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- 仅当没有按下任何系统按键时触发 -->
<button @click.exact="onClick">A</button>
```
## v-bind修饰符
有
- async
- prop
- camel

等，不太懂其意义，以后再说吧
