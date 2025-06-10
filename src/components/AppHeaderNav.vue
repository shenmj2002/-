<!-- 首页、居家生活等＋弹出层 -->
<template>
    <div class="app-header-nav">
        <ul>
            <!-- 首页 -->
            <li class="item">
                <router-link class="link" to='/'>首页</router-link>
            </li>
            <!-- 居家生活等 -->
            <li class="item" v-for="item in list" :key="item.id">
                <router-link class="link" :to="'/category/' + item.id">{{ item.name }}</router-link>
                <!-- 弹出层 -->
                <div class="layer">
                    <ul>
                        <li v-for="ele in item.subCateGroupList" :key=ele.id>
                            <a href="#">
                                <img :src="ele.categoryList[0].bannerUrl">
                                <div>{{ ele.name }}</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>


<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
    //从vuex仓库里提取category数据
    setup() {
        const store = useStore();
        const list = computed(() => {
            return store.state.category.cateList
        })

        return { list }
    }

}

</script>

<style lang="less">
.app-header-nav {
    ul {
        display: flex;
        padding: 20px 0 0 0;
        position: relative; //作为layer的父元素

        .item {

            //routerlink在这个链接的时候
            .router-link-exact-active {
                color: @xtxColor;
                border-bottom: 2px solid @xtxColor;
            }

            .link {
                padding: 5px 20px;
                font-weight: bold;

            }

            &:hover {
                .link {
                    color: @xtxColor;
                    border-bottom: 2px solid @xtxColor;

                }

                .layer {
                    opacity: 1;
                    height: 120px;
                }
            }

            .layer {
                height: 0;
                width: 1100px;
                background-color: #fff;
                margin: 7px 0;
                display: flex;
                position: absolute;
                top: 100%; // 让 layer 显示在父元素下方
                left: 0; // 让 layer 左对齐父元素
                opacity: 0;
                overflow: hidden;
                transition: all .5s;
                z-index: 999;

                ul {
                    width: 100%;
                    padding: 0;
                    margin: 20px 0;

                    li {
                        a {
                            width: 100%;
                            padding: 0;
                            margin: 0 30px;
                            border-bottom: 0;
                            text-align: center;

                            &:hover {
                                color: @xtxColor;
                            }

                            img {
                                width: 50px;
                                height: 50px;
                                margin: 0 25px 0 0;
                            }
                        }

                    }
                }

            }



        }
    }
}
</style>