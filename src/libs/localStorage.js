const store = {
  version: '1.0.0'
}

const ls = window.localStorage

if (ls) {
  store.save = function (key, data) {
    let dataStr
    try {
      if (typeof data === 'object') {
        dataStr = JSON.stringify(data)
      } else {
        dataStr = data
      }
      ls.setItem(key, dataStr)
    } catch (e) {
      console.log('不支持JSON.stringify')
    }
  }

  store.load = function (key, defaultValue = null) {
    const data = ls.getItem(key)

    let result
    try {
      if (data === null || data === undefined) {
        result = defaultValue
      } else {
        result = JSON.parse(data)
      }
    } catch (e) {
      console.log('不支持JSON.parse')
      result = {}
    }

    return result
  }

  store.remove = function (key) {
    ls.removeItem(key)
  }
} else {
  store.remove = store.save = store.load = function () {
    console.log('不支持ls')
    return {}
  }
}

export default store
