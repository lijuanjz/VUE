export * from "./main";
export * from "./event";
export * from "./main1";
export * from "./event1";
export * from "./fileIO";
export * from "./router";
export * from "./server";
export * from "./server1";
export * from "./pipeFile";
export * from "./pipeFile2";
export * from "./writeFile";

//3.同时，我们会相应扩展 index.js，使得路由函数可以被注入到服务器中：
/*var server=require('./server1');
var router=require('./router');
server.start(router.route);*/
