//20、Node.js RESTful API
//REST即表述性状态传递.
//表述性状态转移是一组架构约束条件和原则。满足这些约束条件和原则的应用程序或设计就是RESTful。
//需要注意的是，REST是设计风格而不是标准。
//REST通常基于使用HTTP，URI，和XML以及HTML这些现有的广泛流行的协议和标准。
// REST 通常使用 JSON 数据格式。

//20.1 HTTP 方法
/*以下为 REST 基本架构的四个方法：
    GET - 用于获取数据。
    PUT - 用于更新或添加数据。
    DELETE - 用于删除数据。
    POST - 用于添加数据。
   */

//20.2 RESTful Web Services
//Web service是一个平台独立的，低耦合的，自包含的、基于可编程的web的应用程序
//可使用开放的XML（标准通用标记语言下的一个子集）标准来描述、发布、发现、协调和配置这些应用程序，用于开发分布式的互操作的应用程序。
//基于 REST 架构的 Web Services 即是 RESTful。
//创建RESTful:
//20.2.1 首先，创建一个 json 数据资源文件 users.json
//20.2.2 基于以上数据，我们创建以下 RESTful API：
/*
序号	URI	HTTP    方法	发送内容	    结果
1	    listUsers	GET	    空	        显示所有用户列表
2	    addUser	    POST	JSON 字符串	添加新用户
3	    deleteUser	DELETE	JSON 字符串	删除用户
4	    :id	        GET	    空	        显示用户详细信息
*/

//1.显示所有用户列表
var express=require('express');
var app=express();
var fs=require('fs');

app.get('/listUsers',function (req,res) {
    fs.readFile(__dirname+"/"+"user.json",'utf-8',function (err,data) {
        console.log(data);
        res.end(data);
    });
    }
);

var server=app.listen(8082,function () {
    let host=server.address().address;
    let port=server.address().port;
    console.log("应用实例，访问地址为 http://%s",host);
    console.log("应用实例，访问地址为 http://%s:%s",host,port);
})


//2.添加用户
var express = require('express');
var app = express();
var fs = require("fs");

//添加的新用户数据
var user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
    }
}

app.get('/addUser', function (req, res) {
    // 读取已存在的数据
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["user4"] = user["user4"];
        console.log( data );
        res.end( JSON.stringify(data));
    });
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

//3.显示用户详情
var express = require('express');
var app = express();
var fs = require("fs");

app.get('/:id', function (req, res) {
    // 首先我们读取已存在的用户
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        var user = data["user" + req.params.id]
        console.log( user );
        res.end( JSON.stringify(user));
    });
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

//4.删除用户
var express = require('express');
var app = express();
var fs = require("fs");

var id = 2;

app.get('/deleteUser', function (req, res) {

    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        delete data["user" + id];

        console.log( data );
        res.end( JSON.stringify(data));
    });
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
