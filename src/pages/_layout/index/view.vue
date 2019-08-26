<!--
 * 页面视图 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-06-08 10:40:52
-->

<template>
    <div class="page-main">
        <Header />
        <div class="page-cont-body">
            <div class="page-body-nav active">
                <router-link class="nav-item" :to="pageRoutes.pageA">Page A</router-link>
                <router-link class="nav-item" :to="pageRoutes.pageB">Page B</router-link>
            </div>
            <div class="page-body-cont">
                <component v-bind:is="currentComponent"></component>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import {render} from './index.js'
export default render
</script>
<style lang="less">
@import './view.less';
</style>
