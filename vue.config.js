module.exports = {
  devServer: {
    proxy: {
        '/api': {
            target: 'http://localhost:4000', //API服务器的地址
            changeOrigin: true, // 虚拟的站点需要更管origin
            pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
                '^/api': ''
            }
        }
    },
  }
}