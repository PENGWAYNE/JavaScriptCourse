/*
 * @Description: 其他运算符，运算顺序
 * @Author: WaynePeng
 * @Date: 2020-02-01 18:58:20
 * @LastEditTime : 2020-02-01 19:14:02
 * @LastEditors  : WaynePeng
 */
// 1. void 运算符 (void运算符的作用是执行一个表达式，然后不返回任何值，或者说返回undefined)
// 写法： 1. void 0   2. void(0)
// void运算符的主要用途是浏览器的书签工具（Bookmarklet），以及在超级链接中插入代码防止网页跳转

// eg: <a href="javascript: void(f())">文字</a>

// 2. , 逗号运算符 (逗号运算符用于对两个表达式求值，并返回后一个表达式的值, 逗号运算符的一个用途是，在返回一个值之前，进行一些辅助操作)
let a = (console.log('Hi!'), true)
console.log(a)

// 3. 运算顺序
// 运算符的优先级从高到低依次为：小于等于（<=)、严格相等（===）、或（||）、三元（?:）、等号（=）

// 4. 圆括号的作用 (圆括号（）可以用来提高运算的优先级，因为它的优先级是最高的，即圆括号中的表达式会第一个运算)
let b = (4 + 5) * 6
console.log(b) // 54
// 圆括号只会提升优先级，不会直接求值

// 函数放在圆括号中，会返回函数本身。如果圆括号紧跟在函数的后面，就表示调用函数
function level() {
  return 1
}
(level) // function level(){return 1}
console.log(level()) // 1

