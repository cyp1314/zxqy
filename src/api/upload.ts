import Request from '../utils/request'
import { getToken } from '../utils/auth'
import { useUserStore } from '@/store/index'

const counter = useUserStore()

// 网络配置
const config = getToken('config')
// 用户token
const token = getToken()

// 上传文件接口
export function uploadFile(data: any, progress?: (e: number) => void) {
  return Request({
    url: '/common/api/file/transfer',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    method: 'POST',
    data,
    transformRequest: [(d: any) => {
      const formData = new FormData()
      for (const key in d) {
        formData.append(key, d[key])
      }
      return formData
    }],
    // 上传进度
    onUploadProgress: (e) => {
      const complete = e.loaded / e.total * 100 | 0
      progress && progress(complete)
    }
  })
}

// 下载文件接口
export function downloadFile(fid: string) {
  return Request({
    url: '/common/api/file/transfer',
    method: 'GET',
    responseType: 'blob',
    params: {
      fid
    }
  })
}

// 图片预览
export function previewImg(fid: string): string {
  // return `https://gatwjw.xinjiang.gov.cn/common/api/file/transfer?fid=${fid}&access_token=${counter.$state.lctoken}`
  return `https://gatwjw.xinjiang.gov.cn/dev-test/common/api/file/transfer?fid=${fid}&access_token=${counter.$state.lctoken}`
}

export function uploadUrl(): string {
  // return `https://gatwjw.xinjiang.gov.cn/common/api/file/transfer?access_token=${counter.$state.lctoken}`
  return `https://gatwjw.xinjiang.gov.cn/dev-test/common/api/file/transfer?access_token=${counter.$state.lctoken}`
}
