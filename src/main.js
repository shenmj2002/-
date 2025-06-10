import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入初始化样式 @:路径别名，这里指向src
import "@/assets/styles/base.css"
//完整引入element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//导入所有的全局组件
import myelement from "@/components/library"

createApp(App).use(store).use(router).use(ElementPlus).use(myelement).mount('#app')
