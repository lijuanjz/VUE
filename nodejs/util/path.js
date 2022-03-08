//path模块：提供了处理和转换文件路径的工具
var path =require('path');

//console.log(path.resolve('foot/bar','./baz'));
//返回'foot/bar/baz'
//console.log(path.resolve('foot/bar','/tmp/file/'));
//返回'/tmp/file'
//console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));
// 如果当前工作目录为 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'

//用于将绝对路径转为相对路径，返回从 from 到 to 的相对路径（基于当前工作目录）。
//console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));
// 返回: '../../impl/bbb'

//console.log(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'));
//返回: '..\\..\\impl\\bbb'
// 实际测试返回: '../../impl/bbb'

//格式化路径
console.log('normalization:'+path.normalize('/test/test1//2slashes/1slash/tab/..'));
//连接路径
console.log('join path:'+path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));
//转换为绝对路径
console.log('resolve:'+path.resolve('main.js'));

//路径中文件的后缀名
console.log('ext name:'+path.extname('main.js'));




