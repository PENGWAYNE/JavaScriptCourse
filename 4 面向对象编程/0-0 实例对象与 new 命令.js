/*
 * @Description: 实例对象与 new 命令
 * @Author: WaynePeng
 * @Date: 2020-04-08 11:25:53
 * @LastEditTime: 2020-04-08 13:07:30
 * @LastEditors: WaynePeng
 */
// 1. 对象是什么
console.log('################# 对象是什么 ##################')
// （1）对象是单个实物的抽象
// （2）对象是一个容器，封装了属性（property）和方法（method）

// 2. 构造函数 => JavaScript 语言使用构造函数（constructor）作为对象的模板。所谓”构造函数”，就是专门用来生成实例对象的函数。它就是对象的模板，描述实例对象的基本结构。一个构造函数，可以生成多个实例对象，这些实例对象都有相同的结构
console.log('################### 构造函数 ####################')
let Person = function(name, age) {
  this.name = name || 'default'
  this.age = age || 'default'
}

// 上面的 Person 就是一个构造函数，为了与普通函数区别，构造函数名字的第一个字母通常大写

// 构造函数的特点有两个：
// 函数体内部使用了this关键字，代表了所要生成的对象实例
// 生成对象的时候，必须使用new命令

// 3. new 命令 => new命令的作用，就是执行构造函数，返回一个实例对象
console.log('##################### new 命令 ######################')

// (1). 基本用法
let person = new Person('WaynePeng', 22)
console.log(person) // Person { name: 'WaynePeng', age: 22 }

// new命令本身就可以执行构造函数，所以后面的构造函数可以带括号，也可以不带括号。下面两行代码是等价的，但是为了表示这里是函数调用，推荐使用括号
let p1 = new Person()
let p2 = new Person
console.log(p1) // Person { name: 'default', age: 'default' }
console.log(p2) // Person { name: 'default', age: 'default' }

// ⚠️ 注意，如果忘了使用new命令
let p3 = Person()
console.log(p3) // undefined
console.log(name + '---' + age) // default---default
// 此时 p3 值为 undefined，name 和 age 也变成的全局变量

// 为了保证构造函数必须与new命令一起使用，一个解决办法是，构造函数内部使用严格模式，即第一行加上use strict。这样的话，一旦忘了使用new命令，直接调用构造函数就会报错
function Fubar(foo, bar){
  'use strict';
  this._foo = foo;
  this._bar = bar;
}

try {
  Fubar()
} catch (error) {
  console.log(error.message) // Cannot set property '_foo' of undefined
}

// 另一个解决办法，构造函数内部判断是否使用new命令，如果发现没有使用，则直接返回一个实例对象
function Fun(params) {
  if(!(this instanceof Fun)) {
    return new Fun(params)
  }
  this.p = params
}

console.log(Fun('success')) // Fun { p: 'success' }

// (2). new 命令的原理
// ⚠️使用new命令时，它后面的函数依次执行下面的步骤:
// 创建一个空对象，作为将要返回的对象实例
// 将这个空对象的原型，指向构造函数的prototype属性
// 将这个空对象赋值给函数内部的this关键字
// 开始执行构造函数内部的代码

// ⚠️ 注意，如果构造函数内部有return语句，而且return后面跟着一个对象，new命令会返回return语句指定的对象；否则，就会不管return语句，返回this对象
let Fun1 = function(params) {
  this.p = params
  return params
}
console.log(new Fun1('pw')) // Fun1 { p: 'pw' }
console.log(new Fun1({a: 123})) // { a: 123 }

// 如果对普通函数（内部没有this关键字的函数）使用new命令，则会返回一个空对象
function message(params) {
  return params
}
console.log(new message('message')) // message {}
console.log(new message({a: 234})) // { a: 234 }

// new命令总是返回一个对象，要么是实例对象，要么是return语句指定的对象

// (3). new.target => 函数内部可以使用new.target属性。如果当前函数是new命令调用，new.target指向当前函数，否则为undefined
