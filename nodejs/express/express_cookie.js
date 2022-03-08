var express=require('express');
var cookieParser=require('cookie-parser');
var util=require('util');

var app=express();
app.use(cookieParser());

app.get('/',function (req,res) {
        console.log('cookies:'+util.inspect(req.cookies));
    }

);

app.listen(8081);

/*
执行以上代码：
$ node express_cookie.js
然后你可以访问 http://127.0.0.1:8081 并查看终端信息的输出
*/
