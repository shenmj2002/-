<!-- 查看全部小组件 -->
<template>
    <router-link :to="path" class="more">
        <span>查看全部 ></span>
    </router-link>
</template>


<script>
// props导入path
export default{
    name:"AppMore",
    props:{
        path:{
            type:String,
            default:'/'
        }
    }
}
</script>

<style lang="less" scoped>
.more{
    span{
        font-size: 16px;
        color: #999;
    }
}
</style>