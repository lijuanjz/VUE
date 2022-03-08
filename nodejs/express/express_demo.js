//19、Node.js Express 框架
//Express 是一个简洁而灵活的 node.js Web应用框架
//Express 框架核心特性：
    // 可以设置中间件来响应 HTTP 请求。
    // 定义了路由表用于执行不同的 HTTP 请求动作。
    // 可以通过向模板传递参数来动态渲染 HTML 页面。

//19.1 安装 Express
//$ cnpm install express --save

/*以下几个重要的模块是需要与 express 框架一起安装的：
$ cnpm install body-parser --save
$ cnpm install cookie-parser --save
$ cnpm install multer --save*/

//安装完后，我们可以查看下 express 使用的版本号：
//$ cnpm list express

//以下实例中我们引入了 express 模块，
// 并在客户端发起请求后，响应 "Hello World" 字符串。
var express=require('express');
var app=express();

app.get('/',function (req,res) {
    res.send('Hellow World');
});

var server=app.listen(8081,function () {
    var host=server.address().address;
    var port=server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});


/*
执行以上代码：
$ node express_demo.js
应用实例，访问地址为 http://0.0.0.0:8081

在浏览器中访问 http://127.0.0.1:8081,
页面显示：Hellow World
*/


//19.2 请求和响应
//request 和 response 对象的具体介绍：详见《nodejs教程笔记.docx》第十章

//19.2 路由
//创建express_demo2.js文件

//19.3 静态文件
//创建express_demo3.js文件

//19.4 GET 方法
//实例演示了在表单中通过 GET 方法提交两个参数，
// 创建index.html文件，
// 我们可以使用 server.js 文件内的 process_get 路由器来处理输入


//19.5 POST 方法
//实例演示了在表单中通过 POST 方法提交两个参数，
// 创建index.html文件，
//我们可以使用 server.js 文件内的 process_post 路由器来处理输入

//19.6 文件上传
//创建index1.html
//创建server1.js

//19.7 Cookie 管理
//我们可以使用中间件向 Node.js 服务器发送 cookie 信息，
//以下代码输出了客户端发送的 cookie 信息:创建express_cookie.js
