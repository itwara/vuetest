// 格式化参数
function formatParams (data) {
  let arr = []
  for (let name in data) {
    // encodeURIComponent() ：用于对 URI 中的某一部分进行编码
    arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))
  }
  // 添加一个随机数参数，防止缓存
  arr.push('v=' + Math.floor(Math.random() * 10000 + 500))
  return arr.join('&')
}

// jsonp请求
export default function (body) {
  return new Promise((resolve, reject) => {
    let { params, url } = body

    // 设置传递给后台的回调参数名
    let callbackName = params.jsonpCallBack || `jsonpCallBack_${Date.now()}`
    params.callback = callbackName

    // 创建jsonp回调函数
    window[callbackName] = result => {
      head.removeChild(script)
      clearTimeout(script.timer)
      window[callbackName] = null
      if (result) {
        resolve(result)
      } else {
        reject(new Error('没有返回'))
      }
    }

    // 创建script标签并加入到页面中
    let data = formatParams(params)
    let head = document.getElementsByTagName('head')[0]
    let script = document.createElement('script')
    script.src = url + '?' + data
    head.appendChild(script)

    // 为了得知此次请求是否成功，设置超时处理
    if (params.time) {
      script.timer = setTimeout(() => {
        window[callbackName] = null
        head.removeChild(script)
        params.error &&
          params.error({
            message: '超时'
          })
      }, params.time)
    }
  })
}
