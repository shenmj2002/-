<!-- 最上方黑条 -->
<template>
    <div class="app-top-nav">
        <div class="w">
            <ul>
                <!-- href="javascript:;"不进行跳转 -->
                <template v-if="userinfo.token">
                    <li><a href="javascript:;">{{userinfo.username}}</a></li>
                    <li><a href="javascript:;">退出登录</a></li>
                </template>
                <li v-else><a href="javascript:;">登录/注册</a></li>

                <li><a href="javascript:;">我的订单</a></li>
                <li><a href="javascript:;">会员</a></li>
                <li><a href="javascript:;">甄选家</a></li>
                <li><a href="javascript:;">企业采购</a></li>
                <li><a href="javascript:;">客户服务</a></li>
                <li><a href="javascript:;"><i class="iconfont icon-shouji1"></i>App</a></li>
            </ul>
        </div>
    </div>

</template>

<script>
//从vuex仓库里提取user数据
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const userinfo = computed(() => {return store.state.user.userinfo});
    return {
      userinfo
    };
  }
}
    
</script>


<!-- lang="less":表明你要在这个 <style> 标签中使用 Less 语言来编写样式 -->
<style lang="less" scoped>
.app-top-nav {
    background-color: #333;
    ul{
        display: flex;
        //当 height 和 line-height 的值相等时，实现单行文本在元素内的垂直居中效果
        height: 40px;
        line-height: 40px;//每行文本所占据的垂直空间大小
        justify-content: flex-end;
        li{
            
            a{
                font-size: 12px;
                padding: 0 15px;
                color: #ccc;
                //:hover 用于定义当鼠标悬停在元素上时该元素的样式
                //Less 里，& 是一个特殊符号，它代表当前选择器的父级选择器.这里选择的是a标签
                &:hover{
                    color: #fff;
                }
   
            }
        }
        //相邻兄弟元素：除第一个列表项之外的列表项的链接添加左边框
        //border-left
        li + li{
            a{
                border-left:1px solid #ccc
            }
        }
    }
}
</style>