import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import App from './App.vue'


//axios文档:https://www.kancloud.cn/yunye/axios/234845
//axios 设置基础值,根据前端跨域方式做调整
axios.defaults.baseURL ='/api';
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
axios.interceptors.request.use(function(){
  
})

Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
