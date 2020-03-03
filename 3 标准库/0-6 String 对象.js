/*
 * @Description: String 对象
 * @Author: WaynePeng
 * @Date: 2020-03-03 15:08:31
 * @LastEditTime: 2020-03-03 22:58:59
 * @LastEditors: WaynePeng
 */
// 1. 概述：String对象是 JavaScript 原生提供的三个包装对象之一，用来生成字符串对象
let s1 = 'abc'
let s2 = new String('abc')
console.log(typeof s1) // string
console.log(typeof s2) // object
console.log(s2) // [String: 'abc'] => String {0: "a", 1: "b", 2: "c", length: 3}
console.log(s1 === s2) // false

// 除了用作构造函数，String对象还可以当作工具方法使用，将任意类型的值转为字符串
console.log(String(true)) // "true"
console.log(String(1)) // "1"

// 2. 静态方法 => String对象提供的静态方法（即定义在对象本身，而不是定义在对象实例的方法）
console.log('############### 静态方法 ###############')
// (1). String.fromCharCode() => 该方法的参数是一个或多个数值，代表 Unicode 码点，返回值是这些码点组成的字符串
console.log(String.fromCharCode()) // ""
console.log(String.fromCharCode(97)) // "a"
console.log(String.fromCharCode(104, 101, 108, 108, 111)) // "hello"

// 该方法不支持 Unicode 码点大于0xFFFF的字符，即传入的参数不能大于0xFFFF（即十进制的 65535)

// 3. 实例属性
console.log('############### 实例属性 ################')
// (1). String.prototype.length => 字符串实例的length属性返回字符串的长度
console.log('abc'.length) // 3

// 4. 实例方法
console.log('############### 实例方法 ################')
// (1). String.prototype.charAt() => charAt方法返回指定位置的字符，参数是从0开始编号的位置
let s3 = 'abc'
console.log(s3.charAt(1)) // b
// 可替代为
console.log(s3[1]) // b

// 如果参数为负数，或大于等于字符串的长度，charAt返回空字符串
console.log(s3.charAt(-1)) // ""
console.log(s3.charAt(5)) // ""

// (2). String.prototype.charCodeAt() => charCodeAt方法 ⚠️*** 返回字符串指定位置 *** 的 Unicode 码点（十进制表示），相当于String.fromCharCode()的逆操作
console.log('hello'.charCodeAt(0)) // 104

// 如果没有任何参数，charCodeAt返回首字符的 Unicode 码点
console.log('hello'.charCodeAt()) // 104

// 如果参数为负数，或大于等于字符串的长度，charCodeAt返回NaN
console.log('abc'.charCodeAt(-1)) // NaN
console.log('abc'.charCodeAt(4)) // NaN

// ⚠️注意，charCodeAt方法返回的 Unicode 码点不会大于65536（0xFFFF），也就是说，只返回两个字节的字符的码点。如果遇到码点大于 65536 的字符（四个字节的字符），必需连续使用两次charCodeAt，不仅读入charCodeAt(i)，还要读入charCodeAt(i+1)，将两个值放在一起，才能得到准确的字符

// (3). String.prototype.concat() => concat方法用于连接两个字符串，返回一个新字符串，不改变原字符串
let s4 = 'abc'
let s5 = 'def'
console.log(s4.concat(s5)) // abcdef
console.log(s4) // abc

// 该方法可以接受多个参数,如果参数不是字符串，concat方法会将其先转为字符串，然后再连接
console.log('a'.concat('b', 'c', 1, 2, 3)) // abc123

// (4). String.prototype.slice() => slice方法用于从原字符串取出子字符串并返回，不改变原字符串。它的第一个参数是子字符串的开始位置，第二个参数是子字符串的结束位置（不含该位置）
let js = 'javaScript'
console.log(js.slice(0, 4)) // java
// 如果省略第二个参数，则表示子字符串一直到原字符串结束
console.log(js.slice(4)) // Script

// 如果参数是负值，表示从结尾开始倒数计算的位置，即该负值加上字符串长度
console.log(js.slice(-6)) // "Script"
console.log(js.slice(0, -6)) // "java"
console.log(js.slice(-2, -1)) // "p"

// 如果第一个参数大于第二个参数，slice方法返回一个空字符串
console.log(js.slice(2, 1)) // ""

// (5). String.prototype.substring() => substring方法用于从原字符串取出子字符串并返回，不改变原字符串，跟slice方法很相像。它的第一个参数表示子字符串的开始位置，第二个位置表示结束位置（返回结果不含该位置）
console.log(js.substring(0, 4)) // java

// 如果省略第二个参数，则表示子字符串一直到原字符串的结束
console.log(js.substring(4)) // Script

// ⚠️如果第一个参数大于第二个参数，substring方法会自动更换两个参数的位置
console.log(js.substring(4, 0)) // java

// ⚠️如果参数是负数，substring方法会自动将负数转为0
console.log(js.substring(-3, 4)) // java  => js.substring(0, 4)

// (6). String.prototype.substr() => substr方法用于从原字符串取出子字符串并返回，不改变原字符串，跟slice和substring方法的作用相同 -> substr方法的第一个参数是子字符串的开始位置（从0开始计算），⚠️*** 第二个参数是子字符串的长度 ***
console.log(js.substr(2, 2)) // va

// 如果省略第二个参数，则表示子字符串一直到原字符串的结束
console.log(js.substr(2)) // vaScript

