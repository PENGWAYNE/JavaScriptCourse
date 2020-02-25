/*
 * @Description: 属性描述对象
 * @Author: WaynePeng
 * @Date: 2020-02-21 13:57:51
 * @LastEditTime: 2020-02-25 19:31:07
 * @LastEditors: WaynePeng
 */
// 1. 描述： JavaScript 提供了一个内部数据结构，用来描述对象的属性，控制它的行为，比如该属性是否可写、可遍历等等。这个内部数据结构称为“属性描述对象”（attributes object）。每个属性都有自己对应的属性描述对象，保存该属性的一些元信息

// 下面是属性描述对象的一个例子:
// {
//   value: 123, // value是该属性的属性值，默认为undefined
//   writable: false, // writable是一个布尔值，表示属性值（value）是否可改变（即是否可写），默认为true
//   enumerable: true, // enumerable是一个布尔值，表示该属性是否可遍历，默认为true。如果设为false，会使得某些操作（比如for...in循环、Object.keys()）跳过该属性
//   configurable: false, // configurable是一个布尔值，表示可配置性，默认为true。如果设为false，将阻止某些操作改写该属性，比如无法删除该属性，也不得改变该属性的属性描述对象（value属性除外）。也就是说，configurable属性控制了属性描述对象的可写性
//   get: undefined, // get是一个函数，表示该属性的取值函数（getter），默认为undefined
//   set: undefined // set是一个函数，表示该属性的存值函数（setter），默认为undefined
// }

// 2. Object.getOwnPropertyDescriptor()  (Object.getOwnPropertyDescriptor()方法可以获取属性描述对象。它的第一个参数是目标对象，第二个参数是一个字符串，对应目标对象的某个属性名)
console.log('############# Object.getOwnPropertyDescriptor() #############')
let obj = {
  a: 123,
  b: 'abc'
}
console.log(Object.getOwnPropertyDescriptor(obj, 'a')) // { value: 123, writable: true, enumerable: true, configurable: true }

// Object.getOwnPropertyDescriptor()方法只能用于对象自身的属性，不能用于继承的属性
console.log(Object.getOwnPropertyDescriptor(obj, 'toString')) // undefined

// 3. Object.defineProperty()，Object.defineProperties() (Object.defineProperty()方法允许通过属性描述对象，定义或修改一个属性，然后返回修改后的对象)
// **** Object.defineProperty()和Object.defineProperties()参数里面的属性描述对象，writable、configurable、enumerable这三个属性的默认值都为false ****
console.log('############ Object.defineProperty() #############')
// Object.defineProperty方法接受三个参数，依次如下:

// object：属性所在的对象
// propertyName：字符串，表示属性名
// attributesObject：属性描述对象
Object.defineProperty(obj, 'a', {
  value: 321,
  writable: false,
  enumerable: false,
  configurable: false
})
console.log(Object.getOwnPropertyDescriptor(obj, 'a')) // { value: 321, writable: false, enumerable: false, configurable: false }

for (const key in obj) {
  console.log(key) // b => 属性a不可遍历故不打印
}

// 定义 obj1.p 可以用这样的方式 (此处的{}， 表示定义一个空的新对象)
let obj1 = Object.defineProperty({}, 'p', {
  value: 'pw',
  writable: false,
  enumerable: true,
  configurable: false
})
console.log(Object.getOwnPropertyDescriptor(obj1, 'p')) // { value: 'pw', writable: false, enumerable: true, configurable: false }

// 如果一次性定义或修改多个属性，可以使用Object.defineProperties()方法
let obj2 = Object.defineProperties(
  {},
  {
    a: { value: 'a', writable: false, enumerable: true, configurable: false },
    b: { value: 'b', writable: false, enumerable: false, configurable: false },
    c: {
      enumerable: true,
      configurable: false,
      get: function() {
        return this.a + this.b
      }
    }
  }
)
// 一旦定义了取值函数get（或存值函数set），就不能将writable属性设为true，或者同时定义value属性，否则会报错

console.log(obj2) // { a: 'a', c: [Getter] } // b 是不可枚举的，故不打印
obj2.a = 'abc'
console.log(obj2.a) // a
console.log(obj2.b) // b
console.log(obj2.c) // ab => 调用get方法

let obj3 = Object.defineProperty({}, 'index', {})
console.log(Object.getOwnPropertyDescriptor(obj3, 'index')) // { value: undefined, writable: false, enumerable: false, configurable: false } => 默认值

// 4. Object.getOwnPropertyNames() (Object.getOwnPropertyNames方法返回一个数组，成员是参数对象自身的全部属性的属性名，不管该属性是否可遍历)
console.log('############# Object.getOwnPropertyNames() ##############')
console.log(Object.getOwnPropertyNames(obj2)) //[ 'a', 'b', 'c' ]
console.log(Object.keys(obj2)) // [ 'a', 'c' ]
// Object.getOwnPropertyNames 可以返回全部属性名， 而 Object.keys 只能返回可遍历的， b 不可被遍历

console.log(Object.getOwnPropertyNames(Object.prototype)) // ['constructor', '__defineGetter__', '__defineSetter__', 'hasOwnProperty', '__lookupGetter__', '__lookupSetter__', 'isPrototypeOf', 'propertyIsEnumerable', 'toString', 'valueOf', '__proto__', 'toLocaleString' ]
console.log(Object.keys(Object.prototype)) // []

