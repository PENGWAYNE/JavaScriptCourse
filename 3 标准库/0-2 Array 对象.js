/*
 * @Description: Array 对象
 * @Author: WaynePeng
 * @Date: 2020-02-26 13:16:08
 * @LastEditTime: 2020-02-29 17:30:02
 * @LastEditors: WaynePeng
 */
// 1. 构造函数 (Array是 JavaScript 的原生对象，同时也是一个构造函数，可以用它生成新的数组)
console.log('############# 构造函数 ##############')
const arr = new Array(3) // 等同于 const arr = Array(3)
console.log(arr.length) // 3
console.log(arr) // [ <3 empty items> ]
// 如果参数是一个正整数，返回数组的成员都是空位。虽然读取的时候返回undefined，但实际上该位置没有任何值。虽然可以取到length属性，但是取不到键名
console.log(0 in arr) // false

const arr1 = new Array(1, 2, 3)
console.log(arr1) // [ 1, 2, 3 ]

// Array构造函数有一个很大的缺陷，就是不同的参数，会导致它的行为不一致

// 无参数时，返回一个空数组
// new Array() // []

// 单个正整数参数，表示返回的新数组的长度
// new Array(1) // [ empty ]
// new Array(2) // [ empty x 2 ]

// 非正整数的数值作为参数，会报错
// new Array(3.2) // RangeError: Invalid array length
// new Array(-3) // RangeError: Invalid array length

// 单个非数值（比如字符串、布尔值、对象等）作为参数，
// 则该参数是返回的新数组的成员
// new Array('abc') // ['abc']
// new Array([1]) // [Array[1]]

// 多参数时，所有参数都是返回的新数组的成员
// new Array(1, 2) // [1, 2]
// new Array('a', 'b', 'c') // ['a', 'b', 'c']

// 直接使用数组字面量是更好的做法
// bad
const arr2 = new Array(1, 2)

// good
const arr3 = [1, 2]

// 2. 静态方法
console.log('############## 静态方法 ##############')
// (1). Array.isArray() => Array.isArray方法返回一个布尔值，表示参数是否为数组。它可以弥补typeof运算符的不足
console.log(typeof arr) // object
console.log(Array.isArray(arr)) // true

// 实例方法
console.log('################ 实例方法 ################')
// (1). valueOf()，toString()
// valueOf方法是一个所有对象都拥有的方法，表示对该对象求值。不同对象的valueOf方法不尽一致，数组的valueOf方法返回数组本身
let arr4 = [1, 2, 3]
console.log(arr4.valueOf()) // [ 1, 2, 3 ]
// toString方法也是对象的通用方法，数组的toString方法返回数组的字符串形式
console.log(arr.toString()) // ,,
console.log(arr4.toString()) // 1,2,3

// (2). push()，pop()
// push方法用于在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组
arr4.push(4)
console.log(arr4) // [ 1, 2, 3, 4 ]
arr4.push(5, 6, {}, true, [])
console.log(arr4) // [ 1,  2, 3,  4, 5,  6, {}, true, [] ]

// let a = [1, 2, 3, 1, 2, 3]
// a = [...new Set(a)]
// console.log(a) // [ 1, 2, 3 ]

// pop方法用于删除数组的最后一个元素，并返回该元素。注意，该方法会改变原数组
arr4.pop()
console.log(arr4) // console.log(arr4) // [ 1,  2, 3,  4, 5,  6, {}, true ]

// 对空数组使用pop方法，不会报错，而是返回undefined
// [].pop() // undefined

// 使用： push和pop结合使用，就构成了“后进先出”的栈结构（stack）
let arr5 = []
arr5.push(1, 2)
arr5.push(3)
arr5.pop()
console.log(arr5) // [ 1, 2 ]

// (3). shift()，unshift()
// shift()方法用于删除数组的第一个元素，并返回该元素。注意，该方法会改变原数组
let arr6 = [1, 2, 3, 4, 5]
arr6.shift()
console.log(arr6) // [ 2, 3, 4, 5 ]

// 使用： push()和shift()结合使用，就构成了“先进先出”的队列结构（queue）

// unshift()方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组
arr6.unshift(0, 1)
console.log(arr6) // [ 0, 1, 2, 3, 4, 5 ]

// (4). join() => join()方法以指定参数作为分隔符，将所有数组成员连接为一个字符串返回。如果不提供参数，默认用逗号分隔 ---- 如果数组成员是undefined或null或空位，会被转成空字符串
console.log(arr6.join()) // 0,1,2,3,4,5
console.log(arr6.join(' ')) // 0 1 2 3 4 5
console.log(arr6.join(' | ')) // 0 | 1 | 2 | 3 | 4 | 5

