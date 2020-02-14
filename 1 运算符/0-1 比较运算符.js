/*
 * @Description: 比较运算符
 * @Author: WaynePeng
 * @Date: 2020-01-27 19:37:23
 * @LastEditTime : 2020-01-31 17:43:50
 * @LastEditors  : WaynePeng
 */
// 比较运算符用于比较两个值的大小，然后返回一个布尔值，表示是否满足指定的条件

// 比较运算符可以比较各种类型的值，不仅仅是数值

// JavaScript 一共提供了8个比较运算符。
// > 大于运算符
// < 小于运算符
// <= 小于或等于运算符
// >= 大于或等于运算符
// == 相等运算符
// === 严格相等运算符
// != 不相等运算符
// !== 严格不相等运算符

// 相等比较和非相等比较。两者的规则是不一样的，对于非相等的比较，算法是先看两个运算子是否都是字符串，如果是的，就按照字典顺序比较（实际上是比较 Unicode 码点）；否则，将两个运算子都转成数值，再比较数值的大小

console.log(2 > 1) // true
console.log(true > false) // true
console.log('abc' > 'Abc') // true
let arr1 = [1]
let arr2 = [1]
console.log(arr1 > arr2) // false
console.log(arr1 == 1) // true
let obj = {
  index: 1
}
console.log(obj == '[object Object]') // true
console.log(arr1 > obj) // false // 比较Unicode排序（JavaScript 引擎内部首先比较首字符的 Unicode 码点。如果相等，再比较第二个字符的 Unicode 码点）

// 由于所有字符都有 Unicode 码点，因此汉字也可以比较。

console.log('大' > '小') // false

console.log('######## 非相等运算符 #########')
console.log('####### 原始类型比较 #######')
// 如果两个运算子之中，至少有一个不是字符串，需要分成以下两种情况
// 1. 原始类型（如果两个运算子都是原始类型的值，则是先转成数值再比较）

console.log('5' > 4) // true Number('5') => 5

// 这里需要注意与NaN的比较。任何值（包括NaN本身）与NaN比较，返回的都是false
1 > NaN // false
1 <= NaN // false
'1' > NaN // false
'1' <= NaN // false
NaN > NaN // false
NaN <= NaN // false

console.log('####### 对象的比较 #######')
// 2. 对象（如果运算子是对象，会转为原始类型的值）
// 对象转换成原始类型的值，算法是先调用valueOf方法；如果返回的还是对象，再接着调用toString方法

let obj1 = {
  a: 1,
  valueOf: function() {
    return 1
  }
}

let obj2 = {
  a: 2,
  valueOf: function() {
    return 2
  }
}

let obj3 = {
  a: 2,
  valueOf: function() {
    return 2
  }
}

console.log(obj1 > obj2) // false
console.log(obj2 == obj3) // false // 对象的比较只有非相等运算符才会转换为基本类型去比较

// 严格相等运算符
console.log('###### 严格相等运算符 #######')
// JavaScript 提供两种相等运算符：==和===。

// 简单说，它们的区别是相等运算符（==）比较两个值是否相等，严格相等运算符（===）比较它们是否为“同一个值”。如果两个值不是同一类型，严格相等运算符（===）直接返回false，而相等运算符（==）会将它们转换成同一个类型，再用严格相等运算符进行比较

// 1. 不同类型
console.log('2' === 2) // false // typeof '2' => String , typeof 2 => Number
// 2. 同一类型
console.log(1 === 0x1) // true // 同为number类型，10进制和16进制的1相等
console.log(NaN === NaN) // false // NaN 不等于任何值
// 3. 复合类型（两个复合类型（对象、数组、函数）的数据比较时，不是比较它们的值是否相等，而是比较它们是否指向同一个地址）
let f1 = []
let f2 = f1
console.log([] === []) // false
console.log({} === {}) // false
console.log(f1 === f2) // true
// 4. undefined和null与自身严格相等
let empty1
let empty2
console.log(undefined === undefined) // true
console.log(null === null) // true
console.log(empty1 === empty2) // true // 因为未赋值的变量值为undefined，所以他们可以相等
console.log(empty1 === undefined) // true

// 严格不相等运算符(严格相等运算符有一个对应的“严格不相等运算符”（!==），它的算法就是先求严格相等运算符的结果，然后返回相反值)
console.log('####### 严格不相等运算符 #######')

// 相等运算符(相等运算符用来比较相同类型的数据时，与严格相等运算符完全一样,比较不同类型的数据时，相等运算符会先将数据进行类型转换，然后再用严格相等运算符比较)
console.log('######### 相等运算符 #########')

// 1. 原始类型值(原始类型的值会转换成数值再进行比较)
console.log('1' == 1) // true
console.log(true == '1') // true
console.log('' == 0) // true

// 2. 对象与原始类型值比较(对象（这里指广义的对象，包括数组和函数）与原始类型的值比较时，对象转换成原始类型的值，再进行比较)
let obj4 = {
  valueOf: function() {
    return 2
  }
}
console.log(obj4 == 2) // true

// 3. undefined 和 null (undefined和null与其他类型的值比较时，结果都为false，它们互相比较时结果为true)
false == null // false
false == undefined // false
0 == null // false
0 == undefined // false
undefined == null // true

// 不相等运算符 (相等运算符有一个对应的“不相等运算符”（!=），它的算法就是先求相等运算符的结果，然后返回相反值)
