/**
 * 首页业务逻辑
 * @authors AndyPan (pye-mail@163.com)
 * @date    2019年8月21日13:53:08
 */

let Header = PagesCommons.use(PagesCommons.header)
let Footer = PagesCommons.use(PagesCommons.footer)
let Welcome = PagesCommons.use(PagesCommons.welcome)
let {test1, test2} = Utils.use(Utils.test)

let render = {
  data () {
    return {
      currentComponent: Welcome,
      pageRoutes: {
        pageA: { path: Pages.route('a') },
        pageB: { path: Pages.route('b') }
      }
    }
  },
  methods: {
    renderComponent () {
      let type = this.$route.params['type']
      this.currentComponent = type ? Pages.use(type) : Welcome
    }
  },
  components: {
    Header,
    Footer
  },
  watch: {
    '$route' () {
      this.renderComponent()
    }
  },
  created () {
    this.renderComponent()
    console.info(test1)
    console.info(test2)
  }
}

export {
  render
}
