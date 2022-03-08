//7.2当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。
//实例：新建event1.js文件

var EventEmitter=require("events").EventEmitter;
var event=new EventEmitter();

event.on('someEvent',function (arg1,arg2) {
    console.log('listener1',arg1,arg2);
});

event.on('someEvent',function(arg1,arg2){
    console.log('listener2',arg1,arg2);
});

event.emit('someEvent','arg1 参数', 'arg2 参数');

//程序运行结果：
//$ node event.js
//listener1 arg1 参数 arg2 参数
//listener2 arg1 参数 arg2 参数
