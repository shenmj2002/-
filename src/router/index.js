import {createRouter,createWebHashHistory } from "vue-router"
import Layout from "@/views/Layout.vue"//静态导入
import Home from "@/views/Home/Home.vue"
import Category from "@/views/Category/Category.vue"

const Login=()=>import("@/views/Login.vue")//动态导入

const routes = [
  {
    path:"/",
    name:"Layout",
    component:Layout,
    children:[
      {
        path:"/",
        name:"Home",
        component:Home
      },
      {
        path:"/Category/:id",
        name:"Category",
        component:Category
      }
    ]
  },
  {
    path:"/login",
    name:"Login",
    component:Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
