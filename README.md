# vue-project

> A Vue.js project

## Build Setup（构建体制）

``` bash
# install dependencies(安装依赖项)
npm install

# serve with hot reload at localhost:8080(运行开发环境 热更新服务：localhost:8080)
npm run dev

# build for production with minification(生产构建压缩文件)
npm run build

# build for production and view the bundle analyzer report(生产构建并查看Bundle Analyzer报告)
npm run build --report

# run unit tests(unit测试)
npm run unit

# run e2e tests(e2e测试)
npm run e2e

# run all tests(所有测试)
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Project Structure（项目结构）
### 项目采用vue-cli构建而成，并根据实际情况做了修改和调整，项目目录主要由脚手架生成和自己创建两部分组成，下面主要介绍自己创建部分，具体结构如下：
``` base
[project-name]
├── build                                      项目构建时的配置,一般我们不需要管(脚手架生成)
├── config                                     项目配置,一般我们不需要管(脚手架生成)
├── dist                                       build目录(待发布的项目文件)
├── node_modules                               项目的npm包
├── src                                        项目开发目录，我们的代码都在这里面写（以下的目录将一一介绍）
│   ├── assets                                 静态资源存放目录（包括全局和第三方的）
│   │   ├── css                                样式文件目录
│   │   ├── fonts                              字体文件目录
│   │   ├── images                             图片文件目录
│   │   ├── less                               预处理样式文件目录
│   │   │   ├── commons                        公共预处理样式文件目录
│   │   │   │   ├── _animate.less              动画预处理样式文件
│   │   │   │   ├── _mixins.less               预处理样式通用函数文件
│   │   │   │   ├── _normalize.less            全局重置样式文件
│   │   │   │   ├── _variables.less            全局变量文件
│   │   │   └── commons.less                   全局公共预处理样式文件
│   │   └── scripts                            脚本文件目录
│   ├── components                             项目通用组件目录
│   │   ├── [component-name]                   组件名称
│   │   │   ├── index.js                       组件js文件
│   │   │   ├── view.less                      组件样式文件
│   │   │   └── view.vue                       组件视图文件
│   ├── configs                                开发配置目录(主要包含了我们开发中的配置、设置、状态等)
│   │   ├── index.js                           配置主文件，包含了状态和语言的配置，以及API接口请求的相关配置
│   │   ├── lang.js                            通用文本文字配置
│   │   ├── module.js                          重构模块化配置，具体详见该文件内部描述
│   │   └── status.js                          通过状态配置
│   ├── pages                                  项目页面目录
│   │   ├── _commons                           公共页面(视图)目录
│   │   │   ├── [commons-block-name]           公共块(视图)名称
│   │   │   │   ├── index.js                   公共块(视图)js文件
│   │   │   │   ├── view.less                  公共块(视图)样式文件
│   │   │   │   └── view.vue                   公共块(视图)文件
│   │   ├── _layout                            通用布局目录(页面采用vue的component式布局，可以将布局结构一致，内容不一致的页面统一采用相同布局)
│   │   │   ├── [layout-name]                  布局名称
│   │   │   │   ├── index.js                   布局js文件
│   │   │   │   ├── view.less                  布局样式文件
│   │   │   │   └── view.vue                   布局视图文件
│   │   ├── [page-name]                        (普通)页面名称
│   │   │   ├── index.js                       页面js文件
│   │   │   ├── view.less                      页面样式文件
│   │   │   └── view.vue                       页面视图文件
│   ├── router                                 路由配置目录
│   │   └── index.js                           路由配置(包含了路由拦截)
│   ├── services                               API接口服务配置目录
│   │   └── axios.api.js                       接口请求配置，这里采用的是axios，包含了接口请求拦截和接口响应拦截
│   ├── utils                                  辅助工具目录
│   │   ├── index.js                           辅助类方法文件
│   │   └── thread.js                          模拟线程工具文件
│   ├── App.vue                                APP项目视图入口(脚手架生成)
│   └── main.js                                项目js入口主文件(脚手架生成)
├── static                                     静态资源目录，脚手架为我们生成的，但我们一般放在src目录下，因为所有我们自己创建的文件都在src目录下面(脚手架生成，可删除)
├── test                                       测试目录(脚手架生成，可删除)
├── .babelrc                                   babel语法编译配置，浏览器的版本和兼容性问题，很多js的新方法和特性的使用都受到了限制。使用babel可以将代码中js代码编译成兼容绝大多数主流浏览器的代码(脚手架生成)
├── .editorconfig                              编辑器配置，帮助开发人员在不同的编辑器和IDE之间定义和维护一致的编码样式(脚手架生成)
├── .eslintignore                              eslint忽略语法检查文件(脚手架生成)
├── .eslintrc.js                               eslint语法检查配置(脚手架生成)
├── .gitignore                                 git忽略文件或目录上次(脚手架生成)
├── .postcssrc.js                              添加样式的浏览器私缀，比如display: flex; 添加display: -ms-flexbox;(脚手架生成)
├── index.html                                 首页入口文件，如果是开发移动端项目，可以在head区域加上你合适的meta头(脚手架生成)
├── package-lock.json                          锁定安装时的包的版本号，并且需要上传到git，以保证其他人在npm install时依赖的版本能保证一致(脚手架生成)
├── package.json                               项目所需的模块及版本信息(脚手架生成)
└── README.md                                  当前文件，项目的说明文件(脚手架生成)
```

## Coding Standard（编码规范）
* 编码中，所有命名采用驼峰命名规则
```base
// 首页banner
let pageIndexBanner
```
* 目录及文件命名采用小写，多个单词加中划线连接([为什么文件名要小写](http://www.ruanyifeng.com/blog/2017/02/filename-should-be-lowercase.html))
```base
// 首页页面目录下的首页banner视图
page-index
├── page-index-banner.vue
```
* 注释
1.文件注释，每个文件需要在顶部添加注释来描述文件类型、功能、作者、日期等信息
```base
/**
 * 文件注释（JS、LESS）
 * @author AndyPan
 * @createdate 2019年8月26日14:50:33
 * @lastupdatedate 2019年8月26日14:50:37
 * @remark 注释及备注
 */
<!--
 * 文件注释（vue视图）
 * @author AndyPan
 * @createdate 2019年8月26日14:50:33
 * @lastupdatedate 2019年8月26日14:50:37
 * @remark 注释及备注
-->
```
2.多行注释，一般用于描述代码块，每一段必要的代码都需要加上注释
```base
/**
 * 多行注释（JS、LESS）
 */
<!--
 * 多行注释（vue视图）
-->
```
3.单行注释，单个变量、属性需加上必要的注释说明
```base
// 单行注释（JS、LESS）
<!-- 单行注释（vue视图） -->
```
4.函数注释，每一个函数都需要加上必要的说明，包括参数、类型以及返回值
```base
/**
 * 函数功能描述
 * @param {Object(参数数据类型)} params.参数描述
 * @returns {Boolean(返回值数据类型)} 返回值描述
 */
let test = function (params) {
    return false
}
```

