/*
 * @Description: console 对象与控制台
 * @Author: WaynePeng
 * @Date: 2020-02-09 21:43:50
 * @LastEditTime : 2020-02-09 21:50:37
 * @LastEditors  : WaynePeng
 */
// console.log方法支持以下占位符，不同类型的数据必须使用对应的占位符
// %s 字符串
// %d 整数
// %i 整数
// %f 浮点数
// %o 对象的链接
// %c CSS 格式字符串
var number = 11 * 9
var color = 'red'

console.log('%d %s balloons', number, color) // 99 red balloons

// console.warn()，console.error()
// warn方法和error方法也是在控制台输出信息，它们与log方法的不同之处在于，warn方法输出信息时，在最前面加一个黄色三角，表示警告；error方法输出信息时，在最前面加一个红色的叉，表示出错。同时，还会高亮显示输出文字和错误发生的堆栈。其他方面都一样

let languages = [
  { name: 'JavaScript', fileExtension: '.js' },
  { name: 'TypeScript', fileExtension: '.ts' },
  { name: 'CoffeeScript', fileExtension: '.coffee' }
]
console.table(languages)
// 对于某些复合类型的数据，console.table方法可以将其转为表格显示

console.count() // default: 1
console.count() // default: 2
// count方法用于计数，输出它被调用了多少次

// 详情连接 🔗 https://wangdoc.com/javascript/features/console.html