//7、Node.js EventEmitter

//7.1新建event.js,说明 EventEmitter 的用法实例：
var EventEmitter=require("events").EventEmitter;
var event=new EventEmitter();
event.on('some_event',function(){
    console.log('some_event事件触发')
});

setTimeout(function () {
event.emit('some_event');
},1000);

//运行程序结果：
//$ node event.js
//some_event 事件触发

//7.2当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。
//实例参考event1.js文件

//7.3 EventEmitter 类方法
//具体内容参考《nodejs教程笔记.docx》第六章