// 通过call方法，这个方法也可以用于字符串或类似数组的对象。

console.log(Array.prototype.join.call('hello', '-')) // "h-e-l-l-o"

let obj = { 0: 'a', 1: 'b', length: 2 }
console.log(Array.prototype.join.call(obj, '-')) // 'a-b'

// (5). concat() => concat方法用于多个数组的合并。它将新数组的成员，添加到原数组成员的后部，然后返回一个新数组，原数组不变

console.log(['hello'].concat(['world']))
// ["hello", "world"]

console.log(['hello'].concat(['world'], ['!']))
// ["hello", "world", "!"]

console.log([].concat({ a: 1 }, { b: 2 }))
// [{ a: 1 }, { b: 2 }]

console.log([2].concat({ a: 1 }))
// [2, {a: 1}]

// 除了数组作为参数，concat也接受其他类型的值作为参数，添加到目标数组尾部。

console.log([1, 2, 3].concat(4, 5, 6))
// [1, 2, 3, 4, 5, 6]

//  *********** !!!!!!! ************
// 如果数组成员包括对象，concat方法返回当前数组的一个浅拷贝。所谓“浅拷贝”，指的是新数组拷贝的是对象的引用
let obj1 = {
  a: 1
}
let arr7 = [].concat(obj1)
arr7[0].a = 123
console.log(obj1) // { a: 123 } => 潜拷贝

// (6). reverse() => reverse方法用于颠倒排列数组元素，返回改变后的数组。注意，该方法将改变原数组
let arr8 = [1, 2, 3, 4, 5]
arr8.reverse()
console.log(arr8) // [ 5, 4, 3, 2, 1 ]

// (7). slice() => slice方法用于提取目标数组的一部分，返回一个新数组，原数组不变 arr.slice(start, end)
// 它的第一个参数为起始位置（从0开始），第二个参数为终止位置（但该位置的元素本身不包括在内）。如果省略第二个参数，则一直返回到原数组的最后一个成员
let a = ['a', 'b', 'c']
a.slice(0) // ["a", "b", "c"]
a.slice(1) // ["b", "c"]
a.slice(1, 2) // ["b"]
a.slice(2, 6) // ["c"]
a.slice() // ["a", "b", "c"]

// 如果slice方法的参数是负数，则表示倒数计算的位置。
let a1 = ['a', 'b', 'c']
a1.slice(-2) // ["b", "c"]
a1.slice(-2, -1) // ["b"]

// slice方法的一个重要应用，是将类似数组的对象转为真正的数组

let likeArray = { 0: 'a', 1: 'b', length: 2 }
likeArray = Array.prototype.slice.call(likeArray)
console.log(likeArray) // [ 'a', 'b' ]

// splice() => splice方法用于删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，返回值是被删除的元素。注意，该方法会改变原数组 ---- arr.splice(start, count, addElement1, addElement2, ...)
// splice的第一个参数是删除的起始位置（从0开始），第二个参数是被删除的元素个数。如果后面还有更多的参数，则表示这些就是要被插入数组的新元素
let arr9 = [1, 2, 3, 4]
arr9.splice(2) // => 一个参数表示往后删完
console.log(arr9) // [ 1, 2 ]
arr9.splice(0, 1) // => 从0号开始，删除一个
console.log(arr9) // [ 2 ]
arr9.splice(1, 0, ...[3, 4, 5]) // 从1号开始，删除0个，插入3，4，5
console.log(arr9) // [ 2, 3, 4, 5 ]
arr9.splice(-3, 1) // 从 -3 号开始，删除1个
console.log(arr9) // [ 2, 4, 5 ]

// (9). sort() => sort方法对数组成员进行排序，默认是按照字典顺序排序。排序后，原数组将被改变
console.log(['d', 'c', 'b', 'a'].sort())
// ['a', 'b', 'c', 'd']
console.log([4, 3, 2, 1].sort())
// [1, 2, 3, 4]
console.log([10111, 111, 1101].sort())
// [10111, 1101, 111]
// ****** ⚠️注意 ******
// sort()方法不是按照大小排序，而是按照字典顺序。也就是说，数值会被先转成字符串，再按照字典顺序进行比较，所以1101排在111的前面

// 如果想让sort方法按照自定义方式排序，可以传入一个函数作为参数
let sortArray = [10111, 1101, 111].sort(function(a, b) {
  return a - b
})
console.log(sortArray) // [ 111, 1101, 10111 ]
// 上面代码中，sort的参数函数本身接受两个参数，表示进行比较的两个数组成员。如果该函数的返回值大于0，表示第一个成员排在第二个成员后面；其他情况下，都是第一个元素排在第二个元素前面

