/**
 * env.js 接口环境 封装 设置
 * **/

let baseURL;

/**
 * 根据不同的环境输出，url地址：生产环境，开发环境，测试环境，预发布环境等等
 * 在package.json中配置--mode  是注入参数（webpack的知识点）
 * 
 * 获取参数：process.env.NODE_ENV,是获取nodejs进程当前的环境变量
 * **/
switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = 'http://dev-mall-pre.springboot.cn/api';
        break;
    case 'production':
        baseURL = 'http://prod-mall-pre.springboot.cn/api';
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api';
        break;

    default:
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
}



export default {
    baseURL
}