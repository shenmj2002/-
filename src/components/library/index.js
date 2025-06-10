import AppBanner from "./AppBanner.vue"
import AppMore from "./AppMore.vue"
import AppSkeleton from "./AppSkeleton.vue"
export default {
    install: (app) => {
        app.component(AppBanner.name, AppBanner)//将轮播图注册为全局组件 
        app.component(AppMore.name, AppMore)//将查看全部注册为全局组件 
        app.component(AppSkeleton.name, AppSkeleton)//将骨架屏方块为全局组件 
    }
}