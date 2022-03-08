//18、Node.js Web 模块
//Web服务器的基本功能就是提供Web信息浏览服务。
//它只需支持HTTP协议、HTML文档格式及URL，与客户端的网络浏览器配合。

//Client - 客户端，一般指浏览器，浏览器可以通过 HTTP 协议向服务器请求数据。
//Server - 服务端，一般指 Web 服务器，可以接收客户端请求，并向客户端发送响应数据。
//Business - 业务层， 通过 Web 服务器处理应用程序，如与数据库交互，逻辑运算，调用外部程序等。
//Data - 数据层，一般由数据库组成。

//18.1使用 Node 创建 Web 服务器
//http 模块主要用于搭建 HTTP 服务端和客户端
var http=require('http');
var fs=require('fs');
var url=require('url');


//创建服务器
http.createServer(function (request,response) {
    //解析请求，包括文件名
    var pathname=url.parse(request.url).pathname;

    //输出请求的文件名
    console.log('Request for'+pathname+'received.');

    //从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1),function (err,data) {
        if(err){
            console.log(err);
            // HTTP 状态码: 404 : NOT FOUND
            // Content Type: text/html
            response.writeHead(404,{'Content-Type':'text/html'});
        }else{
            // HTTP 状态码: 200 : OK
            // Content Type: text/html
            response.writeHead(200,{'Content-Type':'text/html'});

            //响应文件内容
            response.write(data.toString());
        }
        response.end();
    });
    }).listen(8080);

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8080/');


////18.2 使用 Node 创建 Web 客户端:client.js文件
