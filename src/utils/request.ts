// import { useUserStore } from '@/store'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
import { getToken, removeAll } from './auth'
import { useUserStore } from '@/store/index'
import Cookies from "js-cookie"


const request = axios.create()

const allInfos = ['security/api/security/company/interprovincial', 'security/api/security/service/apply']


// 请求拦截器
request.interceptors.request.use(config => {
  const counter = useUserStore()
  const Config = getToken('config')
  const Token = getToken()
  if (config.baseURL === undefined) {
    config.baseURL = Config?.apiHost
  } else {
    config.baseURL = Config?.processApiHost
  }
  config.baseURL = "https://gatwjw.xinjiang.gov.cn/dev-test/"
  if (!config.headers) config.headers = {}
  if (config.url?.includes('authentication/token') || config.url?.includes('common/api/user/')) {


  } else {

    config.headers.Authorization = `Bearer ${Cookies.get('lctoken')}`
    // config.headers.Authorization = `Bearer ${counter.$state.lctoken}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
request.interceptors.response.use(res => {
  // if (res.data.code === -1) {
  //   ElMessage({
  //     type: 'error',
  //     message: res.data.msg,
  //     duration: 2000,
  //     showClose: true
  //   })
  //   return Promise.reject(res)
  // }
  return Promise.resolve(res)
}, err => {
  if (err.response.status === 401) {
    ElMessage({
      type: 'error',
      message: '登录状态已过期，请重新登录',
      duration: 2000,
      showClose: true,
      onClose() {
        removeAll()
        // 关闭当前页面
        window.close()
        window.location.href = 'https://zwfw.xinjiang.gov.cn/'
      }
    })
    return
  } else if (err.response.status === 406) {
    ElMessage({
      type: 'error',
      message: err.response?.data?.msg,
      duration: 2000,
      showClose: true,
    })
    return
  }
  return Promise.reject(err)
})

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    const getAllInfo = allInfos.includes(config.url as any)
    return getAllInfo ? res as AxiosResponse<any, any> : res.data as T
  })
}
