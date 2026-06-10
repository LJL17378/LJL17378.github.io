---
title: 我对于react中的闭包和副作用的一些思考
---
# 我对于react中的闭包和副作用的一些思考
## 场景
我今天帮srgg干活的时候想要实现这么一个功能，那就是在进行`websocket`连接之后设置一个定时器来每隔一段时间就给服务器发消息来控制无人机的`pitch`,`yaw`,`factor`，我想的是隐藏操作的细节，只发相应的状态过去。那么我就很理所当然地想到了使用`useEffect`来实现。但是我随即就遇到了一些问题。
原来的代码是像这样的：
```javascript
useEffect(() => {
        const Timer = setInterval(() => {
            console.log("SocketRef:", webSocketRef.current);
            if (webSocketRef.current) {
                webSocketRef.current.send(JSON.stringify({
                    "tid": window.crypto.randomUUID(),
                    "timestamp": Math.floor(Date.now() / 1000),
                    "method": "zoom",
                    "data": {
                        "factor": factor
                    }
                }));
                webSocketRef.current.send(JSON.stringify({
                    "tid": window.crypto.randomUUID(),
                    "timestamp": Math.floor(Date.now() / 1000),
                    "method": "set_gimbal_angle",
                    "data": {
                        "pitch": pitch,
                        "yaw": yaw
                    }
                }));
            }
        }, 500);
        return () => {
            clearInterval(Timer);
        }
    }, [webSocketRef.current]);
```
随后很快发现了一个问题就是出现了闭包的问题，每次发消息的时候发的都是相同的值，这是怎么回事呢？这是因为当useEffect执行的时候`factor`,`pitch`,`yaw`和后面发生状态更新的时候的对象并不是一个对象，所以说就会有旧的对象被保留在`useEffect`内部，执行定时器的时候就会重复发送这些值，这也体现了react状态更新的一个原则，不可变性，相比于去修改对象和数组，我们更倾向于去创建一个新的。那么接下来我的第二次尝试所存在的错误就很明显了:
```javascript
useEffect(() => {
        const Timer = setInterval(() => {
            console.log("SocketRef:", webSocketRef.current);
            if (webSocketRef.current) {
                webSocketRef.current.send(JSON.stringify({
                    "tid": window.crypto.randomUUID(),
                    "timestamp": Math.floor(Date.now() / 1000),
                    "method": "zoom",
                    "data": {
                        "factor": zoomRef.current
                    }
                }));
                webSocketRef.current.send(JSON.stringify({
                    "tid": window.crypto.randomUUID(),
                    "timestamp": Math.floor(Date.now() / 1000),
                    "method": "set_gimbal_angle",
                    "data": {
                        "pitch": pitchRef.current,
                        "yaw": yawRef.current
                    }
                }));
            }
        }, 500);
        return () => {
            clearInterval(Timer);
        }
    }, [webSocketRef.current]);
```
因为此时我想的是`useRef`创建的是唯一的一个对象，所以就不存在对象不一致的情况，然而实际上还是行不通的，因为这个`useRef`和状态并不是双向绑定的，实际上还是里面存的还是旧的状态对应的对象的引用。
## 解决
噢那么这个时候我们到底应该怎么做呢？我们是不是只有给`useEffect`的依赖数组添加上需要的那几个状态才行？但是这样的话频繁触发定时器的刷新，这是实在是不优雅。噢那我再多写几个`useEffect`那不就好了？这样子你就实现了react中与状态的双向绑定：
```javascript
    useEffect(() => {
    zoomRef.current = zoom;
    }, [zoom]);

    useEffect(() => {
    pitchRef.current = pitch;
    }, [pitch]);

    useEffect(() => {
    yawRef.current = yaw;
    }, [yaw]);
```
当依赖中的状态变化的时候ref中的对象引用发生改变指向新的对象，合理，这实在是太合理了，那么这个时候完整的代码应该是这样的:
```javascript
    useEffect(() => {
    zoomRef.current = zoom;
    }, [zoom]);

    useEffect(() => {
    pitchRef.current = pitch;
    }, [pitch]);

    useEffect(() => {
    yawRef.current = yaw;
    }, [yaw]);

    useEffect(() => {
        const Timer = setInterval(() => {
            console.log("SocketRef:", webSocketRef.current);
            if (webSocketRef.current) {
                webSocketRef.current.send(JSON.stringify({
                    "tid": window.crypto.randomUUID(),
                    "timestamp": Math.floor(Date.now() / 1000),
                    "method": "zoom",
                    "data": {
                        "factor": zoomRef.current.toFixed(1)
                    }
                }));
                webSocketRef.current.send(JSON.stringify({
                    "tid": window.crypto.randomUUID(),
                    "timestamp": Math.floor(Date.now() / 1000),
                    "method": "set_gimbal_angle",
                    "data": {
                        "pitch": pitchRef.current.toFixed(1),
                        "yaw": yawRef.current.toFixed(1)
                    }
                }));
            }
        }, 500);
        return () => {
            clearInterval(Timer);
        }
    }, [webSocketRef.current]);
```
## 思考
当依赖数组中的值没有发生变化的时候`useEffect`就不会再次执行，这也是为了防止状态更新导致的重新渲染重复触发某一段代码，这么一看确实是太合理了，不依赖的状态不影响内部，这不就是为了防止出现副作用吗。而关于闭包的部分我本来以为这和我之前学的闭包问题大相径庭，但实际上还是一个问题，每一个React组件的核心都是渲染函数，每一次渲染都是独立的闭包，在后面定时器发送的消息都是一开始那个闭包的内容，那就是没有销毁的作用域中所依赖的临时变量不会被销毁。这也是旧的状态会被保留在`useEffect`内部的原因。而ref对象确实一直没有发生变化，也就是其引用值没有发生变化（通俗来讲小明还是那个小明，这是身高变高了。这也引发了一个有趣的疑问，如果时光旅行是克隆一个各个属性相同的人再杀死原来的那个人，他们到底是不是一个人呢，引用不同呀），只是其属性的值发生了改变，指向了一个新的对象，这也使得当闭包被保持的时候我们还是能够发送最新的状态。
> "ref是永恒的观察者，它见证状态的变化却从不改变自己的身份；current是善变的记录者，它忠实记载每一刻的真实，却从不在意过去或未来。"