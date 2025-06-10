const base={
    baseurl:"https://you.163.com",//在这里没有什么作用，因为跨域请求已经把前半部分加上了
    
    CategoryUrl:"/api/xhr/globalinfo/queryTop.json",//首页、居家生活等＋弹出层
    bannerUrl:"/foo/home/banner",//轮播图
    findNew: '/api/xhr/item/getNewItem.json',//首页主体--新鲜好物
    findHot:'/foo/home/hot', //首页-人气推荐
    findProduct:'/foo/home/product', //首页-生鲜等产品

}
export default base