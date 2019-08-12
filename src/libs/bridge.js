import utils from '@/utils'
const bridge = {
  where: process.env.SUB_VER
}

bridge.getAppInfo = function () {
  if (bridge.where === 'main') {
    return new Promise((resolve, reject) => {
      let done = false
      let ti = setTimeout(() => {
        if (!done) {
          done = true
          reject(new Error('timeout'))
        }
      }, 1000)
      window.itwara.call('getAppInfo', {
        success: function (info) {
          if (!done) {
            done = true
            clearTimeout(ti)
            resolve(info)
          }
        }
      })
    })
  } else if (bridge.where === 'hap') {
    const postEvent = {
      m: 'getDeviceInfo',
      p: ''
    }
    window.system.postMessage(JSON.stringify(postEvent))
  }
}

bridge.getUserInfo = function () {
  if (bridge.where === 'main') {
    return {}
  }
  if (bridge.where === 'hap') {
    return {}
  }
  return {}
}

bridge.getLocation = function () {
  if (bridge.where === 'main') {
    return new Promise((resolve, reject) => {
      window.itwara.call('getLocation', {
        success: function (res) {
          resolve(res)
        }
      })
    })
  } else if (bridge.where === 'hap') {

  }
}

bridge.openBrowser = function (url, path = 'WebPage') {
  if (bridge.where === 'main') {
    window.location.href = url
  } else if (bridge.where === 'hap') {
    const originUrl = utils.isFullUrl(url)
      ? url
      : `${window.location.origin}/hap${url}`
    window.system.go(`/${path}?encodedUrl=${encodeURIComponent(originUrl)}`)
  } else {
    window.open(url)
  }
}

bridge.closeBrowser = function (p = '') {
  if (bridge.where === 'main') {
    window.itwara.call('closeBrowser', {})
  } else if (bridge.where === 'hap') {
    const postEvent = {
      m: 'closeWindow',
      p
    }
    window.system.postMessage(JSON.stringify(postEvent))
  }
}

function install (Vue, options = {}) {
  Vue.BRIDGE = bridge

  Object.defineProperty(Vue.prototype, '$bridge', {
    get () {
      return bridge
    }
  })
}
export default install
