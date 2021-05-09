/**
 *  使用代理的方式是最安全的
 *  别人在浏览器，根本就看不到，你到底请求的地址是什么
 *  target: "https://www.baidu.com", //代理地址，这里以百度为例子
 *  如果使用的 是测试环境test: 直接修改 target:'http://test-xxx.com'地址
 **/

module.exports = {
    //接口代理
    devServer:{
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: "https://www.baidu.com", 
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }

    }
}