// 自定义的排序函数应该返回数值，否则不同的浏览器可能有不同的实现，不能保证结果都一致

// (10). map() => map方法将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回

let numbers = [1, 2, 3]
numbers = numbers.map(n => {
  return n + 1
})
console.log(numbers) // [ 2, 3, 4 ]
// numbers数组的所有成员依次执行参数函数，运行结果组成一个新数组返回，原数组没有变化

// map方法接受一个函数作为参数。该函数调用时，map方法向它传入三个参数：当前成员、当前位置和数组本身
// map方法的回调函数有三个参数，elem为当前成员的值，index为当前成员的位置，arr为原数组
let t = numbers.map((item, index, arr) => {
  return item === arr[index]
})
console.log(t) // [ true, true, true ]

let arr10 = ['a', 'b', 'c']

let out = [1, 2].map(function(e) {
  return this[e]
}, arr10)
console.log(out) // [ 'b', 'c' ]
// 上面代码通过map方法的第二个参数，将回调函数内部的this对象，指向arr10数组

// 如果数组有空位，map方法的回调函数在这个位置不会执行，会跳过数组的空位
let f = function(n) {
  return 'a'
}
console.log([1, undefined, 2].map(f)) // ["a", "a", "a"]
console.log([1, null, 2].map(f)) // ["a", "a", "a"]
console.log([1, , 2].map(f)) // ["a", , "a"]
// 上面代码中，map方法不会跳过undefined和null，但是会跳过空位

// 11. forEach() => forEach方法与map方法很相似，也是对数组的所有成员依次执行参数函数。但是，forEach方法不返回值，只用来操作数据。这就是说，如果数组遍历的目的是为了得到返回值，那么使用map方法，否则使用forEach方法

// forEach的用法与map方法一致，参数是一个函数，该函数同样接受三个参数：当前值、当前位置、整个数组
let nums = [1, 2, 3, 4, 5]
nums.forEach((element, index, array) => {
  console.log(`nums[${index}]:${element}`) // nums[0]:1 nums[1]:2 nums[2]:3 nums[3]:4 nums[4]:5
})

// forEach方法也可以接受第二个参数，绑定参数函数的this变量 => 此处不能传入参数函数不可是箭头函数
let arr11 = [1, 2, 3]
let out1 = []
arr11.forEach(function(element) {
  this.push(element * element)
}, out1)
console.log(out1) // [ 1, 4, 9 ]

// 注意，forEach方法无法中断执行，总是会将所有成员遍历完。如果希望符合某种条件时，就中断遍历，要使用for循环

// 实在要用这个中断就抛异常吧。。。狗头
try {
  arr11.forEach(el => {
    if (el === 2) {
      throw Error('error')
    }
    console.log(el)
  })
} catch (error) {}
console.log('跳出')

// forEach方法也会跳过数组的空位

let log = function(n) {
  console.log(n + 1)
}

console.log('#######')
let e1 = [1, undefined, 2].forEach(log)
// 2
// NaN
// 3
console.log('#######')
let e2 = [1, null, 2].forEach(log)
// 2
// 1
// 3
console.log('#######')
let e3 = [1, , 2].forEach(log)
// 2
// 3
console.log('#######')
// 上面代码中，forEach方法不会跳过undefined和null，但会跳过空位

// (12). filter()  => filter方法用于过滤数组成员，满足条件的成员组成一个新数组返回
// 它的参数是一个函数，所有数组成员依次执行该函数，返回结果为true的成员组成一个新数组返回。该方法不会改变原数组
let ot1 = [1, 2, 3, 4, 5].filter(element => {
  return element > 3
})
console.log(ot1) // [ 4, 5 ]

// filter方法的参数函数可以接受三个参数：当前成员，当前位置和整个数组
let ot2 = [1, 2, 3, 4, 5].filter((element, index, arr) => {
  return arr[index] === element
})
console.log(ot2) // [ 1, 2, 3, 4, 5 ]

// filter方法还可以接受第二个参数，用来绑定参数函数内部的this变量
const RANGE = {
  MIN: 2,
  MAX: 5
}
let ot3 = [1, 2, 3, 4, 5, 6].filter(function(params) {
  return this.MIN < params && params < this.MAX
}, RANGE)
console.log(ot3) // [ 3, 4 ]

// (13). some()，every() => 这两个方法类似“断言”（assert），返回一个布尔值，表示判断数组成员是否符合某种条件。它们接受一个函数作为参数，所有数组成员依次执行该函数。该函数接受三个参数：当前成员、当前位置和整个数组，然后返回一个布尔值

