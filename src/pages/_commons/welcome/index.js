/**
 * 欢迎页
 * @authors AndyPan (pye-mail@163.com)
 * @date    2019年8月21日14:04:05
 */

let render = {
  data () {
    return {}
  },
  methods: {
    updateState () {
      // this.$store.commit('update')
      this.$store.dispatch('update', {dispatch: 'test'})
    }
  },
  components: {}
}

export {
  render
}
