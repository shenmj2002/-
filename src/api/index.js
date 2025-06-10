import axios from './html'
import path from "./path"

//存放网络请求方法 getCategoryList() :获取首页、居家生活等＋弹出层
export const getCategoryList=()=>axios.get(path.CategoryUrl)//已经完成跨域解决方案了，所以只写后一半
//存放网络请求方法 getBanner()  :获取首页轮播图
export const getBanner=()=>axios.get(path.bannerUrl)
//存放网络请求方法 getNew():新鲜好物
export const getNew=()=>axios.get(path.findNew)
//存放网络请求方法 getHot():人气推荐
export const getHot=()=>axios.get(path.findHot)
//存放网络请求方法 getProduct():生鲜等产品
export const getProduct=()=>axios.get(path.findProduct)