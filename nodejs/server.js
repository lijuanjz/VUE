
//1、创建第一个应用
//步骤一、引入 required 模块
var http=require("http");
var url=require('url');
//步骤二、创建服务器
http.createServer(function (request,response) {
    //发送HTTp头部
    //HTTP状态值：200：ok
    //内容类型：text/plain
    response.writeHead(200,{'Content-Type':'text/plain'});

    //解析url参数
    //http://localhost:3000/user?name=菜鸟教程&url=www.runoob.com
    var params=url.parse(request.url,true).query;
    response.write("网站名："+params.name);
    response.write("\n");
    response.write("网站URL："+params.url);
    response.end();


    //发送响应数据“Hello World”   // response.end("Hellow World\n");
    }
).listen(3000);

//终端打印如下信息
console.log("Server runing at http://127.0.0.1:8888");


//使用 node 命令执行以上的代码：
//F:\VUE\nodejs>node server.js
//Server running at http://127.0.0.1:8888/
