<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage'
export default {
  name: 'app',
  components: {},
  data() {
    return {
      res: {}
    }
  },
  mounted() {
    // storage.setItem('sex', 1,'user');

    //mock 请求本地json文件
    // this.axios.get('/mock/user/login.json').then((res) => {
    //     this.res = res;
    // })

    //本地集成mockjs 实现mock数据
    this.axios.get('/user/login').then((res) => {
        this.res = res;
    })
  }
}

</script>


<style>
@import './assets/scss/reset.scss';
</style>
