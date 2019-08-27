<!--
 * 页面视图 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-06-08 10:40:52
-->

<template>
    <div class="page-main">
      <Checkbox text="复选框" :onClick="onClick" />
      <Checkbox type="radio" :onClick="onClick" name="radioGroup" />
      <Checkbox type="radio" :onClick="onClick" name="radioGroup" />
      <Checkbox type="radio" :onClick="onClick" :checked="true" text="默认值" name="radioGroup" />
    </div>
</template>

<script>
import {render} from './index.js'
export default render
</script>
<style lang="less">
@import './view.less';
</style>
