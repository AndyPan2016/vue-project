<!--
 * 页面视图 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date    2019年8月21日14:04:13
-->

<template>
    <div class="welcome">
      Welcome
      <!-- {{this.$store.state.testModule.test}}
      ({{this.$store.getters.getStateTest}}) -->
      <button @click="updateState">修改状态</button>
    </div>
</template>

<script>
import {render} from './index.js'
export default render
</script>
<style lang="less">
@import './view.less';
</style>
