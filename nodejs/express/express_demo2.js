//19.2 路由
//我们已经了解了 HTTP 请求的基本应用，而路由决定了由谁(指定脚本)去响应客户端请求。
var express=require('express');
var app=express();

//app.use('/public',express.static('public'));
//  主页输出 "Hello World"
app.get('/',function (req,res) {
    console.log('主页GET请求');
    res.send('Hellow GET');
});

//POST请求
app.post('/',function (req,res) {
    console.log('主页POST请求');
    res.send('Hello POST');
});

//  /del_user 页面响应
app.get('/del_user',function (req,res) {
    console.log('/del_user响应DELETE请求');
    res.send('删除页面');
});

//  /list_user 页面GET请求
app.get('/list_user',function (req,res) {
    console.log('/list_user GET请求');
    res.send('用户列表页面');
});

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd',function (req,res) {
    console.log('/ab*cd GET请求');
    res.send('正则匹配');
});

var server=app.listen(8081,function () {
    var host=server.address().address;
    var port=server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});

/*执行以上代码：
$ node express_demo2.js
应用实例，访问地址为 http://0.0.0.0:8081*/
//接下来你可以尝试访问 http://127.0.0.1:8081 不同的地址，查看效果。
// 例如在浏览器中访问 http://127.0.0.1:8081/list_user，
//页面会显示：用户列表页面
