//基于 Node.js 环境的 JavaScript 代码
const path = require("path")
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname, "./src/assets/styles/variables.less"),
        path.join(__dirname, "./src/assets/styles/mixins.less")
      ]
    }
  },
  //跨域请求
  //当前端代码请求以/api开头的 URL 时,转发到目标服务器 → http://you.163.com/list
  devServer: {
    proxy: {
      '/api': {
        target: 'http://you.163.com',//网易新闻接口、服务器
        ws: true,
        changeOrigin: true,
        pathRewrite: {//重写路径，移除请求路径中的/api前缀
          '^/api': ''
        }
      },
      '/foo': {
        target: 'http://localhost:7788',//本地接口、服务器
        ws: true,
        changeOrigin: true,
        pathRewrite: {//重写路径
          '^/foo': ''
        }
      },
    },
  }
})
