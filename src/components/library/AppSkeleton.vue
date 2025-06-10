<!-- 骨架屏 每个方块小组件-->
<template>
    <div class="skeleton" :style="{width,height,background:backgroundcolor}">

    </div>
</template>

<script>
export default{
    name:"AppSkeleton",
    props:{
        width:{
            type:String,
            default:'100px'
        },
        height:{
            type:String,
            default:'30px'
        },
        backgroundcolor:{
            type:String,
            default:'#ddd'
        }
    }
}
</script>

<style lang="less" scoped>
.skeleton{
    height: 30px;
    width: 100px;
    background-color: #ccc;
}
</style>