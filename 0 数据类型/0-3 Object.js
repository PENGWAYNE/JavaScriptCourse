/*
 * @Description: 对象
 * @Author: WaynePeng
 * @Date: 2020-01-19 16:13:51
 * @LastEditTime : 2020-02-13 15:31:48
 * @LastEditors  : WaynePeng
 */
// 对象的所有键名都是字符串（ES6 又引入了 Symbol 值也可以作为键名）如果键名是数值，会被自动转为字符串
// 对象的每一个键名又称为“属性”（property），它的“键值”可以是###任何数据类型###。如果一个属性的值为函数，通常把这个属性称为“方法”，它可以像函数那样调用
let obj = {
  name: 'WaynePeng',
  1234: 'value',
  'a b': 'ab', // 键名含有空格和开头为数字用引号
  age: function(value) {
    return value * 2
  }
}
console.log(obj[1234]) // value
console.log(obj.age(2)) // 4

// 如果不同的变量名指向同一个对象，那么它们都是这个对象的引用，也就是说指向同一个内存地址。修改其中一个变量，会影响到其他所有变量
let obj1 = obj
obj1['a b'] = 'abc'
console.log(obj['a b']) // abc
console.log(obj1['a b']) // abc

// 如果要解释为对象，最好在大括号前加上圆括号
console.log(({ foo: 123 })) // { foo: 123 }

// 读取对象的属性，有两种方法，一种是使用点运算符，还有一种是使用方括号运算符
// 如果使用方括号运算符，键名必须放在引号里面，否则会被当作变量处理
// 方括号运算符内部还可以使用表达式。
obj['hello' + ' world'] // 等价于 obj['helloworld]
obj[3 + 3] // 等价于 obj[6]

// 查看一个对象本身的所有属性，可以使用Object.keys方法
console.log(Object.keys(obj)) // [ '1234', 'name', 'a b', 'age' ]

// 查看一个对象本身的所有键值，可以使用Object.values方法
console.log(Object.values(obj)) // [ 'value', 'WaynePeng', 'abc', [Function: age] ]

// delete命令用于删除对象的属性，删除成功后返回true
// 删除一个不存在的属性，delete不报错，而且返回true
// 只有一种情况，delete命令会返回false，那就是该属性存在，且不得删除
delete obj.name
console.log(Object.keys(obj)) // [ '1234', 'a b', 'age' ]

// in运算符用于检查对象是否包含某个属性（注意，检查的是键名，不是键值），如果包含就返回true，否则返回false
// 但是in不能识别哪些属性是对象自身的，哪些属性是继承的 （缺陷）
console.log('age' in obj) // true
console.log('name' in obj) // false
// 可以使用对象的hasOwnProperty方法判断一下，是否为对象自身的属性 是返回true
console.log(obj.hasOwnProperty('toString')) // false

// for...in循环用来遍历一个对象的全部属性
// 它遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性。
// 它不仅遍历对象自身的属性，还遍历继承的属性
for (let i in obj) {
  // 一般对象遍历都会使用 hasOwnProperty 来判断是否是自身的属性
  if (obj.hasOwnProperty(i)) {
    console.log(i) // key
  }
}

// with 它的作用是操作同一个对象的多个属性时，提供一些书写的方便
// with 语句不被建议使用，因为无法判断对象是否来改键值，只有运行时去判断，会拖慢运行速度，对于较长的对象'链'建议使用中间变量
with (obj) {
  age = 'test'
  test = '测试' // 如果该对象不包含此键则会创造一个当前作用域的全局变量
}
// 等价于 obj.age = test
// 不能操作数字键，不能操作特殊键eg： 'a b'，不能给不存在的键赋值
console.log(Object.values(obj)) // [ 'value', 'abc', 'test' ]
console.log(test) // 测试

