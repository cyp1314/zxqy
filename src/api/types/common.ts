export interface ResponseData <T = any> {
  content: T // 数据
  totalElements: number // 总数
}

export interface PageContent {
  page: number // 页数从0开始
  size: number // 每页条数
}

// 选项扩展
export interface Selection {
  label?: string
  value?: string
  children?: any[]
}
