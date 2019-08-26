/**
 * 欢迎页
 * @authors AndyPan (pye-mail@163.com)
 * @date    2019年8月21日14:04:05
 */

let Checkbox = Components.use(Components.checkbox)

let render = {
  data () {
    return {
    }
  },
  methods: {
    onClick (e, status) {
      console.info(status)
    }
  },
  components: {
    Checkbox
  }
}

export {
  render
}
