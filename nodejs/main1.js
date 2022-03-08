//6、Node.js 事件循环
//Node.js 是单进程单线程应用程序，但是因为 V8 引擎提供的异步执行回调接口，通过这些接口可以处理大量的并发，所以性能非常高。
//Node.js 几乎每一个 API 都是支持回调函数的。
//Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。
//Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数。
//Node.js 使用事件驱动模型
//在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时触发回调函数。
//有点类似于观察者模式，事件相当于一个主题(Subject)，而所有注册到这个事件上的处理函数相当于观察者(Observer)。
//Node.js 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件

//6.1用法
//引入 events 模块
//var events=require('events');
//创建 eventEmitter 对象
//var eventEmitter=new events.EventEmitter();
//以下程序绑定事件处理程序：
//eventEmitter.on('eventName',eventHandler);
//我们可以通过程序触发事件
//eventEmitter.emit('eventName');


//6.2 实例：创建 main1.js 文件
//引入events模块
var events=require("events");
//创建eventEmitter对象
var eventEmitter=new events.EventEmitter();
//创建事件处理程序
var connectionHandler=function connected() {
    console.log("连接成功");
    //触发data_received事件
    eventEmitter.emit("data_received");
}

//绑定connection事件处理程序
eventEmitter.on('connection',connectionHandler);

//使用匿名函数绑定data_received事件
eventEmitter.on("data_received",function(){
    console.log("数据接收成功");
});

//触发connection事件
eventEmitter.emit("connection");
console.log("程序执行完毕。");


//接下来让我们执行以上代码：
//$ node main.js
//连接成功。
//数据接收成功。
//程序执行完毕。
