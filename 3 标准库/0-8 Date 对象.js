/*
 * @Description: Date 对象
 * @Author: WaynePeng
 * @Date: 2020-03-21 14:46:38
 * @LastEditTime: 2020-03-22 16:24:20
 * @LastEditors: WaynePeng
 */
// Date对象是 JavaScript 原生的时间库。它以国际标准时间（UTC）1970年1月1日00:00:00作为时间的零点，可以表示的时间范围是前后各1亿天（单位为毫秒）
// 1. 普通函数的用法 => Date对象可以作为普通函数直接调用，返回一个代表当前时间的字符串
console.log('################ 普通函数的用法 ################')

console.log(Date()) // Sat Mar 21 2020 14:58:10 GMT+0800 (China Standard Time)
// 即使带有参数，Date作为普通函数使用时，返回的还是当前时间
console.log(Date(2020, 1, 21)) // Sat Mar 21 2020 14:58:10 GMT+0800 (China Standard Time)

// ⚠️ 注意：无论有没有参数，⚠️直接调用⚠️Date总是返回当前时间

// 2. 构造函数的用法 => Date还可以当作构造函数使用。对它使用new命令，会返回一个Date对象的实例。如果不加参数，实例代表的就是当前时间
console.log('################ 构造函数的用法 ################')

let today = new Date()
console.log(today) // 2020-03-21T07:02:51.521Z
// Date实例有一个独特的地方。其他对象求值的时候，都是默认调用.valueOf()方法，但是Date实例求值的时候，默认调用的是toString()方法。这导致对Date实例求值，返回的是一个字符串，代表该实例对应的时间
// 直接求值 today 等同于 today.toString()

// 作为构造函数时，Date对象可以接受多种格式的参数，返回一个该参数对应的时间实例
// 参数为时间零点开始计算的毫秒数
console.log(new Date(1378218728000)) // 2013-09-03T14:32:08.000Z

// 参数为日期字符串
console.log(new Date('January 6, 2013')) // 2013-01-05T16:00:00.000Z

// 参数为多个整数，
// 代表年、月、日、小时、分钟、秒、毫秒
console.log(new Date(2013, 10, 1, 0, 0, 0, 0)) // 2013-10-31T16:00:00.000Z

// 关于Date构造函数的参数，有几点说明
// 第一点，参数可以是负整数，代表1970年元旦之前的时间
console.log(new Date(-1378218728000)) // 1926-04-30T09:27:52.000Z

// 第二点，只要是能被Date.parse()方法解析的字符串，都可以当作参数
new Date('2013-2-15')
new Date('2013/2/15')
new Date('02/15/2013')
new Date('2013-FEB-15')
new Date('FEB, 15, 2013')
new Date('FEB 15, 2013')
new Date('February, 15, 2013')
new Date('February 15, 2013')
new Date('15 Feb 2013')
new Date('15, February, 2013')
// Fri Feb 15 2013 00:00:00 GMT+0800 (CST)

// 第三，参数为年、月、日等多个整数时，年和月是不能省略的，其他参数都可以省略的。也就是说，这时至少需要两个参数，因为如果只使用“年”这一个参数，Date会将其解释为毫秒数
console.log(new Date(2020)) // 1970-01-01T00:00:02.020Z

// ⚠️ 注意：最后，各个参数的取值范围如下：

// 年：使用四位数年份，比如2000。如果写成两位数或个位数，则加上1900，即10代表1910年。如果是负数，表示公元前。
// 月：0表示一月，依次类推，11表示12月。
// 日：1到31。
// 小时：0到23。
// 分钟：0到59。
// 秒：0到59
// 毫秒：0到999。
// ⚠️ 注意，月份从0开始计算，但是，天数从1开始计算。另外，除了日期的默认值为1，小时、分钟、秒钟和毫秒的默认值都是0

// 这些参数如果超出了正常范围，会被自动折算 => 月份超过将会被折算到下一年，日期为0，则为上个月的最后一天
console.log(new Date(2020, 20, 0)) // 2021-08-30T16:00:00.000Z

// 参数还可以使用负数，表示扣去的时间 => 表示从基准日扣去相应的时间
console.log(new Date(2012, -1, -1)) // 2011-11-28T16:00:00.000Z

// 3. 日期的运算
console.log('################ 日期的运算 ###############')

// 类型自动转换时，Date实例如果转为数值，则等于对应的毫秒数；如果转为字符串，则等于对应的日期字符串。所以，两个日期实例对象进行减法运算时，返回的是它们间隔的毫秒数；进行加法运算时，返回的是两个字符串连接而成的新字符串
let d1 = new Date(2018, 10, 1)
let d2 = new Date(2017, 9, 1)
console.log(d1 - d2) // 34214400000
console.log(d1 + d2) // Thu Nov 01 2018 00:00:00 GMT+0800 (China Standard Time)Sun Oct 01 2017 00:00:00 GMT+0800 (China Standard Time)

// 4. 静态方法
console.log('################ 静态方法 ###################')
// (1). Date.now() => Date.now方法返回当前时间距离时间零点（1970年1月1日 00:00:00 UTC）的毫秒数，相当于 Unix 时间戳乘以1000
console.log(Date.now()) // 1584863783036

// (2). Date.parse() => Date.parse方法用来解析日期字符串，返回该时间距离时间零点（1970年1月1日 00:00:00）的毫秒数
console.log(Date.parse('2011-10-10')) // 1318204800000
console.log(Date.parse('January 26, 2011 13:51:50')) // 1296021110000
console.log(Date.parse('time')) // NaN  => 解析失败则返回NaN

// (3). Date.UTC() => Date.UTC方法接受年、月、日等变量作为参数，返回该时间距离时间零点（1970年1月1日 00:00:00 UTC）的毫秒数
// 格式
// Date.UTC(year, month[, date[, hrs[, min[, sec[, ms]]]]])
console.log(Date.UTC(2011, 0, 1, 2, 3, 4, 567)) // 1293847384567

// ⚠️ 该方法的参数用法与Date构造函数完全一致，比如月从0开始计算，日期从1开始计算。区别在于Date.UTC方法的参数，会被解释为 UTC 时间（世界标准时间），Date构造函数的参数会被解释为当前时区的时间

// 5. 实例方法
console.log('################# 实例方法 ###################')
// Date的实例对象，有几十个自己的方法，除了valueOf和toString，可以分为以下三类：
// to类：从Date对象返回一个字符串，表示指定的时间
// get类：获取Date对象的日期和时间
// set类：设置Date对象的日期和时间

// (1). Date.prototype.valueOf() => valueOf方法返回实例对象距离时间零点（1970年1月1日00:00:00 UTC）对应的毫秒数，该方法等同于getTime方法
let d3 = new Date()
console.log(d3.valueOf())
console.log(d3.getTime())