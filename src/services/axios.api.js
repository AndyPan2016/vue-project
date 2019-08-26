
import Vue from 'vue'
import Axios from 'axios'

// 请求拦截
Axios.interceptors.request.use(params => {
  // 请求开始
  return params
}, error => {
  return Promise.reject(error)
})

// 响应拦截
Axios.interceptors.request.use(response => {
  // 响应开始
  if (response.status !== 200) {
    console.error('服务器错误')
  }
  return response
}, error => {
  return Promise.reject(error)
})

Vue.prototype.$Axios = Axios

Vue.prototype.$get = (path, params) => {
  return new Promise((resolve, reject) => {
    Axios.get(path, params).then(res => {
      resolve(res)
    }).then(err => {
      reject(err)
    })
  })
}

Vue.prototype.$post = (path, params) => {
  return new Promise((resolve, reject) => {
    Axios.post(path, params).then(res => {
      resolve(res)
    }).then(err => {
      reject(err)
    })
  })
}
