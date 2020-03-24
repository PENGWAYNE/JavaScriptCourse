/*
 * @Description: Date 对象
 * @Author: WaynePeng
 * @Date: 2020-03-21 14:46:38
 * @LastEditTime: 2020-03-24 14:17:32
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

// (1). Date.prototype.valueOf() => valueOf方法返回实例对象距离时间零点（1970年1月1日00:00:00 UTC）对应的毫秒数，该方法等同于getTime方法 (预期为数值的场合，Date实例会自动调用该方法)
let d3 = new Date()
console.log(d3.valueOf())
console.log(d3.getTime())

// (2). to 类方法
console.log('################## to 类方法 ##################')
// 2.1 Date.prototype.toString() => toString方法返回一个完整的日期字符串
let d4 = new Date(2010, 1, 1)
console.log(d4.toString()) // Mon Feb 01 2010 00:00:00 GMT+0800 (GMT+08:00)

// toString是默认的调用方法，所以如果直接读取Date实例，就相当于调用这个方法
console.log(d4) // 2010-01-31T16:00:00.000Z

// 2.2 Date.prototype.toUTCString() => toUTCString方法返回对应的 UTC 时间，也就是比北京时间晚8个小时
console.log(d4.toUTCString()) // Sun, 31 Jan 2010 16:00:00 GMT

// 2.3 Date.prototype.toISOString() => toISOString方法返回对应时间的 ISO8601 写法 (toISOString方法返回的总是 UTC 时区的时间)
console.log(d4.toISOString()) // 2010-01-31T16:00:00.000Z

// 2.4 Date.prototype.toJSON() => toJSON方法返回一个符合 JSON 格式的 ⚠️ ISO 日期 ⚠️字符串，与toISOString方法的返回结果完全相同
console.log(d4.toJSON()) // 2010-01-31T16:00:00.000Z

// 2.5 Date.prototype.toDateString() => toDateString方法返回日期字符串（不含小时、分和秒）
console.log(d4.toDateString()) // Mon Feb 01 2010

// 2.6 Date.prototype.toTimeString() => toTimeString方法返回时间字符串（不含年月日）
console.log(d4.toTimeString()) // 00:00:00 GMT+0800 (GMT+08:00)

// 2.7 本地时间
// 以下三种方法，可以将 Date 实例转为表示本地时间的字符串:

// Date.prototype.toLocaleString()：完整的本地时间
// Date.prototype.toLocaleDateString()：本地日期（不含小时、分和秒）
// Date.prototype.toLocaleTimeString()：本地时间（不含年月日）
let d5 = new Date(2013, 0, 1)

console.log(d5.toLocaleString())
// 中文版浏览器为"2013年1月1日 上午12:00:00"
// 英文版浏览器为"1/1/2013 12:00:00 AM"

console.log(d5.toLocaleDateString())
// 中文版浏览器为"2013年1月1日"
// 英文版浏览器为"1/1/2013"

console.log(d5.toLocaleTimeString())
// 中文版浏览器为"上午12:00:00"
// 英文版浏览器为"12:00:00 AM"

// 这三个方法都有两个可选的参数:

// dateObj.toLocaleString([locales[, options]])
// dateObj.toLocaleDateString([locales[, options]])
// dateObj.toLocaleTimeString([locales[, options]])

// options配置对象有以下属性:

// dateStyle：可能的值为full、long、medium、short
// timeStyle：可能的值为full、long、medium、short
// month：可能的值为numeric、2-digit、long、short、narrow
// year：可能的值为numeric、2-digit
// weekday：可能的值为long、short、narrow
// day、hour、minute、second：可能的值为numeric、2-digit
// timeZone：可能的值为 IANA 的时区数据库
// timeZooneName：可能的值为long、short
// hour12：24小时周期还是12小时周期，可能的值为true、false

// (3). get 类方法
// Date对象提供了一系列get*方法，用来获取实例对象某个方面的值

let d6 = new Date(2020, 2, 24)

// getTime()：返回实例距离1970年1月1日00:00:00的毫秒数，等同于valueOf方法
console.log(d6.getTime()) // 1584979200000
// getDate()：返回实例对象对应每个月的几号（从1开始）
console.log(d6.getDate()) // 24
// getDay()：返回星期几，星期日为0，星期一为1，以此类推
console.log(d6.getDay()) // 2
// getFullYear()：返回四位的年份
console.log(d6.getFullYear()) // 2020
// getMonth()：返回月份（0表示1月，11表示12月）
console.log(d6.getMonth()) // 2
// getHours()：返回小时（0-23）
console.log(d6.getHours()) // 0
// getMilliseconds()：返回毫秒（0-999）
console.log(d6.getMilliseconds()) // 0
// getMinutes()：返回分钟（0-59）
console.log(d6.getMinutes()) // 0
// getSeconds()：返回秒（0-59）
console.log(d6.getSeconds()) // 0
// getTimezoneOffset()：返回当前时间与 UTC 的时区差异，以分钟表示，返回结果考虑到了夏令时因素
console.log(d6.getTimezoneOffset()) // -480

// 所有这些get*方法返回的都是整数，不同方法返回值的范围不一样
// 分钟和秒：0 到 59
// 小时：0 到 23
// 星期：0（星期天）到 6（星期六）
// 日期：1 到 31
// 月份：0（一月）到 11（十二月）

// 上面这些get*方法返回的都是当前时区的时间，Date对象还提供了这些方法对应的 UTC 版本，用来返回 UTC 时间
// getUTCDate()
// getUTCFullYear()
// getUTCMonth()
// getUTCDay()
// getUTCHours()
// getUTCMinutes()
// getUTCSeconds()
// getUTCMilliseconds()

// (4). set 类方法
console.log('################## set 类方法 ###################')
// Date对象提供了一系列set*方法，用来设置实例对象的各个方面:
// setDate(date)：设置实例对象对应的每个月的几号（1-31），返回改变后毫秒时间戳
// setFullYear(year [, month, date])：设置四位年份
// setHours(hour [, min, sec, ms])：设置小时（0-23）
// setMilliseconds()：设置毫秒（0-999）
// setMinutes(min [, sec, ms])：设置分钟（0-59）
// setMonth(month [, date])：设置月份（0-11）
// setSeconds(sec [, ms])：设置秒（0-59）
// setTime(milliseconds)：设置毫秒时间戳
// 这些方法基本是跟get*方法一一对应的，但是没有setDay方法，因为星期几是计算出来的，而不是设置的。另外，需要注意的是，凡是涉及到设置月份，都是从0开始算的，即0是1月，11是12月

let d7 = new Date(2020, 2, 20)
console.log(d7) // 2020-03-19T16:00:00.000Z
console.log(d7.setDate(3)) // 1583164800000
console.log(d7) // 2020-03-02T16:00:00.000Z

// set*方法的参数都会自动折算。以setDate()为例，如果参数超过当月的最大天数，则向下一个月顺延，如果参数是负数，表示从上个月的最后一天开始减去的天数
d7.setDate(50)
console.log(d7) // 2020-04-18T16:00:00.000Z
d7.setDate(-10)
console.log(d7) // 2020-03-20T16:00:00.000Z

// set类方法和get类方法，可以结合使用，得到相对时间
var d8 = new Date();

// 将日期向后推1000天
d8.setDate(d8.getDate() + 1000)
// 将时间设为6小时后
d8.setHours(d8.getHours() + 6)
// 将年份设为去年
d8.setFullYear(d8.getFullYear() - 1)

// set*系列方法除了setTime()，都有对应的 UTC 版本，即设置 UTC 时区的时间:
// setUTCDate()
// setUTCFullYear()
// setUTCHours()
// setUTCMilliseconds()
// setUTCMinutes()
// setUTCMonth()
// setUTCSeconds()
