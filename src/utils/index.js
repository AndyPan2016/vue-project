/**
 * utils
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-08-14 10:23:48
 */

export const utils = {
  isTrue (attr) {
    return (attr === true || attr === 'true') ? 1 : 0
  },
  isFalse (attr) {
    return (attr === false || attr === 'false') ? 1 : 0
  },
  isString (str) {
    return (str && typeof (str) === 'string') ? 1 : 0
  },
  isFunction (fn) {
    return (fn && typeof (fn) === 'function') ? 1 : 0
  },
  isArray (ary) {
    try {
      return Object.prototype.toString.call(ary) === '[object Array]'
    } catch (e) {
      return false
    }
  },
  addClass (target, clas) {
    if (target && clas) {
      var className = target.getAttribute('class') || target.className
      if (className.indexOf(clas) < 0) {
        target.className += ' ' + clas
      }
    }
  },
  removeClass (target, clas) {
    if (target && clas) {
      var classNameAry = (target.getAttribute('class') || target.className).split(' ')
      let i = 0
      let len = classNameAry.length
      let item
      let tempClas = []
      for (; i < len; i++) {
        item = classNameAry[i]
        if (item !== clas) {
          tempClas.push(item)
        }
      }
      target.className = tempClas.join(' ')
    }
  },
  hasClass (target, clas) {
    if (target && clas) {
      var classNameAry = (target.getAttribute('class') || target.className).split(' ')
      let i = 0
      let len = classNameAry.length
      let item
      let status = false
      for (; i < len; i++) {
        item = classNameAry[i]
        if (item === clas) {
          status = true
          break
        }
      }
      return status
    }
  },
  isMobile () {
    return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  },
  isWeixin () {
    var ua = navigator.userAgent.toLowerCase()
    if (ua.match(/MicroMessenger/i) === 'micromessenger') {
      return true
    } else {
      return false
    }
  },
  // 获取Url地址的参数
  queryUrl (url, name) {
    // 获取url中"?"符后的字串
    var search = url ? url.substring(url.indexOf('?'), url.length) : location.search
    var result = null
    if (search.indexOf('?') !== -1) {
      result = {}
      var substr = search.substr(1)
      var strArray = substr.split('&')
      var i = 0
      var length = strArray.length
      var strArrayItem
      for (; i < length; i++) {
        strArrayItem = strArray[i].split('=')
        result[strArrayItem[0]] = unescape(strArrayItem[1])
      }
    }

    if (name && result) {
      result = result[name]
    }

    return result
  }
}
