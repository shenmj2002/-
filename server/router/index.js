//创建/test、/home/banner等路由

//引入express框架 ，require是node.js用来引入的关键字
const express = require('express');
//引入轮播图
const bannerDate=require('../data/banner.json')
//引入人气推荐
const hotDate=require('../data/hot.json')
//引入生鲜等产品
const productDate=require('../data/product.json')
//创建路由实例
const router = express.Router();


//测试接口  客户端向服务器发送请求
router.get('/test',(req,res)=>{//req请求对象 res响应对象
    res.send('测试成功');//send输出
})
//首页轮播图接口
router.get('/home/banner',(req,res)=>{
    res.send(bannerDate)
})
//人气推荐接口
router.get('/home/hot',(req,res)=>{
    res.send(hotDate)
})
//生鲜等产品接口
router.get('/home/product',(req,res)=>{
    res.send(productDate)
})

//module.exports是node.js用来导出的关键字
module.exports = router;