
//5、Node.js 回调函数
//Node.js 异步编程的直接体现就是回调。回调函数在完成任务后就会被调用，Node 使用了大量的回调函数，Node 所有 API 都支持回调函数。
//创建一个文件 input.txt ;
//创建 main.js 文件;


var fs=require("fs");
//5.1阻塞代码实例
//var data=fs.readFileSync("F:\\VUE\\nodejs\\input.txt");
//console.log(data.toString());
/*运行结果：
D:\Program Files\nodejs>node F:\VUE\nodejs\main.js
菜鸟教程官网地址：www.runoob.com
程序执行结束！*/


//5.2非阻塞代码实例
fs.readFile("input.txt",function(err,data){
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("程序执行结束！");


/*运行结果：
D:\Program Files\nodejs>node F:\VUE\nodejs\main.js
程序执行结束！
菜鸟教程官网地址：www.runoob.com*/
