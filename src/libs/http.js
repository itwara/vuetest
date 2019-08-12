/*
 *  封装axios
 */
import axios from 'axios'
// import store from '../store'
import jsonp from './jsonp'
import utils from '@/utils'

function isCrossOrigin (url, baseURL) {
  return utils.isFullUrl(url) && url.indexOf(baseUrl) === -1
}

// 获取请求url
function getRequestUrl (url, baseUrl) {
  return utils.isFullUrl(url) ? url : baseUrl + url
}

function handleNetErr (needHandleError, isLoop, err) {
  // 页面级别
  if (needHandleError) {
    // store.dispatch('changePageStatus', { error: true })
  } else {
    if (!isLoop) {
      alert('服务异常，稍后再试')
    } else {
      console.log('非全局处理异常')
    }
  }
  return Promise.reject(err)
}

function handleResult (needHandleLoading, res) {
  // needHandleLoading && store.dispatch('changePageStatus', { loading: false })
  return res.data
}

// 获取请求参数
function getRequestParams (url, baseUrl, type, params, isNeedLocalInfo) {
  const commonInfo = getSiteInfo()
  if (['jsonp', 'get', 'delete'].indexOf(type) > -1) {
    // 外链不带入本站信息
    if (isCrossOrigin(url, baseUrl)) {
      return params
    } else {
      return {
        ...commonInfo,
        ...params
      }
    }
  } else {
    // 是否需要携带本站的额外信息
    if (!isNeedLocalInfo) {
      return {}
    } else {
      return commonInfo
    }
  }
}

// 获取本站信息
function getSiteInfo () {

}

// CancelToken
const CancelToken = axios.CancelToken
const source = CancelToken.source()

// axios 实例
const baseUrl = process.env.API_BASE
const axiosInstance = axios.create()

axiosInstance.defaults.baseURL = baseUrl
axiosInstance.defaults.timeout = 15000
axiosInstance.defaults.withCredentials = true

// 请求拦截器
axiosInstance.interceptors.request.use(
  config => {
    config.cancelToken = source.token
    if (
      config.headers['Content-Type'] === 'application/x-www-form-urlencoded'
    ) {
      delete config.headers.post['Content-Type']
      delete config.headers['Content-Type']
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (axios.isCancel(error)) {
      console.log(
        'cancel last view request ok & break the current promise chain'
      )
      return new Promise((resolve, reject) => {})
    } else {
      return Promise.reject(error)
    }
  }
)

export default ({
  type = 'get',
  url = '/',
  params = {},
  options = {},
  isLoop = false,
  headers = {},
  needHandleError = false,
  needHandleLoading = false,
  isNeedLocalInfo = true
}) => {
  let body
  const requestUrl = getRequestUrl(url, baseUrl)
  const requesetParams = getRequestParams(
    url,
    baseUrl,
    type,
    params,
    isNeedLocalInfo
  )
  if (type === 'jsonp') {
    body = { params: requesetParams, ...options }
    body.url = requestUrl
    return jsonp(body)
  } else {
    switch (type) {
      case 'get':
      case 'delete':
      case 'head':
      case 'options':
        body = {
          ...options,
          withCredentials: false,
          params: requesetParams
        }
        break
      case 'post':
      case 'form':
        const contentType =
          type === 'form'
            ? 'multipart/form-data'
            : 'application/x-www-form-urlencoded'
        const requesetHeaders = Object.assign(
          {},
          { 'Content-Type': contentType },
          headers
        )
        body = JSON.stringify(params)
        type = 'post'
        options = {
          ...options,
          params: requesetParams,
          headers: requesetHeaders
        }
        break
      default:
    }
    return axiosInstance[type](requestUrl, body, options).then(
      handleResult.bind(this, needHandleLoading),
      handleNetErr.bind(this, needHandleError, isLoop)
    )
  }
}
