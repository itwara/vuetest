/** 判断是否是函数 */
export const isFunc = func => typeof func === 'function'
/** 判断是否是纯对象 */
export const isPureObj = obj => Object.prototype.toString.call(obj) === '[object Object]'
/** 判断是否是数组 */
export const isArr = arr => Object.prototype.toString.call(arr) === '[object Array]'

/** 过滤掉对象中符合rule的key值，默认过滤掉value为null|undefined|'' */
export function objFilter (obj, rule = value => !value) {
  if (obj) {
    return Object.keys(obj).reduce((acc, key) => {
      if (rule(acc[key])) {
        delete acc[key]
      }
      return acc
    }, obj)
  } else {
    return obj
  }
}
/** 异步加载图片 */
export function asyncLoadImg (imgSrc) {
  const img = new Image()
  const imgId = '__image__' + Math.random()
  window[imgId] = img
  img.onload = img.onerror = function () {
    delete window[imgId]
  }
  img.src = imgSrc
}

/** 数组去重 */
export function uniqArr (arr) {
  const temp = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    let flag = true
    for (let j = 0; j < temp.length; j++) {
      if (arr[i] === temp[j]) {
        flag = false
        break
      }
    }
    if (flag) {
      temp.push(arr[i])
    }
  }
  return temp
}

/** 改写console */
export function rewriteConsole () {
  const CONSOLE_METHODS = ['log', 'info', 'warn', 'error']
  CONSOLE_METHODS.forEach(methodName => {
    window.console && (window.console[methodName] = function () {})
  })
}

/**
 * 判断url是否是完整
 * @param {*} url
 */
export function isFullUrl (url) {
  return /^https?:\/\//.test(url)
}
