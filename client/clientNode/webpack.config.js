const path = require('path') // 处理绝对路径
module.exports = {
  entry: path.join(__dirname, '/src/index.js'), // 入口文件
  output: {
    path: path.join(__dirname, '/dist'), //打包后的文件存放的地方
    filename: 'main.js' //打包后输出文件的文件名
  },
  devServer:{
    contentBase: path.join(__dirname, "dist"),
    hot: true,
    port: '8080',
    inline: true,
    open: true,
    overlay: true,
    proxy: {
      '/': {
        target: 'http://127.0.0.1:8888', 
        changeOrigin: true,  
        //自動在target前面增加一個前綴/testAxios
        // pathRewrite: {
        //   '^/testAxios': ''
        // }
      }
    }
  }
}

