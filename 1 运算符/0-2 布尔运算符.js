/*
 * @Description: 布尔运算符
 * @Author: WaynePeng
 * @Date: 2020-01-31 17:44:38
 * @LastEditTime : 2020-01-31 19:49:32
 * @LastEditors  : WaynePeng
 */
// 布尔运算符用于将表达式转为布尔值，一共包含四个运算符
// 取反运算符：!
// 且运算符：&&
// 或运算符：||
// 三元运算符：?:

// 1. 取反运算符（取反运算符是一个感叹号，用于将布尔值变为相反值，即true变成false，false变成true，对于非布尔值，取反运算符会将其转为布尔值）

// 以下六个值取反后为true，其他值都为false
undefined
null
false
0
NaN
'' // 空字符串

// ###### eg #######
!undefined // true
!null // true
!0 // true
!NaN // true
!"" // true

!54 // false
!'hello' // false
![] // false
!{} // false

// 如果对一个值连续做两次取反运算，等于将其转为对应的布尔值，与Boolean函数的作用相同。这是一种常用的类型转换的写法。
let x = 2
!!x
// 等同于
Boolean(x)

// 2. 且运算符（&&）(如果第一个运算子的布尔值为true，则返回第二个运算子的值（注意是值，不是布尔值）；如果第一个运算子的布尔值为false，则直接返回第一个运算子的值，且不再对第二个运算子求值)
console.log('###### 且运算符 ######')
let a = 1
let b
b = undefined && 'abc'
console.log(b) // undefined
b = 'abc' && undefined
console.log(b) // undefined
b = null && undefined
console.log(b) // null
b = undefined && null
console.log(b) // undefined
b = null && a ++
console.log(a) // 1 // 当且运算第一个运算子布尔值为false时将不执行第二个
console.log(b) // null
b = a++ && null
console.log(a) // 2
console.log(b) // null

// 3. 或运算符（||）(或运算符（||）也用于多个表达式的求值。它的运算规则是：如果第一个运算子的布尔值为true，则返回第一个运算子的值，且不再对第二个运算子求值；如果第一个运算子的布尔值为false，则返回第二个运算子的值,或运算符常用于为一个变量设置默认值)
console.log('###### 或运算符 ######')
let c = 1
let d
d = undefined || null
console.log(d) // null
d = undefined || 'abc'
console.log(d) // 'abc'
d = 'abc' || undefined
console.log(d) // 'abc'
d = c++ || null
console.log(c) // 2
console.log(d) // 1
d = null || c++
console.log(c) // 3
console.log(d) // 2

// 三元条件运算符（?:）(如果第一个表达式的布尔值为true，则返回第二个表达式的值，否则返回第三个表达式的值)
console.log('######### 三元条件运算符 #########')
let e = 1
console.log(1 + 1 == 2 ? 'abc' : 'def') // abc
console.log(1 + 2 == 2 ? 'abc' : 'def') // def
console.log(1 ? e++ : 'e') // 1
console.log(e) // 2
console.log('1' ? 'e' : e++) // e
console.log(e) // 2