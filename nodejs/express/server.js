var express=require('express');
var app=express();

var bodyParser=require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodeparser=bodyParser.urlencoded({ extended: false });

app.use('/',express.static('public'));

app.get('/index.html',function (req,res) {
    res.sendFile(__dirname+"/"+"index.html");
});

/*app.get('/process_get',function (req,res) {
  //输出JSON格式
    var response={
        'first_name':req.query.first_name,
        'last_name':req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});
* */
app.post('/process_post',urlencodeparser,function (req,res){
    //输出JSON格式
    var response={
        'first_name':req.body.first_name,
        'last_name':req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server=app.listen(8081,function () {
    var host=server.address().address;
    var port=server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port);
})