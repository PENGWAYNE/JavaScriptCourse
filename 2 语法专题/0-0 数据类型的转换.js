/*
 * @Description: 数据类型的转换
 * @Author: WaynePeng
 * @Date: 2020-02-04 19:11:06
 * @LastEditTime : 2020-02-09 20:00:22
 * @LastEditors  : WaynePeng
 */
// JavaScript 是一种动态类型语言，变量没有类型限制，可以随时赋予任意值，虽然变量的数据类型是不确定的，但是各种运算符对数据类型是有要求的。如果运算符发现，运算子的类型与预期不符，就会自动转换类型

// 强制转换 (强制转换主要指使用Number()、String()和Boolean()三个函数，手动将各种类型的值，分别转换成数字、字符串或者布尔值)
console.log('######## 强制转换 ########')

// Number() (可以将任意类型的值转化成数值)
console.log('######## Number() ########')

// (1)原始类型值

// 数值：转换后还是原来的值
Number(324) // 324
// 字符串：如果可以被解析为数值，则转换为相应的数值
Number('324') // 324
// 字符串：如果不可以被解析为数值，返回 NaN
Number('324abc') // NaN
// 空字符串转为0
Number('') // 0
// 布尔值：true 转成 1，false 转成 0
Number(true) // 1
Number(false) // 0
// undefined：转成 NaN
Number(undefined) // NaN
// null：转成0
Number(null) // 0
// Number函数将字符串转为数值，要比parseInt函数严格很多。基本上，只要有一个字符无法转成数值，整个字符串就会被转为NaN
console.log(Number('12ab')) // NaN

// (2)对象 (简单的规则是，Number方法的参数是对象时，将返回NaN，除非是包含单个数值的数组)

Number({a: 1}) // NaN
Number([1, 2, 3]) // NaN
Number([5]) // 5
// 之所以会这样，是因为Number背后的转换规则比较复杂。

// 第一步，调用对象自身的valueOf方法。如果返回原始类型的值，则直接对该值使用Number函数，不再进行后续步骤

// 第二步，如果valueOf方法返回的还是对象，则改为调用对象自身的toString方法。如果toString方法返回原始类型的值，则对该值使用Number函数，不再进行后续步骤

// 第三步，如果toString方法返回的是对象，就报错

// String() (可以将任意类型的值转化成字符串)
console.log('########### String() ###########')
// (1) 原始类型值

// 数值：转为相应的字符串
console.log(String(123))
console.log(String(NaN))
// 字符串：转换后还是原来的值
console.log(String('string'))
// 布尔值：true转为字符串"true"，false转为字符串"false"
console.log(String(true))
console.log(String(false))
// undefined：转为字符串"undefined"
console.log(String(undefined))
// null：转为字符串"null"
console.log(String(null))

// (2) 对象 (参数如果是对象，返回一个类型字符串；如果是数组，返回该数组的字符串形式)
console.log(String({a: 1})) // [object Object]
console.log(String([1, 2, 3])) // '1,2,3'

// String方法背后的转换规则，与Number方法基本相同，只是互换了valueOf方法和toString方法的执行顺序

// 先调用对象自身的toString方法。如果返回原始类型的值，则对该值使用String函数，不再进行以下步骤

// 如果toString方法返回的是对象，再调用原对象的valueOf方法。如果valueOf方法返回原始类型的值，则对该值使用String函数，不再进行以下步骤

// 如果valueOf方法返回的是对象，就报错

// Boolean() (可以将任意类型的值转为布尔值)
console.log('######### Boolean() #########')
// 它的转换规则相对简单：除了以下五个值的转换结果为false，其他的值全部为true
Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean(NaN) // false
Boolean('') // false

// 所有对象（包括空对象）的转换结果都是true，甚至连false对应的布尔对象new Boolean(false)也是true
Boolean({}) // true
Boolean([]) // true
Boolean(new Boolean(false)) // true

// 所有对象的布尔值都是true，这是因为 JavaScript 语言设计的时候，出于性能的考虑，如果对象需要计算才能得到布尔值，对于obj1 && obj2这样的场景，可能会需要较多的计算。为了保证性能，就统一规定，对象的布尔值为true

