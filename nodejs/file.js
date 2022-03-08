//15、Node.js 文件系统
//Node.js 提供一组类似 UNIX（POSIX）标准的文件操作API。
//Node 导入文件系统模块(fs)语法:
var fs = require("fs");

//15.1 异步和同步
//Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本
//例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。
//异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。
//建议大家使用异步方法，比起同步，异步方法性能更高，速度更快，而且没有阻塞。
//异步读取
fs.readFile('input.txt',function (err,data) {
    if(err){
        return console.error(err);
    }
    console.log("异步读取："+data.toString());
});

//同步读取
var data=fs.readFileSync('input.txt');
console.log("同步读取："+data.toString());

console.log('程序执行完毕');

//代码执行结果:
/*$ node file.js
同步读取: 菜鸟教程官网地址：www.runoob.com
文件读取实例

程序执行完毕。
异步读取: 菜鸟教程官网地址：www.runoob.com
文件读取实例*/


//15.2 打开文件,语法：fs.open(path, flags[, mode], callback)
/*参数使用说明如下：
path - 文件的路径。
flags - 文件打开的行为。具体值详见《nodejs教程笔记.docx》第八章。
mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
callback - 回调函数，带有两个参数如：callback(err, fd)。
*/
//异步打开文件
console.log('准备打开文件！');
fs.open('input.txt','r+',function (err,fd) {
    if (err){
        return console.error(err);
    }
    console.log('文件打开成功！');
});


//15.3 获取文件信息,语法：fs.stat(path, callback)
//stats类中的方法详见《nodejs教程笔记.docx》第八章。
fs.stat('/Users/liuht/code/itbilu/demo/fs.js', function (err, stats) {
    console.log(stats.isFile());         //true
})

//15.4 写入文件,语法：fs.writeFile(file, data[, options], callback)
//writeFile 直接打开文件默认是 w 模式，
// 所以如果文件存在，该方法写入的内容会覆盖旧的文件内容。
//options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'

//15.5 读取文件，语法：fs.read(fd, buffer, offset, length, position, callback)
//该方法使用了文件描述符来读取文件。
//fd - 通过 fs.open() 方法返回的文件描述符。
//buffer - 数据写入的缓冲区。
//offset - 缓冲区写入的写入偏移量。
//length - 要从文件中读取的字节数。
//position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
//allback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。
var buf=new Buffer.alloc(1024);

console.log('准备打开已存在的文件！');
fs.open('input.txt','r+',function (err,fd) {
    if(err){
        return console.error(err);
    }
    console.log('文件打开成功！');
    console.log('准备读取文件：');
    fs.read(fd,buf,0,buf.length,0,function (err,bytes) {
        if (err){
            console.log(err);
        }
        console.log(bytes+'字节被读取');
        //仅输出读取的字节
        if(bytes>0){
            console.log(buf.slice(0,bytes).toString());
        }

        //关闭文件
        fs.close(fd,function (err) {
            if (err){
                console.log(err);
            }
            console.log('文件关闭成功');
        });
    })

});

/*代码执行结果
$ node file.js
准备打开已存在的文件！
文件打开成功！
准备读取文件：
42  字节被读取
菜鸟教程官网地址：www.runoob.com*/

//15.6 关闭文件，语法：fs.close(fd, callback)
//该方法使用了文件描述符来读取文件。实例参考15.5
//fd - 通过 fs.open() 方法返回的文件描述符。

//15.7 截取文件，语法：fs.ftruncate(fd, len, callback)
var buf = new Buffer.alloc(1024);

console.log("准备打开文件！");
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");
    console.log("截取10字节内的文件内容，超出部分将被去除。");

    // 截取文件
    fs.ftruncate(fd, 10, function(err){
        if (err){
            console.log(err);
        }
        console.log("文件截取成功。");
        console.log("读取相同的文件");
        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
            if (err){
                console.log(err);
            }

            // 仅输出读取的字节
            if(bytes > 0){
                console.log(buf.slice(0, bytes).toString());
            }

            // 关闭文件
            fs.close(fd, function(err){
                if (err){
                    console.log(err);
                }
                console.log("文件关闭成功！");
            });
        });
    });
});


//15.8 删除文件，语法：fs.unlink(path, callback)
//callback - 回调函数，没有参数。

//15.9 创建目录,语法：fs.mkdir(path[, options], callback)
//options 参数可以是：
    // recursive - 是否以递归的方式创建目录，默认为 false。
    // mode - 设置目录权限，默认为 0777。
//callback - 回调函数，没有参数。

//tmp目录必须存在
console.log('创建目录/tmp/test/');
fs.mkdir('/tmp/test/',function (err) {
    if (err){
        return console.error(err);
    }
    console.log('目录创建成功。');
});
//可以添加 recursive: true 参数，
// 不管创建的目录 /tmp 和 /tmp/a 是否存在：
fs.mkdir('/tmp/a/apple', { recursive: true }, (err) => {
    if (err) throw err;
});

//15.10 读取目录,语法：fs.readdir(path, callback)
//callback - 回调函数，回调函数带有两个参数err, files，files 为 目录下的文件数组列表。
console.log("查看 /tmp 目录");
fs.readdir("/tmp/",function(err, files){
    if (err) {
        return console.error(err);
    }
    files.forEach( function (file){
        console.log( file );
    });
});

//15.11 删除目录,语法：fs.rmdir(path, callback)
//callback - 回调函数，没有参数。

//15.12 文件模块方法参考手册详见《nodejs教程笔记.docx》第八章
