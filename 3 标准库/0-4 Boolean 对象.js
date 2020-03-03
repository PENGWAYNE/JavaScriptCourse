/*
 * @Description: Boolean 对象
 * @Author: WaynePeng
 * @Date: 2020-03-02 21:35:39
 * @LastEditTime: 2020-03-02 21:47:59
 * @LastEditors: WaynePeng
 */
// 1. 概述：Boolean对象是 JavaScript 的三个包装对象之一。作为构造函数，它主要用于生成布尔值的包装对象实例
let boolean = new Boolean(true)
console.log(boolean) // [Boolean: true]
console.log(typeof boolean) // object

// ⚠️注意：false对应的包装对象实例，*** 布尔运算结果 *** 也是true, 因为对象的布尔运算结果都是true
console.log(new Boolean(false)) // [Boolean: false]
console.log(!!new Boolean(false)) // true

// 2. Boolean 函数的类型转换作用 => Boolean对象除了可以作为构造函数，还可以单独使用，将任意值转为布尔值。这时Boolean就是一个单纯的工具方法
console.log('############### Boolean 函数的类型转换作用 ###############')
// Boolean(undefined) // false
// Boolean(null) // false
// Boolean(0) // false
// Boolean('') // false
// Boolean(NaN) // false

// 除了以上几种其余全部转换为true

// 使用双重的否运算符（!）也可以将任意值转为对应的布尔值
// !!undefined // false
// !!null // false
// !!0 // false
// !!'' // false
// !!NaN // false