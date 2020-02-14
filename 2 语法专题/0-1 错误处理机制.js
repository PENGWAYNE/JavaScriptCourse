/*
 * @Description: 错误处理机制
 * @Author: WaynePeng
 * @Date: 2020-02-09 20:36:04
 * @LastEditTime : 2020-02-09 21:44:00
 * @LastEditors  : WaynePeng
 */
// Error 实例对象 (JavaScript 解析或运行时，一旦发生错误，引擎就会抛出一个错误对象。JavaScript 原生提供Error构造函数，所有抛出的错误都是这个构造函数的实例)
console.log('######## Error 实例对象 ########')

// (1) throw
// throw语句的作用是手动中断程序执行，抛出一个错误
x = -1

if (x <= 0) {
  // throw new Error('x 必须为正数') // 注释掉是因为此处会抛出错误，使下面的代码无法运行
}

// (2) try...catch
// 一旦发生错误，程序就中止执行了。JavaScript 提供了try...catch结构，允许对错误进行处理，选择是否往下执行
try {
  throw new Error('出错了!')
} catch (e) {
  console.log(e.name + ': ' + e.message)
  console.log('stack', e.stack)
}

// finally
// try...catch结构允许在最后添加一个finally代码块，表示不管是否出现错误，都必需在最后运行的语句
let count = 0
function countUp() {
  try {
    return count
  } finally {
    count++
  }
}
console.log(countUp()) // 0
console.log(count) // 1
