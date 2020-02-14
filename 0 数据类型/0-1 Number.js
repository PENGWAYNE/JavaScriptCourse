/*
 * @Description: 数值
 * @Author: WaynePeng
 * @Date: 2020-01-14 23:20:55
 * @LastEditTime : 2020-02-01 18:29:43
 * @LastEditors  : WaynePeng
 */
// ########   数值   ##########
// parseInt(string, radix)  数值 / 指数  ---> 将字符串转为整数
// 字符串转为整数的时候，是一个个字符依次转换，如果遇到不能转为数字的字符，就不再进行下去，返回已经转好的部分。
parseInt('8a') // 8
parseInt('12**') // 12
parseInt('12.34') // 12
parseInt('15e2') // 15
parseInt('15px') // 15
console.log(parseInt(123, 2))
// 如果字符串的第一个字符不能转化为数字（后面跟着数字的正负号除外），返回NaN
parseInt('abc') // NaN
parseInt('.3') // NaN
parseInt('') // NaN
parseInt('+') // NaN
parseInt('+1') // 1

// parseInt的返回值只有两种可能，要么是一个十进制整数，要么是NaN。

// 如果字符串以0x或0X开头，parseInt会将其按照十六进制数解析。
parseInt('0x10') // 16

// 如果字符串以0开头，将其按照10进制解析。
parseInt('011') // 11

// parseFloat()  ---> 将一个字符串转为浮点数

// 如果字符串包含不能转为浮点数的字符，则不再进行往后转换，返回已经转好的部分
parseFloat('512test') // 512

// 如果参数不是字符串，或者字符串的第一个字符不能转化为浮点数，则返回NaN
parseFloat([]) // NaN
parseFloat('FF2') // NaN
parseFloat('') // NaN

// isNaN
// isNaN方法可以用来判断一个值是否为NaN
isNaN(NaN) // true
isNaN(123) // false

// 使用isNaN之前，最好判断一下数据类型
// isNaN只对数值有效，如果传入其他值，会被先转成数值。比如，传入字符串的时候，字符串会被先转成NaN，所以最后返回true，这一点要特别引起注意。也就是说，isNaN为true的值，有可能不是NaN，而是一个字符串
isNaN('Hello') // true
// 相当于
isNaN(Number('Hello')) // true

// isFinite()
// isFinite方法返回一个布尔值，表示某个值是否为正常的数值。

isFinite(Infinity) // false
isFinite(-Infinity) // false
isFinite(NaN) // false
isFinite(undefined) // false
isFinite(null) // true
isFinite(-1) // true
// 除了Infinity、-Infinity、NaN和undefined这几个值会返回false，isFinite对于其他的数值都会返回true

// 数值精度
// 根据国际标准 IEEE 754，JavaScript 浮点数的64个二进制位，从最左边开始，是这样组成的。

// 第1位：符号位，0表示正数，1表示负数
// 第2位到第12位（共11位）：指数部分
// 第13位到第64位（共52位）：小数部分（即有效数字）
// 符号位决定了一个数的正负，指数部分决定了数值的大小，小数部分决定了数值的精度。

// 指数部分一共有11个二进制位，因此大小范围就是0到2047。IEEE 754 规定，如果指数部分的值在0到2047之间（不含两个端点），那么有效数字的第一位默认总是1，不保存在64位浮点数之中。也就是说，有效数字这时总是1.xx...xx的形式，其中xx..xx的部分保存在64位浮点数之中，最长可能为52位。因此，JavaScript 提供的有效数字最长为53个二进制位。

// 正零和负零
// 唯一有区别的场合是，+0或-0当作分母，返回的值是不相等的。

// NaN
// NaN是 JavaScript 的特殊值，表示“非数字”（Not a Number），主要出现在将字符串解析成数字出错的场合。
// 1. 0 / 0 = NaN
// 2. NaN与任何数（包括它自己）的运算，得到的都是NaN
// 3. NaN不等于任何值，包括它本身