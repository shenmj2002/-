<!-- 轮播图部分 -->
<template>
    <div>
        <!-- 全局组件 像router-link一样直接使用，不需要引入 -->
        <AppBanner :list="list"/>
    </div>
</template>

<script>
//组件内接受服务器数据的方法
import { ref } from 'vue';
import { getBanner } from '@/api/index';
export default {
    setup() {
        const list = ref([]);
        getBanner().then(res => {
            console.log(res);
            if (res.msg = '操作成功') {
                list.value = res.result;
            }
        }).catch(err => {
            console.log(err);

        })
        return {list}
    }
}


</script>