// some方法是只要一个成员的返回值是true，则整个some方法的返回值就是true，否则返回false
let some = [1, 2, 3, 4, 5].some((element, index, arr) => {
  return element > 3
})
console.log(some) // true

// every方法是所有成员的返回值都是true，整个every方法才返回true，否则返回false
let every = [1, 2, 3, 4, 5].every((element, index, arr) => {
  return element > 3
})
console.log(every) // false

// ⚠️注意，对于空数组，some方法返回false，every方法返回true，回调函数都不会执行
function isEven(x) {
  return x % 2 === 0
}
console.log([].some(isEven)) // false
console.log([].every(isEven)) // true

// some和every方法还可以接受第二个参数，用来绑定参数函数内部的this变量

// (14). reduce()，reduceRight() => reduce方法和reduceRight方法依次处理数组的每个成员，最终累计为一个值。它们的差别是，reduce是从左到右处理（从第一个成员到最后一个成员），reduceRight则是从右到左（从最后一个成员到第一个成员），其他完全一样
let reduce = [1, 2, 3, 4, 5].reduce((a, b) => {
  console.log(`a: ${a} --- b: ${b}`)
  return a * b
})
console.log(reduce) // 120

let reduceRight = [1, 2, 3, 4, 5].reduceRight((a, b) => {
  console.log(`a: ${a} --- b: ${b}`)
  return a + b
})
console.log(reduceRight) // 15

// reduce方法和reduceRight方法的第一个参数都是一个函数。该函数接受以下四个参数:

// 累积变量，默认为数组的第一个成员
// 当前变量，默认为数组的第二个成员
// 当前位置（从0开始）
// 原数组
// 这四个参数之中，只有前两个是必须的，后两个则是可选的

let reduceAllParams = [3, 4, 5, 6].reduce((count, element, index, array) => {
  console.log(
    `count: ${count} -- element: ${element} -- index: ${index} -- array: ${array}`
  )
  return count + element
})
// count: 3 -- element: 4 -- index: 1 -- array: 3,4,5,6
// count: 7 -- element: 5 -- index: 2 -- array: 3,4,5,6
// count: 12 -- element: 6 -- index: 3 -- array: 3,4,5,6

// 如果要对累积变量指定初值，可以把它放在reduce方法和reduceRight方法的第二个参数
let initReduce = [1, 2, 3, 4, 5].reduce(function(a, b) {
  return a + b
}, 10)
console.log(initReduce) // 25
// 上面代码指定参数a的初值为10，所以数组从10开始累加，最终结果为25。注意，这时b是从数组的第一个成员开始遍历

// 第二个参数相当于设定了默认值，处理空数组时尤其有用 (空数组不指定初始值值将会报错)
let emptyArray = [].reduce((count, element) => {
  return count + element
}, 0)
console.log(emptyArray) // 0

// 由于这两个方法会遍历数组，所以实际上还可以用来做一些遍历相关的操作。比如，找出字符长度最长的数组成员
let maxLength = ['aa', 'aaa', 'a'].reduce((longest, entry) => {
  return entry.length > longest.length ? entry : longest
}, '')
console.log(maxLength) // aaa

// reduce的参数函数会将字符长度较长的那个数组成员，作为累积值。这导致遍历所有成员之后，累积值就是字符长度最长的那个成员

// indexOf()，lastIndexOf()
// indexOf方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回-1
let indexOfEg = ['a', 'b', 'a', 'c']
console.log(indexOfEg.indexOf('a')) // 0 => 第一次出现在第0号位置

// indexOf方法还可以接受第二个参数，表示搜索的开始位置
console.log(indexOfEg.indexOf('a', 2)) // 2

// lastIndexOf方法返回给定元素在数组中最后一次出现的位置，如果没有出现则返回-1
console.log(indexOfEg.lastIndexOf('a')) // 2

// indexOf方法还可以接受第二个参数，表示搜索的开始位置, ⚠️注意：向左回向查找
console.log(indexOfEg.lastIndexOf('a', 1)) // 0

console.log(indexOfEg.indexOf('d')) // -1
console.log(indexOfEg.lastIndexOf('d')) // -1

// ⚠️注意，这两个方法不能用来搜索NaN的位置，即它们无法确定数组成员是否包含NaN
// 这是因为这两个方法内部，使用严格相等运算符（===）进行比较，而NaN是唯一一个不等于自身的值

// [NaN].indexOf(NaN) // -1
// [NaN].lastIndexOf(NaN) // -1

// (16). 链式使用 
// 上面这些数组方法之中，有不少返回的还是数组，所以可以链式使用