const fs=require('fs');
const child_process=require('child_process');

//21.1 exec() 方法:使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回。
/*
for (var i=0;i<3;i++){
    var workerProcess=child_process.exec('node support.js '+i,function (error,stdout,stderr) {
        if (error){
            console.log(error.stack);
            console.log('Error code:'+error.code);
            console.log('Signal received:'+error.signal);
        }
        console.log('stdout:'+stdout);
        console.log('stderr:'+stderr);
    });

    workerProcess.on('exit',function (code) {
        console.log('子进程已退出，退出码：'+code);
    });
}

执行以上代码，输出结果为：
$ node master.js
子进程已退出，退出码 0
stdout: 进程 1 执行。
stderr:
子进程已退出，退出码 0
stdout: 进程 0 执行。
stderr:
子进程已退出，退出码 0
stdout: 进程 2 执行。
stderr:
*/

//21.2 spawn() 方法:
// child_process.spawn 使用指定的命令行参数创建新进程，
/*for (var i=0;i<3;i++){
    var workerProcess=child_process.spawn('node',['support.js',i]);
    workerProcess.stdout.on('data',function (data) {
        console.log('stdout:'+data);
    });

    workerProcess.stderr.on('data',function (data) {
        console.log('stderr:'+data);
    });

    workerProcess.on('close',function (code) {
        console.log('子进程已退出，退出码 '+code);
    })
}

执行以上代码，输出结果为：
$ node master.js
stdout: 进程 0 执行。
子进程已退出，退出码 0
stdout: 进程 1 执行。
子进程已退出，退出码 0
stdout: 进程 2 执行。
子进程已退出，退出码 0
*/

//21.3、fork 方法：是 spawn() 方法的特殊形式，用于创建进程
for (var i=0;i<3;i++){
    var work_process=child_process.fork('support.js',[i]);
        work_process.on('close',function (code) {
        console.log('子进程已退出，退出码 '+code);
    })
}

/*
执行以上代码，输出结果为：
$ node master.js
进程 0 执行。
子进程已退出，退出码 0
进程 1 执行。
子进程已退出，退出码 0
进程 2 执行。
子进程已退出，退出码 0*/
