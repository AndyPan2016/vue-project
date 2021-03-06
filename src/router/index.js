import Vue from 'vue'
import Router from 'vue-router'
let IndexPage = PagesLayout.use(PagesLayout.index)
let NotFound = PagesCommons.use(PagesCommons['404'])
// let Welcome = PagesCommons.use(PagesCommons.welcome)

Vue.use(Router)

// 路由配置
const routes = [
  // 首页&跟目录页面路由
  {
    path: '/',
    name: 'IndexPage',
    component: IndexPage,
    children: [
      // 路由嵌套测试
      { path: '/abc', component: NotFound }
    ]
  },
  {
    path: PagesComponentDemo.route(':type'),
    name: 'IndexPageByType',
    component: IndexPage
  },
  // 404
  { path: '*', component: NotFound }
]

// 创建router对路由进行管理，由构造函数 new Router()创建，接收routes参数
const router = new Router({
  routes: routes
})

// 路由拦截器
router.beforeEach((to, from, next) => {
  next()
  // if (localStorage.getItem('token') || to.name === 'login') {
  //   // 如果token有值，或者是去登录页，就继续执行
  //   next()
  // } else {
  //   // 否则，去主页或登录页
  //   next({path: 'login'})
  // }
})

export default router
