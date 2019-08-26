/**
 * Popup
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-08-14 09:40:22
 */

// import utils from '@/utils'
let utils = Utils.require()

let render = {
  data () {
    return {
      // 是否可见
      isVisible: false,
      // 显示&关闭弹出框
      isShow: false,
      // 标题(data中的属性名称不能与props中的名称一样，会冲突，与react不同的是props和status的属性都是通过this获取)
      popupTitle: 'My Popup Title',
      // 弹出框内容
      popupContent: 'My Popup Content',
      // downup类型弹出框的选项数据
      popupDownUpData: undefined,
      // 弹出框类型（alert:提示框、confirm:确认框、prompt:弹出输入框、tip:文字提示框、downup:由下往上弹出）
      popupType: 'default',
      // 自动关闭时间
      popupTimeout: 4000,
      // 自定义Class
      customClass: '',
      // 自定义按钮(默认始终显示sure和cancel)
      customButtons: {
        // { text: '按钮文字', isVisible: '是否显示按钮(因为默认sure和cancel是始终显示的)', fn: '按钮点击函数(默认任意一个按钮点击都会关闭弹出框，可以自定义函数并return false来阻止关闭)' }
        sure: { text: '确定', isVisible: true, fn: null },
        cancel: { text: '取消', isVisible: true }
      }
    }
  },
  props: [
    // *** 属性 ***/
    // 自定义Class，用于重写样式
    'className',
    // 是否点击遮罩层关闭弹出框
    'isMaskClickHide',
    // 初始时直接显示
    'initShow',
    // 弹出框title
    'title',
    // 弹出框消息内容
    'message', 'content', 'downupData',
    // 弹出框类型（alert:提示框、confirm:确认框、prompt:弹出输入框、tip:文字提示框）
    'type',
    // 自动关闭时间
    'timeout',
    // 弹出框图标（info、warm、error、loading）
    'icon',
    // 自定义按钮
    'buttons', 'downupButton',
    // *** 属性 ***/
    // *** 事件 ***/
    // mask点击自定义事件
    'onMaskClick',
    // 弹出框打开前事件
    'onOpenBefore',
    // 弹出框打开后事件
    'onOpen',
    // 弹出框关闭前事件
    'onCloseBefore',
    // 弹出框关闭后事件
    'onClose',
    // 弹出框确定(sure类型)按钮事件
    'onSure',
    // 弹出框取消(cancel类型)按钮事件
    'onCancel',
    // 倒计时回调(只有type=tip时有效)
    'threadCallBack',
    // downup选项点击事件
    'onDownupItemClick',
    // 所有按钮的点击事件
    'onButtonClick'
    // *** 事件 ***/
  ],
  computed: {
    thisDevice () {
      return utils.isMobile() ? 'ui-popup-mobile' : ''
    }
  },
  methods: {
    // 打开弹出框
    open () {
      // 响应弹出框打开前事件
      let onOpenBefore = this.onOpenBefore
      if (utils.isFunction(onOpenBefore)) {
        if (utils.isFalse(onOpenBefore())) {
          return false
        }
      }

      this.isVisible = true
      this.isShow = true

      // 响应弹出框打开后事件
      let onOpen = this.onOpen
      if (utils.isFunction(onOpen)) {
        onOpen()
      }

      // 设置自动关闭定时器
      if (this.type === 'tip' || this.popupType === 'tip') {
        let timeout = this.timeout || this.popupTimeout
        setTimeout(() => { this.close() }, timeout)
        // 自动关闭倒计时
        let threadCallBack = this.threadCallBack
        if (utils.isFunction(threadCallBack)) {
          let allTime = (timeout / 1000) - 1
          let result
          let myThread = setInterval(() => {
            allTime--
            if (allTime <= -1) {
              clearInterval(myThread)
            }
            result = threadCallBack(allTime)
            if (result) {
              this.popupContent = result
            }
          }, 1000)
        }
      }
    },
    // 关闭弹出框
    close () {
      // 响应弹出框关闭前事件
      let onCloseBefore = this.onCloseBefore
      if (utils.isFunction(onCloseBefore)) {
        if (utils.isFalse(onCloseBefore())) {
          return false
        }
      }

      this.isShow = false
      // 关闭有0.6秒的动画效果，需延迟不可见
      setTimeout(() => {
        this.isVisible = false
      }, 600)

      // 响应弹出框关闭后事件
      let onClose = this.onClose || this.onPopupClose
      if (utils.isFunction(onClose)) {
        onClose()
      }
    },
    // alert提示
    alert (title, msg, sure, close) {
      if (typeof (title) === 'object') {
        close = title.close
        sure = title.sure
        msg = title.msg
        title = title.title
      }
      if (typeof (msg) === 'function') {
        close = sure
        sure = msg
        msg = title
        title = undefined
      }
      if (!msg && !sure) {
        msg = title
        title = undefined
      }
      this.popupType = 'alert'
      this.renderTypeBtn()
      this.onPopupClose = close
      this.popupContent = msg
      this.popupTitle = title || this.popupTitle
      this.customButtons.sure.fn = sure

      this.open()
    },
    // confirm提示
    confirm (title, msg, sure, cancel, close) {
      if (typeof (title) === 'object') {
        close = title.close
        cancel = title.cancel
        sure = title.sure
        msg = title.msg
        title = title.title
      }
      if (typeof (msg) === 'function') {
        close = cancel
        cancel = sure
        sure = msg
        msg = title
        title = undefined
      }
      if (!msg && !sure && !cancel) {
        msg = title
        title = undefined
      }
      this.popupType = 'confirm'
      this.renderTypeBtn()
      this.onPopupClose = close
      this.popupContent = msg
      this.popupTitle = title || this.popupTitle
      this.customButtons.sure.fn = sure
      this.customButtons.cancel.fn = cancel

      this.open()
    },
    // tip提示
    tip (msg, timeout, callBack) {
      if (typeof (msg) === 'object') {
        callBack = msg.callBack
        timeout = msg.timeout
        msg = msg.msg
      }
      if (typeof (timeout) === 'function') {
        callBack = timeout
        timeout = undefined
      }
      this.popupType = 'tip'
      this.onPopupClose = callBack
      this.popupTimeout = timeout || this.popupTimeout
      this.popupContent = msg || 'tip message'

      this.open()
    },
    // loading提示
    loading (msg) {
      this.popupType = 'loading'
      this.popupContent = msg || 'loading message'

      this.open()
    },
    // mask点击事件
    maskClickEvent (e) {
      // 响应用户自定义mask点击事件
      let onMaskClick = this.onMaskClick
      if (utils.isFunction(onMaskClick)) {
        // 用户自定义事件优先，如果返回false，阻止继续执行
        if (utils.isFalse(onMaskClick(e))) {
          return false
        }
      }
      // 如果设置了点击mask关闭弹出框时执行
      if (utils.isTrue(this.isMaskClickHide) || (this.popupType === 'downup' && this.isMaskClickHide !== false)) {
        this.close()
      }
    },
    // 头部tools关闭按钮点击事件
    toolsCloseEvent (e) {
      this.close()
    },
    // 底部按钮栏点击事件
    ftClickEvent (e) {
      e = e || window.event
      let target = e.target || e.srcElement
      if (utils.hasClass(target, 'j-popup-btn')) {
        // 判断按钮类型
        let btnType = target.getAttribute('data-type')
        let resultData = {value: target.getAttribute('data-value'), text: target.innerHTML}
        if (btnType) {
          // 获取按钮对象
          let button = this.customButtons[btnType]
          // 1.首先响应该类型按钮的操作函数
          let buttonFn = button.fn
          if (utils.isFunction(buttonFn)) {
            if (utils.isFalse(buttonFn.call(target, e, resultData))) {
              return false
            }
          }

          // 2.其次响应on事件
          if (btnType.toLowerCase() === 'sure') {
            // 响应onSure事件
            let onSure = this.onSure
            if (utils.isFunction(onSure)) {
              if (utils.isFalse(onSure.call(target, e, resultData))) {
                return false
              }
            }
          } else if (btnType.toLowerCase() === 'cancel') {
            // 响应onCancel事件
            let onCancel = this.onCancel
            if (utils.isFunction(onCancel)) {
              if (utils.isFalse(onCancel.call(target, e, resultData))) {
                return false
              }
            }
          }

          // 3.最后响应所有按钮的点击事件
          let onButtonClick = this.onButtonClick
          if (utils.isFunction(onButtonClick)) {
            if (utils.isFalse(onButtonClick.call(target, e, resultData))) {
              return false
            }
          }
        }

        this.close()
      }
    },
    // body点击事件
    bdClickEvent (e) {
      e = e || window.event
      let target = e.target || e.srcElement
      if (utils.hasClass(target, 'j-downup-item')) {
        let onDownupItemClick = this.onDownupItemClick
        if (utils.isFunction(onDownupItemClick)) {
          let resultData = {
            value: target.getAttribute('data-value'),
            text: target.innerHTML
          }
          var result = onDownupItemClick.call(this, e, resultData)
          if (result !== false && result !== 'false') {
            this.close()
          }
        }
      }
    },
    // 通过类型设置内置按钮
    renderTypeBtn () {
      let type = this.popupType
      if (type === 'alert') {
        this.popupTitle = this.title || '提示'
        this.customButtons = {
          sure: { text: '确定', isVisible: true }
        }
      } else if (type === 'confirm') {
        this.popupTitle = this.title || '确认提示'
        this.customButtons = {
          sure: { text: '确定', isVisible: true },
          cancel: { text: '取消', isVisible: true }
        }
      }
    }
  },
  created () {
    // 设置初始创建完成直接打开弹出框
    if (utils.isTrue(this.initShow)) {
      this.open()
    }
    // 设置自定义标题
    if (this.title && this.title !== 'visible') {
      this.popupTitle = this.title
    }
    // 设置自定义内容
    if (this.content) {
      this.popupContent = this.content
    }
    // 设置自定义消息(内容)
    if (this.message) {
      this.popupContent = this.message
    }
    // downup类型弹出框的选项数据
    if (this.downupData) {
      this.popupDownUpData = this.downupData
    }
    // 设置自定义class
    if (this.className) {
      this.customClass = this.className
    }
    // 设置自定义按钮
    let buttons = this.buttons || this.downupButton
    if (buttons && buttons !== 'visible') {
      let customButtons = this.customButtons
      let button
      let customButton
      let tempButtons
      for (let key in buttons) {
        button = buttons[key]
        customButton = customButtons[key]
        // 如果按钮不存在，直接写入
        if (!customButton) {
          tempButtons = tempButtons || {}
          tempButtons[key] = button
        } else {
          // 如果按钮已存在，直接写入属性
          for (let btnKey in button) {
            customButton[btnKey] = button[btnKey]
          }
          tempButtons = tempButtons || {}
          tempButtons[key] = customButton
        }
      }
      if (tempButtons) {
        this.customButtons = tempButtons
      }
    }
    // 自定义类型
    let type = this.type
    if (type) {
      this.popupType = type
      this.renderTypeBtn()
    }
  }
}

export {
  render
}
