/*
 * @Description: JSON 对象
 * @Author: WaynePeng
 * @Date: 2020-04-07 17:11:56
 * @LastEditTime: 2020-04-07 18:04:50
 * @LastEditors: WaynePeng
 */
// 1. JSON 格式
console.log('################# JSON 格式 #################')

// JSON 对值的类型和格式有严格的规定:

// 复合类型的值只能是数组或对象，不能是函数、正则表达式对象、日期对象
// 原始类型的值只有四种：字符串、数值（必须以十进制表示）、布尔值和null（不能使用NaN, Infinity, -Infinity和undefined）
// 字符串必须使用双引号表示，不能使用单引号
// 对象的键名必须放在双引号里面
// 数组或对象最后一个成员的后面，不能加逗号

// 2. JSON 对象 => JSON对象是 JavaScript 的原生对象，用来处理 JSON 格式数据。它有两个静态方法：JSON.stringify()和JSON.parse()
console.log('################## JSON 对象 ###################')

// 3. JSON.stringify() => JSON.stringify方法用于将一个值转为 JSON 字符串。该字符串符合 JSON 格式，并且可以被JSON.parse方法还原
console.log('###################### JSON.stringify() #######################')

// (1). 基本用法
console.log(JSON.stringify({ name: '张三' })) // {"name":"张三"}
// ⚠️注意，对于原始类型的字符串，转换结果会带双引号
console.log(JSON.stringify('foo') === 'foo') // false
console.log(JSON.stringify('foo') === '"foo"') // true

// 上面代码中，字符串foo，被转成了"\"foo\""。这是因为将来还原的时候，内层双引号可以让 JavaScript 引擎知道，这是一个字符串，而不是其他类型的值
// 比如
console.log(JSON.stringify(false)) // "false"
console.log(JSON.stringify('false')) // "\"false\""

// 上面代码中，如果不是内层的双引号，将来还原的时候，引擎就无法知道原始值是布尔值还是字符串

// ⚠️注意，如果对象的属性是undefined、函数或 XML 对象，该属性会被JSON.stringify过滤
let obj = {
  a: undefined,
  b: function () {},
}

console.log(JSON.stringify(obj)) // {}

// ⚠️注意，如果数组的成员是undefined、函数或 XML 对象，则这些值被转成null
let arr = [undefined, function () {}]
console.log(JSON.stringify(arr)) // [null,null]

// ⚠️注意，正则对象会被转成空对象
console.log(JSON.stringify(/a/)) // {}

// ⚠️注意，JSON.stringify方法会忽略对象的不可遍历的属性
let obj1 = {}
Object.defineProperties(obj1, {
  foo: {
    value: 1,
    enumerable: true,
  },
  bar: {
    value: 2,
    enumerable: false,
  },
})

console.log(JSON.stringify(obj1)) // {"foo":1}

// (2). 第二个参数 => JSON.stringify方法还可以接受一个数组，作为第二个参数，指定需要转成字符串的属性
let obj2 = {
  a: '123',
  b: '234',
  c: '345'
}
console.log(JSON.stringify(obj2, ['a', 'c'])) // {"a":"123","c":"345"}
// 上面代码中，JSON.stringify方法的第二个参数指定，只转 a 和 c 两个属性

// ⚠️注意，这个类似白名单的数组，只对对象的属性有效，对数组无效
console.log(JSON.stringify(['a', 'b'], ['0'])) // ["a","b"]

// ⚠️第二个参数还可以是一个函数，用来更改JSON.stringify的返回值
let obj3 = {
  a: '123',
  b: 234,
  c: 345
}
console.log(JSON.stringify(obj3, function(key, value) {
  if(typeof value === 'number') {
    value = value * 2
  }
  return value
}))
// {"a":"123","b":468,"c":690}

// ⚠️注意，如果处理函数返回undefined或没有返回值，则该属性会被忽略