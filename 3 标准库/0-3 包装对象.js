/*
 * @Description: 包装对象
 * @Author: WaynePeng
 * @Date: 2020-03-01 18:34:25
 * @LastEditTime: 2020-03-02 19:15:07
 * @LastEditors: WaynePeng
 */
// 1. 对象是 JavaScript 语言最主要的数据类型，三种原始类型的值——数值、字符串、布尔值——在一定条件下，也会自动转为对象，也就是原始类型的“包装对象”（wrapper）

// 所谓“包装对象”，指的是与数值、字符串、布尔值分别相对应的Number、String、Boolean三个原生对象。这三个原生对象可以把原始类型的值变成（包装成）对象
console.log('############ 包装对象 ###########')

let number = new Number(123)
console.log(number) // [Number: 123]
let string = new String('123')
console.log(string) // [String: '123']
let boolean = new Boolean(true)
console.log(boolean) // [Boolean: true]

// 包装对象的值与原始类型值不相等
console.log(number === 123) // false
console.log(string === '123') // false
console.log(boolean === true) // false

// 包装对象的设计目的，首先是使得“对象”这种类型可以覆盖 JavaScript 所有的值，整门语言有一个通用的数据模型，其次是使得原始类型的值也有办法调用自己的方法

// Number、String和Boolean这三个原生对象，如果不作为构造函数调用（即调用时不加new），而是作为普通函数调用，常常用于将任意类型的值转为数值、字符串和布尔值
console.log(Number(123) === 123) // true
console.log(String('123') === '123') // true
console.log(Boolean(false) === false) // true

// 作为构造函数使用（带有new）时，可以将原始类型的值转为对象；作为普通函数使用时（不带有new），可以将任意类型的值，转为原始类型的值

// 2. 实例方法 => 两种它们共同具有、从Object对象继承的方法：valueOf()和toString()
console.log('########### 实例方法 ###########')
// (1). valueOf() => valueOf()方法返回包装对象实例对应的原始类型的值
console.log(number.valueOf() === 123) // true
console.log(string.valueOf() === '123') // true
console.log(boolean.valueOf() === true) // true

// (2). toString() => toString()方法返回对应的字符串形式
console.log(typeof number.toString()) // 123 => string
console.log(typeof string.toString()) // 123 => string
console.log(typeof boolean.toString()) // true => string

// 3. 原始类型与实例对象的自动转换 => 某些场合，原始类型的值会自动当作包装对象调用，即调用包装对象的属性和方法。这时，JavaScript 引擎会自动将原始类型的值转为包装对象实例，****并在使用后立刻销毁实例 ****

// 字符串可以调用length属性，返回字符串的长度
console.log('abc'.length) // 3  => 相当于 new String('abc').length
// abc是一个字符串，本身不是对象，不能调用length属性。JavaScript 引擎自动将其转为包装对象，在这个对象上调用length属性。调用结束后，这个临时对象就会被销毁。这就叫原始类型与实例对象的自动转换

// 自动转换生成的包装对象是只读的，无法修改。所以，字符串无法添加新属性
let s = 'abc'
s.a = 123
console.log(s.a) // undefined

// 另一方面，***** 调用结束后，包装对象实例会自动销毁。这意味着，下一次调用字符串的属性时，实际是调用一个新生成的对象，而不是上一次调用时生成的那个对象，所以取不到赋值在上一个对象的属性 *****。如果要为字符串添加属性，只有在它的原型对象String.prototype上定义
String.prototype.x = 234
let xx = new String()
console.log(xx.x) // 234

// 4. 自定义方法 => 除了原生的实例方法，包装对象还可以自定义方法和属性，供原始类型的值直接调用

// 自定义翻倍
String.prototype.double = function() {
  return this.valueOf() + this.valueOf()
}
Number.prototype.double = function() {
  return this.valueOf() + this.valueOf()
}

console.log('abc'.double()) // abcabc
console.log((123).double()) // 246