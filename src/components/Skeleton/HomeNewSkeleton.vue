<!-- 4个产品骨架屏 -->
<template>
    <div>
        <ul class="goods-list">
            <li class="item" v-for="i in 4" :key="i">
                <!-- 图片 -->
                <AppSkeleton width="265px" height="265px" />
                <!-- 名称 -->
                <AppSkeleton width="265px" height="100px" backgroundcolor="#999" />
            </li>
        </ul>
        
    </div>
</template>

<style lang="less" scoped>
.goods-list {
        display: flex;
        flex-direction: row;
        justify-content: space-between; //每个子元素之间留一点空隙
        margin-bottom: 30px;
        li {
            width: 265px;
            height: 365px;
    }}
</style>

