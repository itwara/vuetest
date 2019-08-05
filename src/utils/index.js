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
