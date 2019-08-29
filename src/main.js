// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { utils } from './utils'
// 兼容IE Promise(安装、导入并调用即可)
import Promise from 'es6-promise'
Promise.polyfill()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

for (let key in utils) {
  Vue.prototype[key] = utils[key]
}
