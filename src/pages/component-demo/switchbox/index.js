/**
 * 测试页面 JavaScript
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-06-08 11:55:32
 */

let SwitchBox = Components.use(Components.switchbox)

let render = {
  data () {
    return { }
  },
  methods: {
    onSwitch (e, status) {
      console.info(status)
    }
  },
  components: {
    SwitchBox
  }
}

export {
  render
}
