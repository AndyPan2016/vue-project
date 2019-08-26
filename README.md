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
├── build                                      项目构建时的配置(脚手架自动生成的目录，一般我们不需要管)
├── config                                     项目配置(脚手架自动生成的目录，一般我们不需要管)
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
├── static
├── test
├── .babelrc
├── .editorconfig
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .postcssrc.js
├── index.html
├── package-lock.json
├── package.js
└── README.md
```