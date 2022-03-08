//9.4、链式流
//我们就是用管道和链式来压缩和解压文件。
//压缩文件
var fs=require('fs');
var zlib=require('zlib');

//压缩input.txt为input.txt.gz
fs.createReadStream('F:\\VUE\\nodejs\\input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log('文件压缩完成。');

//解压文件
var fs = require("fs");
var zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));

console.log("文件解压完成。");
