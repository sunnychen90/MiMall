import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
// import env from './env'

//mock 开关
const mock = false;
if(mock){
  require('./mock/api');
}

/**
 * axios文档: https://www.kancloud.cn/yunye/axios/234845
 * axios 设置基础值,根据前端跨域方式做调整(CORS、JSONP 、代理Proxy)
 * 
 * Proxy方式(在vue.config.js中配置)：
 *  axios.defaults.baseURL = '/api'; 
 * 
 * CORS方式和JSONP的方式(在env.js中配置)：
 * 根据env.js中的环境变量，获得url的接口地址
 * axios.defaults.baseURL = env.baseURL;
 * 
 **/

// axios.defaults.baseURL = env.baseURL;

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;


//接口错误拦截
axios.interceptors.response.use(function(response) {
  let res = response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    //状态10,未登录，跳转到登录页面
    window.location.href = '/#/login';
  }else{
    //错误处理，先用alert弹窗，后期引入elment-ui的弹窗组件
    alert(res.msg);
  }
})

//接口请求拦截
axios.interceptors.request.use(function(config){
    return config;
})

Vue.use(VueAxios, axios);
Vue.use(VueLazyload,{
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
