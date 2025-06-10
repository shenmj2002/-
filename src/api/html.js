//储存网络请求对象axios

import axios from 'axios'
//创建axios实例instance
const instance=axios.create({
    timeout:5000
})
//请求拦截器
instance.interceptors.request.use(
    config=>{
        return config
    }
)
//响应拦截器
instance.interceptors.response.use(
    response=>{
        return response.data
    },
    error=>{
        return Promise.reject(error)
    }
)

export default instance
