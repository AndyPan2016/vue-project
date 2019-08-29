/**
 * 创建vuex实例
 * @author AndyPan
 * @createdate 2019年8月29日11:21:38
 * @lastupdatedate 2019年8月29日11:21:46
 * @remark
 */

import Vue from 'vue'
import Vuex from 'vuex'

let { testModule } = StoreModules.require(StoreModules.test)

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    testModule: testModule
  }
})

export default store
