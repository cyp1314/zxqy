// any unknown 一级类型，包含所有类型 顶级类型  unknown 没有办法读取属性和方法
// Object
// String Number Booler
// string number booler
// never

import { readonly } from 'vue'

// 原型链顶端是 Object 和function
// Object 类似于 any
let a:Object = 123
a = {}
a= "a"
a = true

let b:object = new Array() // 数组 对象 函数

let c:{} = 2 // 等同于 new Object，字面量的类型无法增加属性和修改内容

interface User{
  add:string
}
interface Stu{
  name?:string // 可选属性
  readonly age?:number // 只读属性，只能允许什么，不允许修改内容
 say?:(name:string) => string
  [key:string]:any // 索引签名
}

let s1:Stu = {
  name:'1',
  age:12,
  add:'aaa',
  say(name:string) {
    return 'hi '+name
  }
}
let x = s1.say
console.log(s1.say)
// s1.say = () =>{

// }
// s1.age = 12 // 无法为“age”赋值，因为它是只读属性

interface A extends Stu{

}

interface Fn{
  (name:string):Stu[]
}
let p1 = "p1"
const MyFn:Fn = (p1) =>{
  let t:Stu = {
    name:'1'
  }
  let s:Stu[] = new Array()
  s.push(t)
  return s
}