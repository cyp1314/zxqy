const TokenKey: string = 'token'

// 获取指定key
export function getToken(key: string = TokenKey) {
  const data = sessionStorage.getItem(key)
  if (!data) return null
  try {
    return JSON.parse(data)
  } catch (e) {
    return data
  }
}

// 设置key
export function setToken(key: string, value: any) {
  if (typeof value === 'object') value = JSON.stringify(value)
  sessionStorage.setItem(key, value)
}

// 清除指定key
export function removeToken(key?: string) {
  sessionStorage.removeItem(key || TokenKey)
}

// 清除所有
export function removeAll() {
  sessionStorage.clear()
  localStorage.clear()
}
