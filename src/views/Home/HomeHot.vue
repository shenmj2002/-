<!-- 人气推荐部分 -->
<template>
    <div class="home-hot">
        <!-- 里面有插槽，所以用双标签 -->
        <MyPanel  maintitle="人气推荐" subtitle="人气爆款 不容错过">
            <!-- 使用默认插槽 ,不使用右边插槽-->
            <ul class="goods-list">
                <li v-for="item in goods" :key="item.id">
                    <router-link to="/">
                        <img :src="item.listPicUrl">
                        <div class="title ellipsis-2 ">{{item.name}}</div>
                    </router-link>
                </li>
            </ul>
        </MyPanel>
    </div>
</template>

<script>
import { getHot } from '@/api/index';
import { ref } from 'vue';
import MyPanel from "@/components/MyPanel.vue"
export default {
    components: {
        MyPanel
    },
    //使用网络请求方法
    setup(){
        const goods=ref([]);
        getHot().then(res => {
            console.log(res);
            if (res.code = 200) {
                goods.value = res.result.slice(0,4);//slice:截取数组的前4个
            }
        }).catch(err => {
            console.log(err);
        })
        return {goods}
    }
}
</script>
<style lang="less" scoped>
.home-hot{
    .goods-list{
        display: flex;
        flex-direction: row;
        justify-content: space-between;//每个子元素之间留一点空隙
        margin-bottom: 30px;
        li{
            .hoverShadow();
            width: 265px;
            height: 365px;
            background-color: #f5f5f5;
            img{
                width: 265px;
                height:265px;
            }
            .title{
                padding: 10px 25px;
                font-size: 18px;
                text-align: center;
            }
            .price{
                text-align: center;
                color: @priceColor;
                font-size: 16px;
                del{
                    color: #666;
                }
            }
        }
    }
}
</style>