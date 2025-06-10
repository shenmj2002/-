<!-- 轮播图模板组件-->
<template>
  <el-carousel height="500px">
    <el-carousel-item v-for="item in list" :key="item.id">
      <img :src="item.imgUrl">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
// props导入list
export default {
  name: "AppBanner",
  props: {
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style scoped></style>