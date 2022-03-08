//23、Node.js 连接 MySQL

//23.1 安装驱动
//$ cnpm install mysql

//23.2 连接数据库
//创建testMySql.js文件
var mysql=require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'test'
});

connection.connect();

connection.query('select 1+1 as solution', function (error,results,fields) {
    if (error)throw error;
    console.log('The solution is: ', results[0].solution);
});

/*
执行以下命令输出结果为：
$ node testMySql.js
The solution is: 2
*/
