<template>
    <div class="home-product">
        <!-- 从居家开始列出来  重复谁，给谁加v-for-->
        <MyPanel v-for="item in goods" :key="item.id" :maintitle="item.name" subtitle="">

            <!-- 使用右侧插槽 -->
            <template #right>
                <div class="sub">
                    <router-link v-for="sub in item.children" to="/">{{sub.name}}</router-link>
                </div>
                <!-- 使用 查看更多 全局组件 -->
                <AppMore />
            </template>

            <!-- 使用默认插槽 -->
            <div class="goods">
                <!-- 左侧图片 -->
                <router-link class="left"  to="/">
                    <img :src="item.picture">
                </router-link>
                <!-- 右侧部分 --> 
                <div class="right">
                    <ul class="goods-list">
                        <li v-for="good in item.goods" :key="good.id">
                            <MyGoodsItem :good="good"/>
                        </li>
                    </ul>
                </div>

            </div>


        </MyPanel>
    </div>
</template>

<script>
//产品大模板
import MyPanel from "@/components/MyPanel.vue";
//产品小卡片
import MyGoodsItem from "@/components/MyGoodsItem.vue"
//网络请求方法
import { getProduct } from '@/api/index';
import { ref } from 'vue';
export default{
    components:{
        MyPanel,
        MyGoodsItem
    },
    setup(){
        const goods=ref([]);
        const getNewList=async()=>{
            try{
                const res=await getProduct();
                console.log(res);
                if (res.msg==="操作成功") {
                    goods.value=res.result
                }
            }catch(err){
                console.log(err);
            }};
    getNewList();
    return{goods}
        
    }
}

</script>

<style lang="less" scoped>
.home-product{
    background-color: #fff;
    padding-bottom: 40px;
    .sub{
        a{
            padding: 2px 15px;
            border-radius:4px ;
            font-size: 16px;
            &:hover{
                background-color: @xtxColor;
                color: #fff;
            }
        }
        margin-right: 60px;
    }
    .goods{
        height: 610px;
        display: flex;
        .left{
            width: 240px;
            margin-right: 10px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .right{
            flex: 1;//flex: 1 会让 .right 元素按比例分配父容器 .goods 剩余的空间 
            .goods-list{
                display: flex;
                flex-wrap: wrap;//允许盒子里的子元素换行
                justify-content: space-between;//盒子内子元素在水平方向两端对齐
            }
            
        }
    }
}


</style>