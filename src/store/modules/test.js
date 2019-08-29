/**
 * store模块
 * @author AndyPan
 * @createdate 2019年8月29日14:35:45
 * @lastupdatedate 2019年8月29日14:35:48
 * @remark
 */

export const testModule = {
  state: {
    test: 'test module'
  },
  getters: {
    getStateTest (state) {
      return state.test + '--->test'
    }
  },
  mutations: {
    update (state, params) {
      state.test = 'update state' + JSON.stringify(params)
    }
  },
  actions: {
    update (context, params) {
      context.commit('update', params)
    }
  }
}
