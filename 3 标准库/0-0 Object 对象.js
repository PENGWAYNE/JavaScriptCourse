/*
 * @Description: Object 对象
 * @Author: WaynePeng
 * @Date: 2020-02-09 21:52:33
 * @LastEditTime: 2020-02-21 13:57:04
 * @LastEditors: WaynePeng
 */
// 1. 概述
console.log('######## 概述 ########')
// JavaScript 的所有其他对象都继承自Object对象，即那些对象都是Object的实例
// Object对象的原生方法分成两类：Object本身的方法与Object的实例方法

// (1). Object 对象本身的方法 (直接定义在Object上的方法)
Object.print = function(value) {
  console.log('value', value)
}

// (2). Object 的实例方法 (原型对象Object.prototype上的方法)
Object.prototype.prints = function(params) {
  console.log('params', params)
}
let obj = new Object()
obj.prints('实例方法') // 凡是定义在Object.prototype对象上面的属性和方法，将被所有实例对象共享

// 2. Object() (Object本身是一个函数，可以当作工具方法使用，将任意值转为对象)
console.log('########## Object() ##########')

// (1). 如果参数为空（或者为undefined和null），Object()返回一个空对象
let obj1 = new Object()
let obj2 = new Object(null)
let obj3 = new Object(undefined)
console.log(obj1) // {}
console.log(obj2) // {}
console.log(obj3) // {}

// (2). 如果参数是原始类型的值，Object方法将其转为对应的包装对象的实例
let obj4 = Object(1)
console.log(obj4) // [Number: 1]
obj instanceof Object // true
obj instanceof Number // true

let obj5 = Object('foo')
console.log(obj5) // [String: 'foo']
obj instanceof Object // true
obj instanceof String // true

let obj6 = Object(true)
console.log(obj6) // [Boolean: true]
obj instanceof Object // true
obj instanceof Boolean // true

// (3). 如果 Object 方法的参数是一个对象，它总是返回该对象，即不用转换
let o1 = []
let o2 = new Object(o1)
console.log(o1 === o2) // true

let o3 = {}
let o4 = new Object(o3)
console.log(o3 === o4) // true

let o5 = function() {
  console.log('o5')
}
let o6 = new Object(o5)
console.log(o5 === o6) // true

// 可以利用这个特性来判断一个变量是否为对象
let isObject = function(obj) {
  return obj === Object(obj)
}
console.log(isObject([])) // true
console.log(isObject(123)) // false

// 3. Object 构造函数 (Object 构造函数的首要用途，是直接通过它来生成新对象)
console.log('########## Object 构造函数 ##########')
let object = new Object()
// Object构造函数的用法与工具方法很相似，几乎一模一样。使用时，可以接受一个参数，如果该参数是一个对象，则直接返回这个对象；如果是一个原始类型的值，则返回该值对应的包装对象

// 虽然用法相似，但是Object(value)与new Object(value)两者的语义是不同的，Object(value)表示将value转成一个对象，new Object(value)则表示新生成一个对象，它的值是value

// 4. Object 的静态方法 (所谓“静态方法”，是指部署在Object对象自身的方法)
console.log('########### Object 的静态方法 ############')
// (1). Object.keys()，Object.getOwnPropertyNames() (Object.keys方法和Object.getOwnPropertyNames方法都用来遍历对象的属性)

// Object.keys方法的参数是一个对象，返回一个数组。该数组的成员都是该对象自身的（而不是继承的）所有属性名
let ob1 = {
  p1: 123,
  p2: 456
}

console.log(Object.keys(ob1)) // [ 'p1', 'p2' ]

// Object.getOwnPropertyNames方法与Object.keys类似，也是接受一个对象作为参数，返回一个数组，包含了该对象自身的所有属性名
console.log(Object.getOwnPropertyNames(ob1)) // [ 'p1', 'p2' ]

// 我们可以利用这两个方法获得对象属性的个数
console.log(Object.keys(ob1).length) // 2
console.log(Object.getOwnPropertyNames(ob1).length) // 2

// ***** 对于一般的对象来说，Object.keys()和Object.getOwnPropertyNames()返回的结果是一样的。只有涉及不可枚举属性时，才会有不一样的结果。Object.keys方法只返回可枚举的属性，Object.getOwnPropertyNames方法还返回不可枚举的属性名 ******
// 比如:
let array = [1, 2, 3]
console.log(Object.keys(array)) // [ '0', '1', '2' ]
console.log(Object.getOwnPropertyNames(array)) // [ '0', '1', '2', 'length' ]

// (2). 其他方法

// （1）对象属性模型的相关方法
// Object.getOwnPropertyDescriptor() // 获取某个属性的描述对象
// Object.defineProperty() // 通过描述对象，定义某个属性
// Object.defineProperties() // 通过描述对象，定义多个属性

