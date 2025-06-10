<template>
  <div class="category w">
    <!-- 面包屑:首页>宠物生活 -->
    <div class="breadcremb">
      <!-- element-plus -->
      <el-breadcrumb separator="/"><!-- separator:分隔符 -->
        <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{category.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- 轮播图 -->
    <AppBanner :list="list" />

    <!-- 全部分类 -->
    <div class="sub-list">
      <h3>全部分类</h3>
      <ul>
        <li v-for="item in category.subCateList" :key="item">
          <router-link to="#">
            <img :src="item.bannerUrl">
            <div class="name">{{item.name}}</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>


</template>
<script>
//组件内接受服务器数据的方法
import { ref } from 'vue';
import { getBanner } from '@/api/index';
//从仓库中导出和现在路由匹配的数据
import { useStore } from 'vuex';
import { useRoute } from "vue-router";
import { computed } from 'vue';
export default {
  setup() {
    //轮播图
    const list = ref([]);
    getBanner().then(res => {
      console.log(res);
      if (res.msg = '操作成功') {
        list.value = res.result;
      }
    }).catch(err => {
      console.log(err);
    })

    //从仓库中提取全部分类数据
    const store = useStore();
    
    //获取路由导航对象
    const route = useRoute();

    //查找跟路由中 id 相等的分类
    const category=computed(()=>{
      let cate={}
      const item=store.state.category.cateList.find(item=>{//遍历cateList中的每一个元素item
        return item.id==route.params.id//当item.id==route.params.id时返回
      })
      if(item){
        cate=item;
      }
      return cate ;
    })
    return { list ,category }
  }
}

</script>

<style lang="less" scoped>
.category {
  padding: 20px;

  .breadcremb {
    padding-left: 20px;
    padding-bottom: 30px;
  }

  .sub-list {
    h3 {
      font-size: 32px;
      text-align: center;
      font-weight: normal;
      padding: 40px 0;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0 20px;

      li {
        width: 140px;
        height: 160px;
        text-align: center;

        img {
          width: 100px;
          height: 100px;
        }

        .name {
          &:hover {
            color: @xtxColor;
          }
        }

      }
    }
  }
}
</style>