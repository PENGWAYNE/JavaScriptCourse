/*
 * @Description: 数组
 * @Author: WaynePeng
 * @Date: 2020-01-24 14:34:51
 * @LastEditTime : 2020-01-24 16:01:08
 * @LastEditors  : WaynePeng
 */

// 任何数据类型都可以放到数组里面
let arr = [
  { a: 1 },
  [1, 2, 3],
  function() {
    return true
  }
]

console.log(arr[2]()) // true

// 数组是一种特殊的对象
console.log(typeof arr) // object

// 数组的 key 可以使用'1', 1.00等形式，其实转换为数组的 key 传入数字还是会被转换为字符串
console.log(arr[1]) // [ 1, 2, 3 ]
console.log(arr['1']) // [ 1, 2, 3 ]
console.log(arr[1.0]) // [ 1, 2, 3 ]

// 数组也可以使用Object.keys
console.log(Object.keys(arr)) // [ '0', '1', '2' ]

// avaScript 使用一个32位整数，保存数组的元素个数。这意味着，数组成员最多只有 4294967295 个（232 - 1）个，也就是说 length 属性的最大值就是 4294967295

delete arr[0]

console.log(arr[0]) // 使用 delete 并不会改变数组的长度，只会使其变为造成空位

// 数组的 key 不必连续，数组的长度始终为最大的数字 key 值 +1
arr[1000] = 1
console.log(arr.length) // 1001

// 当人为设置数组的 length 属性小于数组所包含的元素个数时，多余的元素将会被剔除
arr.length = 0
console.log(arr) // []

// 如果人为设置length大于当前元素的个数，那么对于的长度都是 undefined
arr.length = 5
console.log(arr[4]) // undefined

// 如果人为设置length不合法，js将会报错
// arr.length = -1 // Invalid array length

// 可以给数组添加属性，如果一个数组没有数字键那么这个数组的 length 将为0
arr = []
arr['a'] = 'abc'
arr[1.2] = '123'
console.log(arr.length) // 0
console.log(arr) // [ a: 'abc', '1.2': '123' ] // 数组本身是一种特殊的对象

// in 运算符 用于检查某个对象是否存在 (适用于数组和对象)
arr.length = 100
console.log(1 in arr) // false
console.log('a' in arr) // true
console.log(99 in arr) // false // 注意，当此处的值不存在时，in 运算符将返回 false

// for in 循环遍历出每个不为空的key // 因为for in 会遍历出非数字键，所以通常不使用 for in 循环数组
for (const key in arr) {
  if (arr.hasOwnProperty(key)) {
    console.log(key) // a, 1.2
  }
}

// for of // 打印所有可以迭代出的值
let ar = ['a', 'b']
ar.c = 'ccc'
ar.length = 5
console.log(ar) // [ 'a', 'b', <3 empty items>, c: 'ccc' ]
for (const iterator of ar) {
  console.log(iterator) // a, b, undefined, undefined, undefined
}

console.log('##### forEach ######')
// forEach 也只能遍历迭代出数组键可表达的值
ar.forEach(element => {
  console.log(element) // a, b
})

// 数组中间和前面的空位会被计入数组的长度，而末尾的空位则会被忽略
let arr1 = [1, , 2]
console.log(arr1.length) // 3

// 数组的某个位置是空位，与某个位置是undefined，是不一样的。如果是空位，使用数组的forEach方法、for...in结构、以及Object.keys方法进行遍历，空位都会被跳过

console.log('##### 类似数组的对象 ######')
// 类似数组的对象
// 如果一个对象中有length属性，那么我们就称这个对象为类似数组的对象
let objArr = {
  0: 'a',
  1: 'b',
  3: 'c',
  a: 'abc',
  length: 4
}
// 我们可以用 slice 方法将这样的对象转换为数组
let likeArray = Array.prototype.slice.call(objArr)
console.log(likeArray) // [ 'a', 'b', <1 empty item>, 'c' ]
// 可以看到转换之后的数组空余的部分被用空位代替，而非数字键的部分将被忽略

// 除了转为真正的数组，“类似数组的对象”还有一个办法可以使用数组的方法，就是通过 call() 把数组的方法放到对象上面

function print(value, index) {
  console.log(index + ' : ' + value)
}

Array.prototype.forEach.call(objArr, print)
// 打印结果 => 
// 0 : a
// 1 : b
// 3 : c

// 字符串也是类数组对象，也可以这样使用

// 值得注意的是这种方法比直接使用数组原生的forEach要慢，所以最好还是先将“类似数组的对象”转为真正的数组，然后再直接调用数组的forEach方法