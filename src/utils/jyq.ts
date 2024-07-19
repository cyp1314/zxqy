// 手机号验证规则
export function validatePhon(rule: any, value: any, callback: any) {
  if (value === '') {
    callback(new Error('请输入正确的手机号码'))
  } else if (!/^1((34[0-8])|(8\d{2})|(([35][0-35-9]|4[579]|66|7[35678]|9[1389])\d{1}))\d{7}$/.test(value)) {
    callback(new Error("请输入正确的手机号码"))
  } else {
    callback()
  }
}
// 身份证校验器
export function validateIDCard(rule: any, value: any, callback: any) {
  if (value === '') {
    callback(new Error('请输入正确的身份证号码'))
  } else if (!/^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/.test(value)) {
    callback(new Error("请输入正确的身份证号码"))
  } else {
    callback()
  }
}



