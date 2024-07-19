// 获取当天时间 0分0秒起
export function getNowTime () {
  const now = new Date()
  const year = now.getFullYear() // 得到年份
  let month:any = now.getMonth() // 得到月份
  let date:any = now.getDate() // 得到日期
  month = month + 1
  month = month.toString().padStart(2, '0')
  date = date.toString().padStart(2, '0')
  const defaultDate = `${year}-${month}-${date}` + ' 00:00:00'
  return defaultDate
}

// 获取当天时间 0分0秒起
export function getNowsTime () {
  const now = new Date()
  const year = now.getFullYear() // 得到年份
  let month:any = now.getMonth() // 得到月份
  let date:any = now.getDate() // 得到日期
  const hour:any = now.getHours() // 时
  const minutes:any = now.getMinutes() // 分
  const seconds:any = now.getSeconds()
  month = month + 1
  month = month.toString().padStart(2, '0')
  date = date.toString().padStart(2, '0')
  const defaultDate = `${year}-${month}-${date} ${hour}:${minutes}:${seconds}`
  return defaultDate
}
