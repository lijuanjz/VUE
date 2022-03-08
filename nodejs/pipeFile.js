//9.3、管道流
//创建pipeFile.js文件

var fs=require('fs');

//创建一个可读流
var readerStream=fs.createReadStream('F:\\VUE\\nodejs\\input.txt');

//创建一个可写流
var writerStream=fs.createWriteStream('output.txt');

//管道读写操作

readerStream.pipe(writerStream);

console.log('程序执行完毕');
