/*
 * @Description: Math 对象
 * @Author: WaynePeng
 * @Date: 2020-03-18 11:51:45
 * @LastEditTime: 2020-03-19 11:40:13
 * @LastEditors: WaynePeng
 */
// Math是 JavaScript 的原生对象，提供各种数学功能。该对象不是构造函数，不能生成实例，所有的属性和方法都必须在Math对象上调用

// 1. 静态属性
console.log('################ 静态属性 #################')
// Math对象的静态属性，提供以下一些数学常数 (这些属性都是只读的，不能修改)

// Math.E：常数e
// Math.LN2：2 的自然对数
// Math.LN10：10 的自然对数
// Math.LOG2E：以 2 为底的e的对数
// Math.LOG10E：以 10 为底的e的对数
// Math.PI：常数π
// Math.SQRT1_2：0.5 的平方根
// Math.SQRT2：2 的平方根

//  2. 静态方法
console.log('################# 静态方法 ###################')
// Math对象提供以下一些静态方法

// (1). Math.abs()：绝对值 => 返回参数值的绝对值
console.log(Math.abs(1)) // 1
console.log(Math.abs(-1)) // 1

// (2). Math.ceil()：向上取整 => 返回大于参数值的最小整数（天花板值）
console.log(Math.ceil(3.3)) // 4
console.log(Math.ceil(-3.3)) // -3

// Math.floor()：向下取整 => 返回小于参数值的最大整数（地板值）
console.log(Math.floor(3.6)) // 3
console.log(Math.floor(-3.6)) // -4

// 这两个方法可以结合起来，实现一个总是返回数值的整数部分的函数
function ToInteger(x) {
  x = Number(x);
  return x < 0 ? Math.ceil(x) : Math.floor(x);
}
console.log(ToInteger(3.5)) // 3
console.log(ToInteger(-4.2)) // -4

// Math.max()：最大值 => 返回参数之中最大的那个值
console.log(Math.max(3, 4, 5, 6, 2, 1)) // 6

// Math.min()：最小值 => 返回最小的那个值
console.log(Math.min(3, 4, 5, 6, 2, 1)) // 1

// 如果参数为空, Math.min返回Infinity, Math.max返回-Infinity
console.log(Math.max()) // -Infinity
console.log(Math.min()) // Infinity

// Math.pow()：指数运算 => 返回以第一个参数为底数、第二个参数为幂的指数值
// 等同于 2 ** 2
console.log(Math.pow(2, 4)) // 16

// Math.sqrt()：平方根 => 返回参数值的平方根。如果参数是一个负值，则返回NaN
console.log(Math.sqrt(4)) // 2
console.log(Math.sqrt(-4)) // NaN

// Math.log()：自然对数 => 返回以e为底的自然对数值
console.log(Math.log(Math.E)) // 1
console.log(Math.log(10)) // 2.302585092994046

// Math.exp()：e的指数 => 返回常数e的参数次方
console.log(Math.exp(1)) // 2.718281828459045
console.log(Math.exp(2)) // 7.38905609893065

// Math.round()：四舍五入 => 用于四舍五入
console.log(Math.round(3.4)) // 3
console.log(Math.round(3.5)) // 4

// ⚠️ 注意，它对负数的处理（主要是对0.5的处理）
console.log(Math.round(-1.1)) // -1
console.log(Math.round(-1.5)) // -1
// ********************************
// 负数可以这样处理
let a = -1.5
a = Math.abs(a)
a = -(Math.round(a))
console.log(a) // -2
// ********************************
console.log(Math.round(-1.6)) // -2

// Math.random()：随机数 => 返回0到1之间的一个伪随机数，可能等于0，但是一定小于1
console.log(Math.random()) // [0, 1) 之间的随机数

// 任意范围的随机数生成函数如下。

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(getRandomArbitrary(1.5, 6.5)) // [1.5, 6.5] 之间的随机数

// 3. 三角函数方法
// Math对象还提供一系列三角函数方法

// Math.sin()：返回参数的正弦（参数为弧度值）
// Math.cos()：返回参数的余弦（参数为弧度值）
// Math.tan()：返回参数的正切（参数为弧度值）
// Math.asin()：返回参数的反正弦（返回值为弧度值）
// Math.acos()：返回参数的反余弦（返回值为弧度值）
// Math.atan()：返回参数的反正切（返回值为弧度值）

console.log(Math.sin(0)) // 0
console.log(Math.cos(0)) // 1
console.log(Math.tan(0)) // 0
console.log(Math.sin(Math.PI / 2)) // 1
console.log(Math.asin(1)) // 1.5707963267948966
console.log(Math.acos(1)) // 0
console.log(1) // 0.7853981633974483