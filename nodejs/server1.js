//12、Node.js 路由
//我们要为路由提供请求的 URL 和其他需要的 GET 及 POST 参数，随后路由需要根据这些数据来执行相应的代码。
//因此，我们需要查看 HTTP 请求，从中提取出请求的 URL 以及 GET/POST 参数。
//这一功能应当属于路由还是服务器（甚至作为一个模块自身的功能）确实值得探讨，但这里暂定其为我们的HTTP服务器的功能。
//我们需要的所有数据都会包含在 request 对象中，该对象作为 onRequest() 回调函数的第一个参数传递。

// 12.1.服务器
var http=require('http');
var url=require('url');
/*function start(){
    function onRequest(request,response) {
        var pathname=url.parse(request.url).pathname;
        console.log("Request for"+pathname+"receive.");

        response.writeHead(200,{"Content-Type":"text/plain"});
        response._write("Hellow World");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}*/

//12.2 创建路由文件：router.js

//12.3.如何把路由router.js和服务器整合起来?
//我们来扩展一下服务器的 start() 函数，以便将路由函数作为参数传递过去
function start(route){
    function onRequest(request,response) {
        var pathname=url.parse(request.url).pathname;
        console.log("Request for"+pathname+"receive.");

        route(pathname);

        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("Hellow World");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}
exports.start=start;


//12.4.同时，我们会相应扩展 index.js，使得路由函数可以被注入到服务器中：
//12.5 如果现在启动应用（node index.js，始终记得这个命令行），
// 随后请求一个URL，你将会看到应用输出相应的信息，这表明我们的HTTP服务器已经在使用路由模块了，并会将请求的路径传递给路由：
// $ node index.js
// Server has started.

