//9、Node.js Stream(流)
/*Node.js，Stream 有四种流类型：
Readable - 可读操作。
Writable - 可写操作。
Duplex - 可读可写操作.
Transform - 操作被写入数据，然后读出结果。*/

/*所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
data - 当有数据可读时触发。
end - 没有更多的数据可读时触发。
error - 在接收和写入过程中发生错误时触发。
finish - 所有数据已被写入到底层系统时触发。*/

//9.1.从流中读取数据
//创建 input.txt 文件(菜鸟教程官网地址：www.runoob.com)
//创建 fileIO.js 文件, 代码如下：
var fs=require("fs");
var data='';

//创建可读流
var readerStream=fs.createReadStream('F:\\VUE\\nodejs\\input.txt');
//设置编码为utf8
readerStream.setEncoding('UTF-8');
//处理流事件-->data,end,error
readerStream.on('data',function(chunk){
    data+=chunk;
});

readerStream.on('end',function () {
    console.log(data);
});

readerStream.on('reeor',function (err) {
    console.log(err.stack);
});

console.log("程序执行完毕");

//程序执行结果：
//程序执行完毕
//菜鸟教程官网地址：www.runoob.com


//9.2.写入流
//参考writeFile.js文件
//9.3 管道流
//管道提供了一个输出流到输入流的机制。参考pipeFile.js文件
//9.4 链式流
//链式是通过连接输出流到另外一个流并创建多个流操作链的机制。
// 参考pipeFile2.js文件
