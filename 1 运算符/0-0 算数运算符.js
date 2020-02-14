/*
 * @Description: 算数运算符
 * @Author: WaynePeng
 * @Date: 2020-01-24 17:09:16
 * @LastEditTime : 2020-01-27 19:36:33
 * @LastEditors  : WaynePeng
 */

// js提供10个基本的算数运算符

// 加法运算符：x + y
// 减法运算符： x - y
// 乘法运算符： x * y
// 除法运算符：x / y
// 指数运算符：x ** y
// 余数运算符：x % y
// 自增运算符：++x 或者 x++
// 自减运算符：--x 或者 x--
// 数值运算符： +x
// 负数值运算符：-x

// ##### 加法运算符 #####

// 加法运算符会对两个相加的运算子进行隐式转换
console.log('##### 加法运算符 #####')
console.log(1 + '1') // 11
console.log(1 + true) // 2
console.log('1' + true) // 1true

// 除了加法运算符，其他算术运算符（比如减法、除法和乘法）都不会发生重载。它们的规则是：所有运算子一律转为数值，再进行相应的数学运算

// 如果运算子是对象，必须先转成原始类型的值，然后再相加 （数组[]是一种特殊的对象）

// 对象转换为原始类型的时候会经过以下运算，先调用对象的valueOf方法然后调用toString方法我们可以进行人为的修改，使他返回我们想要的值

let obj = {
  a: 'abc'
}
let arr = [1, 2]

console.log(1 + arr) // 11, 2

console.log(1 + obj) // 1[object Object]
console.log(obj.valueOf()) // { a: 'abc' } => 一般情况下调用该方法会直接返回对象本身
console.log(obj.valueOf().toString()) // [object Object]

// 接下来我们以修改 valueOf 方法为例进行修改（也可以修改 toString 方法，或者都修改）

obj.valueOf = function() {
  return 123456
}

console.log(obj.valueOf()) // 123456
console.log(obj.valueOf().toString()) // 123456
console.log(1 + obj) // 123457 // ##### => 此处因为调用valueOf方法之后就已经返回一个原始的数据类型，所有后面不会调用toString方法了

// 关于 [] + {} 和 {} + []

// [] + {} // [object Object]
// [] + {} 首先是调用 [] 的 valueOf 返回 [], 然后调用 toString 返回 '', 然后识别 + ，对 '' 和 {} 执行加运算，调用 {} 的 valueOf 方法，返回 {} 然后调用 toString 返回 [Object Object] 所以结果是 [Object Object]
{
}
;+[] // 0
// {} + [] 在这个运算中 {} 别识别为一个空的 block，之后的 +[] 被识别为正号运算符，运算结果为 0

// #############  如果运算子是一个Date对象的实例，那么会优先执行toString方法 #############

// ###### 余数运算符 ######

console.log('###### 余数运算符 ######')

// 余数运算符（%）返回前一个运算子被后一个运算子除，所得的余数 (运算结果的正负号由第一个运算子的正负号决定)

console.log(-5 % 2) // -1
console.log(5 % -2) // 1

// 为了得到负数的正确余数值，可以先使用绝对值函数

function isOdd(n) {
  return Math.abs(n % 2) === 1
}

console.log(isOdd(-5)) // true
console.log(isOdd(-4)) // false

// 浮点数也可以进行余数运算，但是浮点数是不精确的值，所以运算结果也不准确

// ###### 自增和自减运算符 ######

console.log('###### 自增和自减运算符 ######')

// 运算之后，变量的值发生变化，这种效应叫做运算的副作用。自增和自减运算符是仅有的两个具有副作用的运算符，其他运算符都不会改变变量的值 (++x, x++, --x, x--)

// ###### 数值运算符，负数值运算符 ######

console.log('###### 数值运算符，负数值运算符 ######')

console.log('###### 数值运算符，负数值运算符 ######')

// 数值运算符的作用在于可以将任何值转为数值( +x, -x)

console.log(+[]) // 0
console.log(+{}) // NaN
console.log(+true) // 1
console.log(-[]) // -0
console.log(-{}) // NaN
console.log(-true) // -1

// ##### 指数运算符 #####

console.log('##### 指数运算符 #####')

// 指数运算符（**）完成指数运算，前一个运算子是底数，后一个运算子是指数

console.log(2 ** 4) // 16

// 需要注意的是指数运算符是右结合，而不是左结合。即多个指数运算符连用时，先进行最右边的计算

console.log(2 ** (4 ** 2)) // 65536 => 2 ** (4 ** 2)

// ###### 赋值运算符 ######

console.log('##### 赋值运算符 #####')

// 将 1 赋值给变量 x
let x = 1
// 将变量 y 的值赋值给变量 x
let x = y

// 赋值运算符还可以与其他运算符结合，形成变体。下面是与算术运算符的结合。

// 等同于 x = x + y
x += y

// 等同于 x = x - y
x -= y

// 等同于 x = x * y
x *= y

// 等同于 x = x / y
x /= y

// 等同于 x = x % y
x %= y

// 等同于 x = x ** y
x **= y

// 与位运算符结合

// 等同于 x = x >> y
x >>= y

// 等同于 x = x << y
x <<= y

// 等同于 x = x >>> y
x >>>= y

// 等同于 x = x & y
x &= y

// 等同于 x = x | y
x |= y

// 等同于 x = x ^ y
x ^= y