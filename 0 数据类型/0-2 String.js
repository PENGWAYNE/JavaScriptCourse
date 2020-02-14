/*
 * @Description: 字符串
 * @Author: WaynePeng
 * @Date: 2020-01-14 23:23:53
 * @LastEditTime : 2020-01-19 16:12:20
 * @LastEditors  : WaynePeng
 */
// #########字符串#########
// 如果要在单引号字符串的内部，使用单引号，就必须在内部的单引号前面加上反斜杠，用来转义。双引号字符串内部使用双引号，也是如此

// 如果长字符串必须分成多行，可以在每一行的尾部使用反斜杠。

const longString = 'Long \
long \
long \
string';

// 字符串与数组
// 字符串可以被视为字符数组，因此可以使用数组的方括号运算符，用来返回某个位置的字符（位置编号从0开始） 但是不可以直接改变值

var s = 'hello';
s[0] // "h"
s[1] // "e"
s[4] // "o"

// 直接对字符串使用方括号运算符 超出字符长度就会返回undefined
'hello'[1] // "e"
'hello'['x'] // undefined
'hello'[10] // undefined
'hello'.length // -> 5
//