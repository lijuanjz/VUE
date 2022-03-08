//17、Node.js 工具模块
//具体模块的使用参考菜鸟教程

//os模块：提供基本的系统操作函数。
var os=require('os');

//CPU 的字节序
console.log('endianness:'+os.endianness());

//操作系统名
console.log('type:'+os.type());

//操作系统名
console.log('platform:'+os.platform());

//系统内存总量
console.log('total memory:'+os.totalmem()+'bytes.');

//操作系统空间空闲内存量
console.log('free memory:'+os.freemem()+'bytes.');
