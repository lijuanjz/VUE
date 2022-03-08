//10、Node.js模块系统
//模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。换言之，一个 Node.js 文件就是一个模块，这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展。
// 10.1 实例：创建一个 main.js 文件并引入 hello 模块
//./ 为当前目录，node.js 默认后缀为 js
var hello=require('./hello');
hello.world();

//Node.js 提供了 exports 和 require 两个对象，
// 其中 exports 是模块公开的接口，require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。
//接下来我们就来创建 hello.js 文件,参考hello.js


//10.2 有时候我们只是想把一个对象封装到模块中，格式如下：
//module.exports = function() {
// ...
// }
//main.js实例
//创建 hello.js 文件实例参考hello.js
//这样就可以直接获得这个对象了：
var Hello = require('./hello');
hello = new Hello();
hello.setName('BYVoid');
hello.sayHello();

//10.3 模块加载优先级
//尽管原生模块与文件模块的优先级不同，但是都会优先从文件模块的缓存中加载已经存在的模块。
//当文件模块缓存中不存在，而且不是原生模块的时候，Node.js 会解析 require 方法传入的参数，并从文件系统中加载实际的文件
/*require方法接受以下几种参数的传递：
http、fs、path等，原生模块。
./mod或../mod，相对路径的文件模块。
/pathtomodule/mod，绝对路径的文件模块。
mod，非原生模块的文件模块。*/


//10.4 exports 和 module.exports 的使用
//如果要对外暴露属性或方法，就用 exports 就行，
// 要暴露对象(类似class，包含了很多属性和方法)，就用 module.exports。
