<!-- 新鲜好物部分 -->
<template>
    <div class="home-new">
        <!-- 里面有插槽，所以用双标签 -->
        <MyPanel maintitle="新鲜好物" subtitle="新鲜出炉 品质靠谱">
            <!-- 使用右侧插槽 -->
            <template #right>
                <AppMore path="/" />
            </template>
            <!-- 使用默认插槽 -->
            <ul class="goods-list" v-if="!loading">
                <li v-for="item in goods" :key="item.id">
                    <router-link to="/">
                        <img :src="item.listPicUrl">
                        <div class="title ellipsis ">{{ item.name }}</div>
                        <div class="price">￥{{ item.retailPrice }} <del>￥{{ item.counterPrice }}</del></div>
                    </router-link>
                </li>
            </ul>
            <!-- 自己的骨架屏 -->
            <HomeNewSkeleton v-else/>

            <!-- element骨架屏 -->
            <!-- <div class="goods-list"> -->
            <!--  loading这里的loading是true就显示，是false就不显示-->
            <!-- <el-skeleton v-for="i in 4"  :key="i"  style="width: 265px" :loading="loading" animated>
                    <template #template>
                        <el-skeleton-item variant="image" style="width: 265px; height: 265px" />
                        <div style="padding: 14px">
                            <el-skeleton-item variant="h3" style="width: 50%" />
                            <div style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            ">
                                <el-skeleton-item variant="text" style="margin-right: 16px" />
                                <el-skeleton-item variant="text" style="width: 30%" />
                            </div>
                        </div>
                    </template>
                    
                </el-skeleton>
            </div> -->


            
        </MyPanel>
    </div>
</template>

<script>
import { getNew } from '@/api/index';
import { ref } from 'vue';
//产品模板
import MyPanel from "@/components/MyPanel.vue"
//四个产品的骨架屏
import HomeNewSkeleton from "@/components/Skeleton/HomeNewSkeleton.vue"
export default {
    components: {
        MyPanel,
        HomeNewSkeleton
    },
    setup() {
        const goods = ref([]);
        const loading = ref(true)
        getNew().then(res => {
            console.log(res);
            if (res.code = 200) {
                goods.value = res.data.result.slice(0, 4);//slice:截取数组的前4个
                loading.value = false;
            }
        }).catch(err => {
            console.log(err);
        })

        return { goods, loading }
    }
}
</script>




<style lang="less" scoped>
.home-new {
    .goods-list {
        display: flex;
        flex-direction: row;
        justify-content: space-between; //每个子元素之间留一点空隙
        margin-bottom: 30px;

        li {
            .hoverShadow();
            width: 265px;
            height: 365px;
            background-color: #f5f5f5;

            img {
                width: 265px;
                height: 265px;
            }

            .title {
                padding: 10px 25px;
                font-size: 18px;
                text-align: center;
            }

            .price {
                text-align: center;
                color: @priceColor;
                font-size: 16px;

                del {
                    color: #666;
                }
            }
        }
    }
}
</style>