// 如果第一个参数是负数，表示倒数计算的字符位置。如果第二个参数是负数，将被自动转为0，因此会返回空字符串
console.log(js.substr(-6)) // Script
console.log(js.substr(4, -1)) // ""

// (7). String.prototype.indexOf()，String.prototype.lastIndexOf()
// indexOf方法用于确定一个字符串在另一个字符串中 ⚠️*** 第一次出现的位置 ***，返回结果是匹配开始的位置。如果返回-1，就表示不匹配
let hw = 'hello world !'
console.log(hw.indexOf('o')) //  4
console.log(hw.indexOf('s')) // -1

// indexOf方法还可以接受第二个参数，表示 ⚠️从该位置开始向后匹配
console.log(hw.indexOf('o', 5)) // 7

// lastIndexOf方法的用法跟indexOf方法一致， ⚠️主要的区别是lastIndexOf从尾部开始匹配，indexOf则是从头部开始匹配
console.log(hw.lastIndexOf('o')) // 7

// ⚠️另外，lastIndexOf的第二个参数表示从该位置起向前匹配
console.log(hw.lastIndexOf('o', 6)) // 4

// (8). String.prototype.trim() => trim方法用于去除字符串两端的空格，返回一个新字符串，不改变原字符串
let trimString = '  abc   '
console.log(trimString.trim()) // abc
console.log(trimString) // "  abc   "

// ⚠️该方法去除的不仅是空格，还包括制表符（\t、\v）、换行符（\n）和回车符（\r）
console.log('\r\n abc \t'.trim()) // abc

// (9). String.prototype.toLowerCase()，String.prototype.toUpperCase() => toLowerCase方法用于将一个字符串全部转为小写，toUpperCase则是全部转为大写。它们都返回一个新字符串，不改变原字符串
let letter = 'aSkHsdU'
console.log(letter.toLowerCase()) // askhsdu
console.log(letter.toUpperCase()) // ASKHSDU

// (10). String.prototype.match() => match方法用于确定原字符串是否匹配某个子字符串，返回一个数组，成员为匹配的第一个字符串。如果没有找到匹配，则返回null
let likeString = 'cat, bat, sat, fat'
let matches = likeString.match('at')
console.log(matches) // [ 'at', index: 1, input: 'cat, bat, sat, fat', groups: undefined ]
console.log(likeString.match('ba')) // [ 'ba', index: 5, input: 'cat, bat, sat, fat', groups: undefined ]
console.log(likeString.match('but')) // null

// (11). String.prototype.search()，String.prototype.replace()
// search方法的用法基本等同于match，但是返回值为匹配的第一个位置。如果没有找到匹配，则返回-1
console.log(likeString.search('at')) // 1
console.log(likeString.search('pw')) // -1

// ⚠️ search方法还可以使用正则表达式作为参数

// replace方法用于替换匹配的子字符串，一般情况下只替换第一个匹配（除非使用带有g修饰符的正则表达式
console.log('abcf'.replace('f', 'd')) // abcd

// (12). String.prototype.split() => split方法按照给定规则分割字符串，返回一个由分割出来的子字符串组成的数组
console.log('a,b,c'.split(',')) // [ 'a', 'b', 'c' ]

// 如果分割规则为空字符串，则返回数组的成员是原字符串的每一个字符
console.log('a,b,c'.split('')) // [ 'a', ',', 'b', ',', 'c' ]

// 如果省略参数，则返回数组的唯一成员就是原字符串
console.log('a,b,c'.split()) // [ 'a,b,c' ]

// 如果满足分割规则的两个部分紧邻着（即两个分割符中间没有其他字符），则返回数组之中会有一个空字符串
console.log('a||b'.split('|')) // [ 'a', '', 'b' ]

// 如果满足分割规则的部分处于字符串的开头或结尾（即它的前面或后面没有其他字符），则返回数组的第一个或最后一个成员是一个空字符串
console.log('|a|b|c|'.split('|')) // [ '', 'a', 'b', 'c', '' ]

// ⚠️ split方法还可以接受第二个参数，限定返回数组的最大成员数
let ss = 'a|b|c'
console.log(ss.split('|', 0)) // []
console.log(ss.split('|', 2)) // [ 'a', 'b' ]
console.log(ss.split('|', 5)) // [ 'a', 'b', 'c' ]

// (13). String.prototype.localeCompare() => localeCompare方法用于比较两个字符串。它返回一个整数，如果小于0，表示第一个字符串小于第二个字符串；如果等于0，表示两者相等；如果大于0，表示第一个字符串大于第二个字符串
console.log('aaa'.localeCompare('abc')) // -1
console.log('apple'.localeCompare('apple')) // 0
console.log('bcc'.localeCompare('abcd')) // 1

// 该方法的最大特点，就是会考虑自然语言的顺序。举例来说，正常情况下，大写的英文字母小于小写字母
console.log('B' > 'a') // false

// 但是，localeCompare方法会考虑自然语言的排序情况，将B排在a的前面
console.log('B'.localeCompare('a')) // 1

// localeCompare还可以有第二个参数，指定所使用的语言（默认是英语），然后根据该语言的规则进行比较
console.log('ä'.localeCompare('z', 'de')) // -1
console.log('ä'.localeCompare('z', 'sv')) // 1

// 上面代码中，de表示德语，sv表示瑞典语。德语中，ä小于z，所以返回-1；瑞典语中，ä大于z，所以返回1
