<!-- 产品小卡片 -->
<template>
    <div class="goods-item">
        <router-link class="images"  to="/">
            <!-- 别忘了前面要加 ：，才是动态的 -->
            <img :src="good.picture">
        </router-link>
        <div class="title ellipsis-2">{{ good.name }}</div>
        <div class="price">￥{{good.price}}</div>
        <div class="extra">
            <router-link to="/">
                <span class="xiangsi">找相似</span>
                <span class="gengduo">发现更多宝贝</span>
            </router-link>
        </div>

    </div>
</template>

<script>
export default{
    //props导入good
    props:{
        good:{
            type:Object,
            default:[]
        }
    }
}
</script>

<style lang="less" scoped>
.goods-item{
    position: relative;
    width: 200px;
    height: 300px;
    margin-bottom: 8px;
    overflow: hidden;//超出该元素边界的内容将被隐藏
    transition: all .5s;
    .images{
        width: 160px;
        height: 160px;
        margin: 0 auto;
        img{
        width: 160px;
        height: 160px;
    }
    }
    
    .title{
        font-size: 16px;
    }
    .price{
        color: @priceColor;
        font-size: 15px;
    }
    .extra{
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: @xtxColor;
        height: 85px;
        transform: translate3d(0,90px,0);
        transition: all .5s;
        
        .xiangsi{
            display: block;
            text-align:center;
            color: #fff;
            font-size: 16px;
            margin: 10px;
            padding: 5px 0;
            border-bottom: #fff 1px  solid;
        }
        .gengduo{
            display: block;
            text-align:center;
            color: #fff;
            font-size: 14px;
            margin: 10px;
        }

    }
    &:hover{
        border: 1px solid @xtxColor;
        .extra{
            transform: none;
        }
    }
}

</style>