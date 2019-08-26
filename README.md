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
### 项目采用vue-cli构建而成，并根据实际情况做了修改和调整，具体结构如下：
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
│   ├── components
│   │   ├── [component-name]
│   │   │   ├── index.js
│   │   │   ├── view.less
│   │   │   └── view.vue
│   ├── configs
│   │   ├── index.js
│   │   ├── lang.js
│   │   ├── module.js
│   │   └── status.js
│   ├── pages
│   │   ├── _commons
│   │   │   ├── [commons-block-name]
│   │   │   │   ├── index.js
│   │   │   │   ├── view.less
│   │   │   │   └── view.vue
│   │   ├── _layout
│   │   │   ├── [layout-name]
│   │   │   │   ├── index.js
│   │   │   │   ├── view.less
│   │   │   │   └── view.vue
│   │   ├── [page-name]
│   │   │   ├── index.js
│   │   │   ├── view.less
│   │   │   └── view.vue
│   ├── router
│   │   └── index.js
│   ├── services
│   │   └── axios.api.js
│   ├── utils
│   │   ├── index.js
│   │   └── thread.js
│   ├── App.vue
│   └── main.js
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