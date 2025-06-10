//这个router文件中使用的都是后端方法，创建一个http://localhost:7788 服务器
//使用node.js语法


//得到本地运行的 Web API 服务器

//引入 Express 框架:这是一个 Node.js 的 Web 应用框架，用于快速搭建服务器和处理网络请求。
const express = require('express')
//引入刚刚创建的路由
const router = require('./router/index.js')
//创建服务器实例
const app=express();
//将路由挂载
app.use('/',router);
//让服务器监听 7788 端口，服务器在本地的 7788 端口上接收 HTTP 请求。
app.listen(7788,()=>{
    console.log('服务端启动成功')
    console.log('http://localhost:7788');
})