// （2）控制对象状态的方法
// Object.preventExtensions() // 防止对象扩展
// Object.isExtensible() // 判断对象是否可扩展
// Object.seal() // 禁止对象配置
// Object.isSealed() // 判断一个对象是否可配置
// Object.freeze() // 冻结一个对象
// Object.isFrozen() // 判断一个对象是否被冻结

// （3）原型链相关方法
// Object.create() // 该方法可以指定原型对象和属性，返回一个新的对象
// Object.getPrototypeOf() //获取对象的Prototype对象

// 5. Object 的实例方法 (除了静态方法，还有不少方法定义在Object.prototype对象。它们称为实例方法，所有Object的实例对象都继承了这些方法)
console.log('########## Object 的实例方法 #########')

// Object实例对象的方法，主要有以下六个
// Object.prototype.valueOf() // 返回当前对象对应的值
// Object.prototype.toString() // 返回当前对象对应的字符串形式
// Object.prototype.toLocaleString() // 返回当前对象对应的本地字符串形式
// Object.prototype.hasOwnProperty() // 判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性
// Object.prototype.isPrototypeOf() // 判断当前对象是否为另一个对象的原型
// Object.prototype.propertyIsEnumerable() // 判断某个属性是否可枚举

// (1). Object.prototype.valueOf() (valueOf方法的作用是返回一个对象的“值”，默认情况下返回对象本身)
let ov1 = new Object()
console.log(ov1.valueOf() === ov1) // true

// (2). Object.prototype.toString() (toString方法的作用是返回一个对象的字符串形式，默认情况下返回类型字符串)
let ov2 = new Object()
console.log(ov2.toString()) // [object Object]
// 结果返回一个字符串object Object，其中第二个Object表示该值的构造函数

// (3). toString() 的应用：判断数据类型 (Object.prototype.toString方法返回对象的类型字符串，因此可以用来判断一个值的类型)
let ov3 = [1, 2, 3]
// 由于实例对象可能会自定义toString方法，覆盖掉Object.prototype.toString方法，所以为了得到类型字符串，最好直接使用Object.prototype.toString方法。通过函数的call方法，可以在任意值上调用这个方法，帮助我们判断这个值的类型
console.log(Object.prototype.toString.call(ov3))

// 不同数据类型的Object.prototype.toString方法返回值如下:

// 数值：返回[object Number]
// 字符串：返回[object String]
// 布尔值：返回[object Boolean]
// undefined：返回[object Undefined]
// null：返回[object Null]
// 数组：返回[object Array]
// arguments 对象：返回[object Arguments]
// 函数：返回[object Function]
// Error 对象：返回[object Error]
// Date 对象：返回[object Date]
// RegExp 对象：返回[object RegExp]
// 其他对象：返回[object Object]

// 利用这个特性，可以写出一个比typeof运算符更准确的类型判断函数
let type = function(params) {
  return Object.prototype.toString
    .call(params)
    .match(/\[object (.*?)\]/)[1]
    .toLowerCase()
}
console.log(type([])) // array

// (4). Object.prototype.toLocaleString()  (Object.prototype.toLocaleString方法与toString的返回结果相同，也是返回一个值的字符串形式)
console.log('############ Object.prototype.toLocaleString() #############')
let ov4 = {}
console.log(ov4.toLocaleString()) // [object Object]

// 这个方法的主要作用是留出一个接口，让各种不同的对象实现自己版本的toLocaleString，用来返回针对某些地域的特定的值

let person = {
  toString: function() {
    return 'WaynePeng'
  },
  toLocaleString: function() {
    return '彭维'
  }
}
console.log(person.toString()) // WaynePeng
console.log(person.toLocaleString()) // 彭维

// 目前，主要有三个对象自定义了toLocaleString方法
// Array.prototype.toLocaleString()
// Number.prototype.toLocaleString()
// Date.prototype.toLocaleString()

let arr = [1, 2, 3]
let obj7 = {
  a: 1,
  b: 2,
  c: 3
}
let date = new Date()

// Array
console.log(arr.toString()) // 1,2,3
console.log(arr.toLocaleString()) // 1,2,3

// Object
console.log(obj7.toString()) // [object Object]
console.log(obj7.toLocaleString()) // [object Object]

// date
console.log(date.toString()) // Thu Feb 20 2020 15:30:26 GMT+0800 (China Standard Time)
console.log(date.toLocaleString()) // 2/20/2020, 3:30:26 PM

// Object.prototype.hasOwnProperty() (Object.prototype.hasOwnProperty方法接受一个字符串作为参数，返回一个布尔值，表示该实例对象自身是否具有该属性)
console.log('############# Object.prototype.hasOwnProperty() ##############')

let obj8 = {
  a: '123'
}
console.log(obj8.hasOwnProperty('a')) // true
console.log(obj8.hasOwnProperty('toString')) // false
// 对象obj8自身具有a属性，所以返回true。toString属性是继承的，所以返回false