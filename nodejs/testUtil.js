//14、Node.js 常用工具
//util 是一个Node.js 核心模块，提供常用函数的集合
const util=require('util');

//14.1 util.callbackify
//util.callbackify(original) 将 async 异步函数（或者一个返回值为 Promise 的函数）转换成遵循异常优先的回调风格的函数，
// 例如将 (err, value) => ... 回调作为最后一个参数。
// 在回调函数中，第一个参数为拒绝的原因（如果 Promise 解决，则为 null），第二个参数则是解决的值。
async function fn() {
    return 'hello world';
}
const callbackFunction=util.callbackify(fn);

callbackFunction((err, result) => {
    if (err)throw err;
    console.log(result);
});

//null 在回调函数中作为一个参数有其特殊的意义，
// 如果回调函数的首个参数为 Promise 拒绝的原因且带有返回值，且值可以转换成布尔值 false，
// 这个值会被封装在 Error 对象里，可以通过属性 reason 获取。
function fn() {
    return Promise.reject(null);
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
    // 当 Promise 被以 `null` 拒绝时，它被包装为 Error 并且原始值存储在 `reason` 中。
    err && err.hasOwnProperty('reason') && err.reason === null;  // true
});

//14.2 util.inherits
//util.inherits(constructor, superConstructor) 是一个实现对象间原型继承的函数。
//JavaScript 的面向对象特性是基于原型的，与常见的基于类的不同。
//JavaScript 没有提供对象继承的语言级别特性，而是通过原型复制来实现的。
function  Base() {
    this.name='base';
    this.base=1991;
    this.sayHello=function () {
        console.log('Hello'+this.name);
    };
}
Base.prototype.showName=function () {
    console.log(this.name);
};
function  Sub() {
    this.name='sub';
}
util.inherits(Sub,Base);
var objBase=new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub=new Sub();
objSub.showName();
console.log(objSub);

//我们定义了一个基础对象 Base 和一个继承自 Base 的 Sub，
// Base 有三个在构造函数内定义的属性和一个原型中定义的函数，
// 通过util.inherits 实现继承。运行结果如下：
/*base
Hello base
{ name: 'base', base: 1991, sayHello: [Function] }
sub
{ name: 'sub' }*/

//注意：Sub 仅仅继承了Base 在原型中定义的函数，
// 而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。
// 同时，在原型中定义的属性不会被 console.log 作 为对象的属性输出。

//14.3 util.inspect
//util.inspect(object,[showHidden],[depth],[colors]) 是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。
//showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息。
//depth 表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多 少。
//指定depth，默认会递归 2 层，指定为 null 表示将不限递归层数完整遍历对象。
//特别要指出的是，util.inspect 并不会简单地直接把对象转换为字符串，即使该对 象定义了 toString 方法也不会调用。
//var util = require('util');
function Person() {
    this.name = 'byvoid';
    this.toString = function() {
        return this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));

//运行结果是：
/*Person { name: 'byvoid', toString: [Function] }
Person {
    name: 'byvoid',
        toString:
    { [Function]
        [length]: 0,
        [name]: '',
        [arguments]: null,
        [caller]: null,
        [prototype]: { [constructor]: [Circular] } } }*/

//14.4 util.isArray(object)
//如果给定的参数 "object" 是一个数组返回 true，否则返回 false。

//14.5 util.isRegExp(object)
//如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。

//14.6 util.isDate(object)
//如果给定的参数 "object" 是一个日期返回true，否则返回false。
