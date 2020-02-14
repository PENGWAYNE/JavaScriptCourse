/*
 * @Description: 函数
 * @Author: WaynePeng
 * @Date: 2020-01-22 16:06:25
 * @LastEditTime : 2020-01-24 14:33:50
 * @LastEditors  : WaynePeng
 */
// 函数声明
// 1. function
function foo() {
  // XXX
  return 'foo'
}
foo()
// 2. 函数表达式
let bar = function bar() {
  // 函数表达式可以是个匿名函数，此处命名可以用于函数内部调用，外部不可调用，还有就是方便排错，如果该函数错了会明确指出是bar函数错了，而不是一个匿名函数
  // xxx
  return 'bar'
}
bar() // 此处的bar为前面let定义的bar，后面的bar是无法在外部调用的
// 3. Function 构造函数
let add = new Function('x', 'y', 'return x + y') // 除最后一个参数其余全是传入参数，此方法很不方便

// 如果同一个函数被多次声明，后面的声明就会覆盖前面的声明
// 函数声明会被提升到文件头部
// 如果同时采用function命令和赋值语句声明同一个函数，最后总是采用赋值语句的定义
// eg：
var a = function() {
  // 如果使用let定义的话底下的函数声明就会报错，因为let在同一作用域自能有一次定义
  return 1
}
// 等同于
// var a
// a()
function a() {
  return 2
}
// 等同于
// a()
console.log(a()) // 1
console.log(a.name) // a 函数的name属性将会返回函数名称，对于函数表达式来说会返回函数表达式的名称
console.log(a.length) // 0 函数的length属性会返回函数的预期接收参数的个数
console.log(
  a.toString()
) /* function() { // 如果使用let定义的话底下的函数声明就会报错，因为let在同一作用域自能有一次定义
  return 1
} */
// 函数的toString()方法将返回函数的源码，包括注释，对于原生的函数则返回 function (){[native code]}

// 在es5中只存在两种作用域一种是全局作用域，一种是局部作用域，相同变量名，局部定义的变量会在局部会覆盖全局

// 函数执行时所在的作用域，是定义时的作用域，而不是调用时所在的作用域

// 运行时无论提供多少个参数（或者不提供参数），JavaScript 都不会报错。省略的参数的值就变为undefined。需要注意的是，函数的length属性与实际传入的参数个数无关，只反映函数预期传入的参数个数。但是，没有办法只省略靠前的参数，而保留靠后的参数。如果一定要省略靠前的参数，只有显式传入undefined

// 函数参数的传递方式
// 数参数如果是原始类型的值（数值、字符串、布尔值），传递方式是传值传递（passes by value）。这意味着，在函数体内修改参数值，不会影响到函数外部
// 如果函数参数是复合类型的值（数组、对象、其他函数），传递方式是传址传递（pass by reference）。也就是说，传入函数的原始值的地址，因此在函数内部修改参数，将会影响到原始值
function prop(x, y) {
  x = 2
  y[0] = 2
}

let x = 0
let obj = [1, 2]
prop(x, obj)
console.log('x', x) // 0
console.log('obj', obj) // [2, 2]

// 同名参数
function f(a, a) {
  console.log(a) // 2 => 如果有同名参数那么js将取最后一个出现的同名参数
  console.log(arguments[0]) // 1 => 如果要取第一个值，那么需要使用arguments，在正常模式下可以通过arguments取修改出去的参数值，在严格模式下不可修改
}

f(1, 2)

// #### 函数闭包 ####
// 闭包的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在

// 读取函数内部变量
function f1() {
  let i = 1
  return function() {
    console.log(i)
    return i
  }
}

let f2 = f1() // 1 => 此处可以读取到f1函数内部的i
f2() // 1

// 保持变量
function f3(num) {
  return function() {
    console.log(num++)
    return num
  }
}

let f4 = f3(0) // 因为f4会一直存在，而f4依赖f3所以f3在调用结束之后不会被回收
f4() // 0
f4() // 1
f4() // 2

// 注意，外层函数每次运行，都会生成一个新的闭包，而这个闭包又会保留外层函数的内部变量，所以内存消耗很大。因此不能滥用闭包，否则会造成网页的性能问题

// 立即执行函数
;(function() { // 如果立即执行函数前面还有函数必须要在前面的函数尾添加；或者在立即执行函数前加；否者编译器会认为后面是前面的参数而报错
  console.log('我被执行了')
})()
// 通常情况下，只对匿名函数使用这种“立即执行的函数表达式”。它的目的有两个：一是不必为函数命名，避免了污染全局变量；二是 IIFE 内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量

// eval命令接受一个字符串作为参数，并将这个字符串当作语句执行
let ev = 1
eval('ev = 2')
console.log(ev) // 2 // eval 没有单独的作用域，会使用外部作用域，容易引发安全问题

