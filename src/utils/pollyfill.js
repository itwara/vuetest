// setImmediate pollyfill
export const clearImmediate = window.clearImmediate || window.clearTimeout
export const setImmediate = window.setImmediate || function (func, args) {
  return window.setTimeout(func, 0, args)
}

// 节流
// 规定时间内只执行一次，先执行
// 应用场景：常用按钮点击，连续点了两次，只执行一次，以第一次为准
export const throttle = (fn = () => {}, delay = 500) => {
  let isProcessing = false
  return (...args) => {
    if (isProcessing) return
    isProcessing = true
    setTimeout(() => {
      fn.apply(this, args)
      isProcessing = false
    }, delay)
  }
}

// 防抖
// 规定时间内只执行一次，后执行
// 应用场景：注册验证用户名是否被注册；这里如果连续快速输入都去请求性能明显不好，如果采用节流的方式，则请求的输入值是第一次请求的，不是最终值；而采取防抖的方式，后执行，永远只执行最后一次的，更实时
// scroll & resize
export const debounce = (fn = () => {}, delay = 500) => {
  let timer = null
  return (...args) => {
    window.clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
