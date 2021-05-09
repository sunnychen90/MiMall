module.exports = {
    //接口代理
    devServer:{
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: "https://www.baidu.com", //代理地址，这里以百度为例子
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }

    }
}
/** 
 *  使用代理的方式是最安全的
 *  别人在浏览器，根本就看不到，你到底请求的地址是什么 
 * 
 **/