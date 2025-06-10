<template>
    <!-- 顶部通栏 -->
    <AppTopNav/>
    <!-- 头部区域 -->
    <MyHeader/>
    <!--主体区域 -->
    <div >
        <!-- 二级路由 -->
        <router-view></router-view>
    </div>    
    <!-- 底部区域 -->
    <MyFooter/>
</template>

<script>
import AppTopNav from "@/components/AppTopNav.vue"
import MyHeader from "@/components/MyHeader.vue";
import MyFooter from "@/components/MyFooter.vue";


export default{
    components:{
        AppTopNav,
        MyHeader,
        MyFooter
    }
}
</script>