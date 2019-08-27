/**
 * 选择框 JavaScript
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-06-08 11:55:32
 */

let Checkbox = Components.use(Components.checkbox)

let render = {
  data () {
    return { }
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
