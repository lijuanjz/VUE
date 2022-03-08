//13、Node.js 全局对象

//13.1 输出全局变量_filename的值
//__filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。
// 如果在模块中，返回的值是模块文件的路径。

//13.2 __dirname 表示当前执行脚本所在的目录。
function printFellow(){
   console.log(__filename);
   console.log(__dirname);
}

//13.3 setTimeout(cb, ms)
//setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
// ：setTimeout() 只执行一次指定函数。
// 两秒后执行以上函数-仅调用一次
//var t=setTimeout(printFellow,2000);

//13.4 清除定时器clearTimeout(t)
//两秒后执行以上函数-会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭\直到你按下
//直到你按下 ctrl + c 按钮。
//setInterval(printFellow,2000);

//13.5 setInterval(cb, ms)
//setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
//返回一个代表定时器的句柄值。可以使用 clearInterval(t) 函数来清除定时器。
//setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。

//13.6 console
//console 用于提供控制台标准输出

//13.7 全局变量process
// process 对象的常用方法属性参考《nodejs教程笔记.docx》第七章
process.on('exit',function (code) {
//以下代码永远不会执行
   setTimeout(function () {
      console.log("改代码不会执行");
   },0);
   console.log("退出码为："+code);
});
console.log("程序执行结束");
