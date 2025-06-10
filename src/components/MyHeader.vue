<!-- logo＋搜索框＋购物车 -->+<!-- 首页、居家生活等＋弹出层 -->
<template>
    <!-- 版心提取 -->
    <div class="my-header w">
        <!-- 上部区域 -->
        <div class="header-top">
            <!-- logo -->
            <div class="logo">
                <!-- "/" 一般代表网站的根目录 -->
                <a href="/"></a>
            </div>
            <!-- 搜索 -->
            <div class="center">
                <div class="center-serch">
                    <input type="text">
                    <button>搜索</button>
                </div>
                <div class="center-navs">
                    <ul>
                        <li><a href="#">湿巾</a></li>
                        <li><a href="#">毛巾</a></li>
                        <li><a href="#">咖啡</a></li>
                        <li><a href="#">睡衣</a></li>
                        <li><a href="#">内裤</a></li>
                        <li><a href="#">超级小金蛋</a></li>
                        <li><a href="#">杯子</a></li>
                    </ul>
                </div>
            </div>
            <!-- 购物车 -->
            <div class="cart">
                <a href="#">
                    <i class="iconfont icon-gouwuche">购物车</i>
                    <span>2</span>
                </a>
            </div>
        </div>
        <!-- 下部区域 -->
        <AppHeaderNav/>
    </div>
</template>

<script>
import AppHeaderNav from './AppHeaderNav.vue';
import { useStore } from 'vuex';
export default{
    components:{
        AppHeaderNav
    },
    //在AppHeaderNav的上一级将数据传入vuex仓库
    setup(props){
        const store=useStore();
        //触发actions:getAllCategory
        store.dispatch('category/getAllCategory')
    }

}


</script>

<style lang="less" scoped>
.my-header {
    height: 120px;
    background-color: #fff;
    padding: 25px 0 0 0;

    .header-top {
        display: flex;

        .logo {
            width: 330px;
            height: 60px;

            a {
                display: block;
                width: 230px;
                height: 60px;
                background-image: url(../assets/images/logo.webp);
                background-position: 0 -298px;
                background-repeat: no-repeat
            }

        }

        ;

        .center {
            flex: 1;

            .center-serch {
                width: 540px;
                height: 35px;

                input {
                    width: 440px;
                    height: 35px;
                    border: 1px solid @xtxColor;
                    box-sizing: border-box; //元素的宽度和高度包含内容区、内边距和边框
                    border-radius: 20px 0 0 20px;
                    padding: 15px;

                }

                button {
                    float: right;
                    width: 100px;
                    border-radius: 0 20px 20px 0;
                    height: 35px;
                    background-color: @xtxColor;
                    color: #fff;
                    border: 0;
                    font-size: 16px;
                    cursor: pointer;// 鼠标放上变成小手
                }

            }

            .center-navs {
                ul {
                    width: 540px;
                    height: 32px;
                    line-height: 32px;
                    display: flex;

                    li {
                        a {
                            padding: 0 12px;
                            font-size: 12px;
                            &:hover {
                                color: @xtxColor;
                            }
                        }
                    }

                    li+li {
                        a {
                            border-left: 1px solid #ccc;
                            
                        }
                    }
                }
            }
        }

        ;

        .cart {
            box-sizing: border-box;
            height: 35px;
            width: 150px ;
            line-height: 35px;
            border-radius:20px ;
            border:1px solid @xtxColor ;
            text-align: center  ;
            i{
                font-size: 14px;
                color: @xtxColor;
            }
            span{
                background-color: red;
                box-sizing: border-box;
                color: #fff;
                height: 10px;
                line-height: 10px;
                padding:2px 5px ;
                border-radius: 50%;
                margin: 0 0 0 10px;
                font-size: 12px;

            }


        }
    }

}
</style>