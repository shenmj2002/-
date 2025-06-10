<!-- 产品大框架模板:从新鲜好物到最后都是用这个模板 -->
<template>
    <div class="my-panel w">
        <!-- 头部区域 -->
        <div class="header">
            <h3>{{maintitle}}<small>{{subtitle}}</small></h3>
            <!-- 插槽 -->
            <slot name="right"/>
        </div>
        <!-- 默认插槽 -->
        <slot />
    </div>


</template>

<script>
    export default{
        //props传递数据
        props:{
            maintitle:{
                type:String,
                default:"主标题"
            },
            subtitle:{
                type:String,
                default:"副标题"
            },
        }
    }
</script>

<style lang="less" scoped>
.my-panel{
    background-color: #fff;
    .header{
        padding: 40px 0;
        display: flex;
        align-items: flex-end;
        h3{
            flex:1;
            font-size: 30px;
            text-align: left;
            small{
                font-size: 16px;
                color: #999;
                margin-left: 10px;
            }
        }
    }
}
</style>