// 5. Object.prototype.propertyIsEnumerable() (实例对象的propertyIsEnumerable()方法返回一个布尔值，用来判断某个属性是否可遍历。注意，这个方法只能用于判断对象自身的属性，对于继承的属性一律返回false)
console.log(
  '############# Object.prototype.propertyIsEnumerable() ############'
)
console.log(obj2.propertyIsEnumerable('a')) // true
console.log(obj2.propertyIsEnumerable('b')) // false
console.log(obj2.propertyIsEnumerable('toString')) // false

// 6. 元属性 (属性描述对象的各个属性称为“元属性”，因为它们可以看作是控制属性的属性)

// 7. 存取器 (除了直接定义以外，属性还可以用存取器（accessor）定义。其中，存值函数称为setter，使用属性描述对象的set属性；取值函数称为getter，使用属性描述对象的get属性。一旦对目标属性定义了存取器，那么存取的时候，都将执行对应的函数。利用这个功能，可以实现许多高级特性，比如某个属性禁止赋值)

// ********** 取值函数get不能接受参数，存值函数set只能接受一个参数（即属性的值） **********
console.log('############# 存取器 #############')
// (1)
let obj4 = Object.defineProperty({}, 'p', {
  get: function() {
    return 'getter'
  },
  set: function(params) {
    return `setter${params}`
  }
})
console.log((obj4.p = 123)) // 123
console.log(obj4.p) // getter

// (2) 寄存器写法二
let obj5 = {
  get p() {
    return 'getter'
  },
  set p(params) {
    return `setter${params}`
  }
}
console.log((obj5.p = 321)) // 321
console.log(obj5.p) // getter

// 应用：存取器往往用于，属性的值依赖对象内部数据的场合
let obj6 = {
  $n: 5,
  get next() {
    return this.$n++
  },
  set next(params) {
    if (params > this.$n) {
      this.$n = params
    } else {
      // throw new Error(`新值必须大于${this.$n}`)
    }
  }
}
console.log(obj6.next) // 5
obj6.next = 3
console.log(obj6.next) // 6
obj6.next = 9
console.log(obj6.next) // 9

// 8. 对象的拷贝
console.log('########### 对象的拷贝 ############')
let extend = function(from, to) {
  for (const key in from) {
    if (from.hasOwnProperty(key)) {
      Object.defineProperty(to, key, Object.getOwnPropertyDescriptor(from, key)) // 拷贝存取器
    }
  }
}
let obj7 = {}
extend(obj6, obj7)
console.log(obj7) // { '$n': 10, next: [Getter/Setter] }

// 9. 控制对象状态 (时需要冻结对象的读写状态，防止对象被改变。JavaScript 提供了三种冻结方法，最弱的一种是Object.preventExtensions，其次是Object.seal，最强的是Object.freeze)

// **************** Object.isExtensible() 方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性） ******************* Object.isFrozen() 方法用于检查一个对象是否使用了Object.freeze方法 **************

// 使用Object.freeze方法以后，Object.isSealed将会返回true，Object.isExtensible返回false

console.log('############# 控制对象状态 #############')
// (1). Object.preventExtensions()方法让一个对象变的不可扩展，也就是永远不能再添加新的属性
let o1 = {
  a: 1
}
Object.preventExtensions(o1)
o1.a = 2 // 可以改变
o1.p = 2 // 无法新增
console.log(o1) // { a: 2 }
delete o1.a // 可以删除
console.log(o1) // {}

// (2). Object.seal()方法封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要原来是可写的就可以改变
let o2 = {
  a: 1
}
Object.seal(o2)
o2.b = 2 // 无法新增
o2.a = 2 // 可以改变
delete o2.a // 无法删除
console.log(o2) // { a: 2 }
// Object.seal实质是把属性描述对象的configurable属性设为false，因此属性描述对象不再能改变了
console.log(Object.getOwnPropertyDescriptor(o2, 'a')) // { value: 2, writable: true, enumerable: true, configurable: false }

// (3). Object.freeze() 方法可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象
console.log('############## Object.freeze() ###############')

let o3 = {
  p: 123
}
Object.freeze(o3)
o3.p = 1
o3.a = 2
delete o3.p
console.log(o3) // { p: 123 }

// 可以用 Object.isFrozen() 判断对象是否使用了 Object.freeze 返回false可给它赋值
console.log(Object.isFrozen(o3)) // true
console.log(Object.isExtensible(o3)) // false

// 局限性 (上面的三个方法锁定对象的可写性有一个漏洞：可以通过改变原型对象，来为对象增加属性)
console.log('############# 局限性 ###############')
let o4 = {
  p1: 123
}
let o5 = Object.getPrototypeOf(o4) // Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）
o5.p2 = 234
console.log(o4.p2) // 234

// 如果我们吧原型对象也冻结
Object.preventExtensions(o5)
// 另外一个局限是，如果属性值是对象，上面这些方法只能冻结属性指向的对象，而不能冻结对象本身的内容
let o6 = {
  p: [1, 2]
}
Object.freeze(o6)
o6.p.push(3)
console.log(o6.p) // [ 1, 2, 3 ]
// 上面代码中，o6.p属性指向一个数组，o6对象被冻结以后，这个指向无法改变，即无法指向其他值，但是所指向的数组是可以改变的