<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// 引入自定义模块加载
require('@/configs/module')
// axios请求拦截和自定义Vue属性
require('@/services/axios.api')

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
