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
                <router-link class="nav-item" :to="pageRoutes.pageCheckBox">选择框</router-link>
                <router-link class="nav-item" :to="pageRoutes.pagePopup">弹出框</router-link>
                <router-link class="nav-item" :to="pageRoutes.pageSwitchBox">SwitchBox</router-link>
                <router-link class="nav-item" :to="pageRoutes.pageTabs">选项卡</router-link>
            </div>
            <div class="page-body-cont">
                <!-- 自定义动态组件渲染使用 -->
                <component v-bind:is="currentComponent"></component>
                <!-- 路由嵌套使用 -->
                <router-view></router-view>
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
