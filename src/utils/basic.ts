
export function parentTree (arr: any, id: string) { // arr 所有的树数据 id 某个子节点的id
  const temp = [] as any
  const callback = function (nowArr: any, id: string) { // 先定义个函数寻找子节点位置 找到后 再找改节点父元素位置 以此类推
    for (let i = 0; i < nowArr.length; i++) {
      const item = nowArr[i]
      if (item.id === id) {
        item.value = item.code
        item.label = item.name
        temp.push(item)
        callback(arr, item.pid) // pid 父级ID
        break
      } else {
        if (item.children) {
          callback(item.children, id) // menus 子节点字段名称
        }
      }
    }
  }
  callback(arr, id)
  return temp.splice(1, temp.length)// 最后返回
}

// 遍历下级
export function childrenTree (arr: any, id: string) { // arr 所有的树数据 id 某个子节点的id
  const temp = [] as any
  const callback = function (nowArr: any, id: string) { // 先定义个函数寻找子节点位置 找到后 再找改节点父元素位置 以此类推
    for (let i = 0; i < nowArr.length; i++) {
      const item = nowArr[i]
      if (item.id === id) {
        item.value = item.id
        item.label = item.autoExecuteDeptName
        temp.push(item)
        callback(item.children, item.id)
        break
      } else {
        if (item.children) {
          callback(item.children, id)
        }
      }
    }
  }
  callback(arr, id)
  return temp // 最后返回
}

// 表单自动定位到验证失败的位置
export function vertifyJump (form: any, val: any) {
  setTimeout(() => {
    // 延时器的作用：避免‘is-error’在以下操作将要执行时还未渲染上
    // 验证没通过会自动加上的类名is-error
    // 这是获取第一个未通过的
    const isError = document.getElementsByClassName('is-error')[0] as any
    const child = isError.querySelector('label').getAttribute('for')

    // 获取以对象属性名为元素的数组
    const obj = Object.keys(val)

    obj.forEach(function (item, index) {
      if (item === child) {
        form.value?.scrollToField(obj[index]) // 会跳转到第一个未通过的
      }
    })
  }, 100)
}
// 将tree树添加层级
export function arrayTreeAddLevel (array:any, levelName:any = 'level', childrenName:any = 'children') {
  if (!Array.isArray(array)) return []
  const recursive = (array:any, level:any = 0) => {
    level++
    return array.map((v:any) => {
      v[levelName] = level
      const child = v[childrenName]
      if (child && child.length) recursive(child, level)
      return v
    })
  }
  return recursive(array)
}

export function downloadIamge (imgsrc:any, name:any) {
  // 下载图片地址和图片名
  const image = new Image()
  // 解决跨域 Canvas 污染问题
  image.setAttribute('crossOrigin', 'anonymous')
  image.onload = function () {
    const canvas = document.createElement('canvas')
    canvas.width = image.width
    canvas.height = image.height
    const context:any = canvas.getContext('2d')
    context.drawImage(image, 0, 0, image.width, image.height)
    const url = canvas.toDataURL('image/png') // 得到图片的base64编码数据'
    const a = document.createElement('a') // 生成一个a元素
    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    }) // 创建一个单击事件
    a.download = name || 'photo' // 设置图片名称
    a.href = url // 将生成的URL设置为a.href属性
    a.dispatchEvent(event) // 触发a的单击事件
  }
  image.src = imgsrc
}

export function downloadFile (item: any, type:string = 'type', src:string = 'src', name:string = 'name') {
  if (!item[src]) {
    return false
  }
  if (item[type] !== 'img') {
    window.open(item[src])
  } else {
    downloadIamge(item[src], item[name])
  }
}

export function bytesToSize (size:any) {
  if (!size) return ''
  const num = 1024.00 // byte
  if (size < num) { return size + 'B' }
  if (size < Math.pow(num, 2)) { return (size / num).toFixed(2) + 'KB' } // kb
  if (size < Math.pow(num, 3)) { return (size / Math.pow(num, 2)).toFixed(2) + 'MB' } // M
  if (size < Math.pow(num, 4)) { return (size / Math.pow(num, 3)).toFixed(2) + 'G' } // G
  return (size / Math.pow(num, 4)).toFixed(2) + 'T' // T
}
// 判断字符串是否为数字
export function stringIsNnmber (size:any) {
  if (!size) return false
  return !isNaN(parseFloat(size)) && isFinite(size)
}
