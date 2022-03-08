//9.2.写入流
//创建writeFile.js文件
var fs=require('fs');
var data='菜鸟教程官网地址：www.runoob.com';

//创建一个可以写入的流，写入到output.txt中
var writerStream=fs.createWriteStream('output.txt');
writerStream.write(data,'UTF-8');
//标记文件末尾
writerStream.end();

//处理流事件-->finish、error
writerStream.on('finish',function(){
    console.log('写入完成。');
});

writerStream.on('error',function (err) {
    console.log(err.stack);
});
console.log('程序执行完毕');

//程序执行结果：
//$ node writeFile.js
//程序执行完毕
//写入完成。

//查看 output.txt 文件的内容：
//$ cat output.txt
//菜鸟教程官网地址：www.runoob.com
