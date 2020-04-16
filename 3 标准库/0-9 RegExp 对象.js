/*
 * @Description: RegExp 对象
 * @Author: WaynePeng
 * @Date: 2020-03-24 14:20:38
 * @LastEditTime: 2020-04-16 10:50:13
 * @LastEditors: WaynePeng
 */
{
  // ***************你真的懂 JavaScript 的正则吗？******************
  console.log('################### 知乎 #####################')
  // 在JavaScript中使用正则表达式进行模式匹配离不开RegExp对象，创建正则对象有两种方式
  // 1. 正则表达式直接量(包含在一对/之间的字符)
  let regexp = /JavaScript/
  console.log(regexp.test('hello JavaScript !')) // true

  // 2. new RegExp()
  let regexp1 = new RegExp('JavaScript')
  console.log(regexp1.test('JavaScript')) // true

  // 正则——直接字符量
  console.log('############### 正则——直接字符量 ###############')
  // 直接字符量表示字符在正则表达式中的表达形式。特殊字符需\转义

  // 字母、数字 -> 自身
  // \o -> NULL字符(\u0000)
  // \t -> 制表符(\u0009)
  // \n -> 换行符(\u000A)
  // \v -> 垂直制表符(\u000B)
  // \f -> 换页符(\u000C)
  // \r -> 回车符(\u000D)

  // 正则——字符类
  console.log('################ 正则——字符类 #################')
  // 将字符量放入 [] 中就成了字符类，字符类匹配它包含的任意一个字符

  // [abc] // 表示a 或者b 或者c
  console.log(/[abc]/.test('ace')) // true
  // [^abc] // ^在这里表示取反，除了a、b、c之外的所有字符
  console.log(/[^abc]/.test('d')) // true
  // [a-z] //-表示连接,从a到z的任意字符
  console.log(/[a-c]/.test('b')) // true
  // 由上面我们可以知道,[0-9]表示任意数字，像这种常用的字符类，JavaScript给他们制订了自己的特殊转义字符。

  // . // 除换行符与其他Unicode行终止符以外的任意字符
  // \w // 等价于[a-zA-Z0-9_]，大小写字母、数字、下划线63字符中任意一个
  // \W // 等价于[^a-zA-Z0-9_]
  // \s // 任何Unicode空白符
  // \S // 任何Unicode非空白符
  // \d // 等价于[0-9]
  // \D // 等价于[^0-9]
  // [\b] // \b放入[]中标识退格直接量

  // 正则——重复
  console.log('################# 正则——重复 ##################')
  // 描述相同字符，多次出现

  // {n, m} // 最少重复n次，最多重复m次
  // {n, } // 至少重复n次
  // {n} //重复n次
  // ? // 等价于 {0, 1}
  // + // 等价于 {1,}
  // * // 等价于 {0,}

  let regexp2 = /a{2, 3}/
  let regexp3 = /b{1,}/
  let regexp4 = /c{2}/
  const s = 'aaaabbcc'
  console.log(regexp2.test(s)) // false
  console.log(regexp3.test(s)) // true
  console.log(regexp4.test(s)) // true

  // 在这里会多出一个概念：非贪婪重复
  // 在上述例子中，reg.test(str) === true
  // 我们用reg.exec(str) 获取匹配结果会发现 结果为'aaa'
  // 如果我们选择使用非贪婪重复

  let reg = new RegExp('a{2,}?')
  let str = 'aaa'
  console.log(reg.exec(str)) // [ 'aa', index: 0, input: 'aaa', groups: undefined ]
  // 这时候结果为 'aa',实现非贪婪重复很简单，在重复后面添加?即可，这时候，正则表达式会尽可能少的去匹配重复

  // {n, m} -> {n, m}?
  // {n, } -> {n,}?
  // {n} -> {n}?
  // ? -> ??
  // + -> +?
  // * -> *?

  // 选择
  console.log('#################### 选择 ######################')
  // 用 | 可以分割用于选择的字符，优先级从左向右
  // ab|cd|ef // 表示 ab 或者 cd 或者 ef
  console.log(/ab|cd|ef/.test('cd')) // true

  // 子模式
  console.log('##################### 子模式 ######################')

  // () 在包裹子表达式同时将其定义为子模式
  // 我们可以通过 \index 这种写法在同一个正则表达式中调用子模式, index表示子模式的索引，从1开始
  let regexp5 = /(javaScript) \1 \1/
  // 等价于
  let regexp6 = /javaScript javaScript javaScript/
  console.log(regexp5.test('javaScript javaScript javaScript')) // true

  // 子模式还有助于我们抽取子表达式匹配结果
  // 把上述例子改为用exec方法并且打印
  console.log(regexp5.exec('javaScript javaScript javaScript')) // [ 'javaScript javaScript javaScript', 'javaScript', index: 0, input: 'javaScript javaScript javaScript', groups: undefined ]
  console.log(regexp6.exec('javaScript javaScript javaScript')) // [ 'javaScript javaScript javaScript', 'javaScript', index: 0, input: 'javaScript javaScript javaScript', groups: undefined ]

  // JavaScript允许我们在使用子表达式的时候不生成子模式
  // 使用(?: )来包裹子表达式

  let regexp7 = /(?:java)script and java \1/
  console.log(regexp7.test('javascript and java java')) // false
  // 此时我们无法通过\1找到其子模式，也无法获取其子模式的匹配结果

  // 指定匹配位置
  // ^ // 字符串开始位置（在字符类中表示取反）
  console.log(/^abc/.test('abcdef')) // true
  // $ // 字符串的结束位置
  console.log(/abc$/.test('abc')) // true
  // \b // 单词边界,也就是\w与\W的边界
  console.log(/\b/.test('pw')) // true
  // (?=p) // 要求字符串与p匹配，但是结果集并不包含匹配p的字符
  console.log(/abc(?=d)/.exec('abc')) // null => 匹配失败，因为不包含d
  console.log(/abc(?=d)/.exec('abcd')) // [ 'abc', index: 0, input: 'abcd', groups: undefined ]  => 匹配成功,但是返回的结果不包含d
  // (?!p) // 要求字符串不与p匹配
  console.log(/ab(?!c)/.exec('abcd')) // null
  console.log(/ab(?!c)/.exec('ab')) // [ 'ab', index: 0, input: 'ab', groups: undefined ]

  // 修饰符
  console.log('#################### 修饰符 #####################')
  // i // 不区分大小写
  // m // 匹配多行（使用^ $指定起止时候能通融\n换行)
  // g // 匹配成功第一处，并不会继续停止，会继续寻找所有匹配
  // 通过直接量创建正则对象添加修饰符: /java/gim (使用多个修饰词直接并列)
  // 通过构造函数创建正则对象添加修饰符: new RegExp(reg , 'gim')
  console.log(/Abc[dg](e$)/i.test('abcde')) // true
  // ***************************************************************
}

{
  console.log('################ RegExp对象 ####################')
  // 1. 概述 => 正则表达式（regular expression）是一种表达文本模式（即字符串结构）的方法，有点像字符串的模板，常常用来按照“给定模式”匹配文本
  console.log('################### 概述 ######################')
  // 新建正则表达式有两种方法:
  // 一种是使用字面量，以斜杠表示开始和结束
  // /abc/

  // 另一种是使用RegExp构造函数
  // new RegExp('abc')

  // 上面两种写法是等价的，都新建了一个内容为 abc 的正则表达式对象。它们的主要区别是，第一种方法在引擎编译代码时，就会新建正则表达式，第二种方法在运行时新建正则表达式，所以前者的效率较高。而且，前者比较便利和直观，所以实际应用中，基本上都采用字面量定义正则表达式
  // RegExp构造函数还可以接受第二个参数，表示修饰符（详细解释见下文）
  // new RegExp('xyz', 'i')
  // // 等价于
  // /xyz/i;

  // 2. 实例属性
  console.log('###################### 实例属性 #######################')
  //   正则对象的实例属性分成两类:

  // 一类是修饰符相关，用于了解设置了什么修饰符
  // RegExp.prototype.ignoreCase：返回一个布尔值，表示是否设置了i修饰符
  // RegExp.prototype.global：返回一个布尔值，表示是否设置了g修饰符
  // RegExp.prototype.multiline：返回一个布尔值，表示是否设置了m修饰符
  // RegExp.prototype.flags：返回一个字符串，包含了已经设置的所有修饰符，按字母排序

  // 上面四个属性都是只读的
  let r = /abc/gim
  console.log(r.ignoreCase) // true
  console.log(r.global) // true
  console.log(r.multiline) // true
  console.log(r.flags) // 'gim'

  // 另一类是与修饰符无关的属性，主要是下面两个
  // RegExp.prototype.lastIndex：返回一个整数，表示下一次开始搜索的位置。该属性可读写，但是只在进行连续搜索时有意义
  // RegExp.prototype.source：返回正则表达式的字符串形式（不包括反斜杠），该属性只读

  console.log(r.lastIndex) // 0
  console.log(r.source) // "abc"

  // 3.实例方法
  console.log('###################### 实例方法 #######################')
  // (1). RegExp.prototype.test() => 正则实例对象的test方法返回一个布尔值，表示当前模式是否能匹配参数字符串
  console.log('################ (1). RegExp.prototype.test() #################')
  console.log(/13/.test('my dog name is 13')) // 13
  // 如果正则表达式带有g修饰符，则每一次test方法都从上一次结束的位置开始向后匹配
  let r1 = /x/g
  let s1 = '_x_x'

  console.log(r1.lastIndex) // 0
  console.log(r1.test(s1)) // true

  console.log(r1.lastIndex) // 2
  console.log(r1.test(s1)) // true

  console.log(r1.lastIndex) // 4
  console.log(r1.test(s1)) // false

  // 上面代码的正则表达式使用了g修饰符，表示是全局搜索，会有多个结果。接着，三次使用test方法，每一次开始搜索的位置都是上一次匹配的后一个位置
  // 带有g修饰符时，可以通过正则对象的lastIndex属性指定开始搜索的位置

  console.log(r1.lastIndex) // 0
  console.log(r1.test(s1)) // true
  // 因为 r1.test() 上一次匹配失败，则 lastIndex 被设置为 0

  // ⚠️ 注意，带有g修饰符时，正则表达式内部会记住上一次的lastIndex属性，这时不应该更换所要匹配的字符串，否则会有一些难以察觉的错误
  // 正则实例对象的lastIndex属性不仅可读，还可写。设置了g修饰符的时候，只要手动设置了lastIndex的值，就会从指定位置开始匹配

  let r2 = /abc/g
  console.log(r2.test('abc')) // true
  console.log(r2.test('abcd')) // false

  // 上面代码中，由于正则表达式r是从上一次的lastIndex位置开始匹配，导致第二次执行test方法时出现预期以外的结果

  // ⚠️ 注意：lastIndex属性只对同一个正则表达式有效
  // let i = 0
  // while (/a/g.test('babaa')) i++
  // 上面代码会导致无限循环，因为while循环的每次匹配条件都是一个新的正则表达式，导致lastIndex属性总是等于0

  // 如果正则模式是一个空字符串，则匹配所有字符串
  console.log(new RegExp('').test('abc')) // true

  // (2). RegExp.prototype.exec() => 正则实例对象的exec()方法，用来返回匹配结果。如果发现匹配，就返回一个数组，成员是匹配成功的子字符串，否则返回null
  console.log('############### (2). RegExp.prototype.exec() ################')
  console.log(/x/.exec('_x_x')) // [ 'x', index: 1, input: '_x_x', groups: undefined ]
  console.log(/y/.exec('_x_x')) // null

  // 如果正则表示式包含圆括号（即含有“组匹配”），则返回的数组会包括多个成员。第一个成员是整个匹配成功的结果，后面的成员就是圆括号对应的匹配成功的组。也就是说，第二个成员对应第一个括号，第三个成员对应第二个括号，以此类推。整个数组的length属性等于组匹配的数量再加1
  console.log(/_(x)(y)/.exec('_x_xy')) // [ '_xy', 'x', 'y', index: 2, input: '_x_xy', groups: undefined ]

  // exec()方法的返回数组还包含以下两个属性：
  // input：整个原字符串。
  // index：模式匹配成功的开始位置（从0开始计数）

  // 4.字符串的实例方法
  console.log('##################### 字符串的实例方法 #######################')
  //   字符串的实例方法之中，有4种与正则表达式有关:
  // String.prototype.match()：返回一个数组，成员是所有匹配的子字符串
  console.log(
    '################### String.prototype.match() ####################'
  )
  // 字符串实例对象的match方法对字符串进行正则匹配，返回匹配结果，没有匹配到则返回null
  console.log('abc'.match(/d/)) // null

  console.log('abcabc'.match(/a/)) // [ 'a', index: 0, input: 'abcabc', groups: undefined ]

  // 如果加上g修饰符的话则会一次返回所有
  console.log('abcabc'.match(/a/g)) // [ 'a', 'a' ]

  // 设置正则表达式的lastIndex属性，对match方法无效，匹配总是从字符串的第一个字符开始

  // String.prototype.search()：按照给定的正则表达式进行搜索，返回一个整数，表示匹配开始的位置
  console.log(
    '################### String.prototype.search() ####################'
  )
  // 字符串对象的search方法，返回第一个满足条件的匹配结果在整个字符串中的位置。如果没有任何匹配，则返回-1
  console.log('abc'.search(/d/)) // -1
  console.log('abc'.search(/a/)) // 0

  // String.prototype.replace()：按照给定的正则表达式进行替换，返回替换后的字符串
  console.log(
    '################### String.prototype.replace() ####################'
  )
  // 字符串对象的replace方法可以替换匹配的值。它接受两个参数，第一个是正则表达式，表示搜索模式，第二个是替换的内容
  // 正则表达式如果不加g修饰符，就替换第一个匹配成功的值，否则替换所有匹配成功的值
  console.log('aaa'.replace('a', 'b')) // baa
  console.log('aaa'.replace(/a/, 'b')) // baa
  console.log('aaa'.replace(/a/g, 'b')) // bbb

  // replace方法的第二个参数可以使用美元符号$，用来指代所替换的内容:
  // $&：匹配的子字符串
  // $`：匹配结果前面的文本
  // $'：匹配结果后面的文本
  // $n：匹配成功的第n组内容，n是从1开始的自然数
  // $$：指代美元符号$
  console.log('hello world'.replace(/(\w+)\s(\w+)/, '$2 $1')) // // world hello

  // String.prototype.split()：按照给定规则进行字符串分割，返回一个数组，包含分割后的各个成员
  console.log(
    '################### String.prototype.split() ####################'
  )
  // str.split(separator, [limit])
  // 该方法接受两个参数，第一个参数是正则表达式，表示分隔规则，第二个参数是返回数组的最大成员数
  // 非正则分隔
  console.log('a,  b,c, d'.split(',')) // [ 'a', '  b', 'c', ' d' ]

  // 正则分隔，去除多余的空格
  console.log('a,  b,c, d'.split(/, */)) // [ 'a', 'b', 'c', 'd' ]

  // 指定返回数组的最大成员
  console.log('a,  b,c, d'.split(/, */, 2)) // [ 'a', 'b' ]

  // 5. 匹配规则
  console.log('################ 匹配规则 #################')
  // (1). 字面量字符和元字符 => 大部分字符在正则表达式中，就是字面的含义，比如/a/匹配a，/b/匹配b。如果在正则表达式之中，某个字符只表示它字面的含义（就像前面的a和b），那么它们就叫做“字面量字符”
  console.log(/a/.test('abc')) // true

  // 除了字面量字符以外，还有一部分字符有特殊含义，不代表字面的意思。它们叫做“元字符”
  // (1.1). 点字符（.) => 点字符（.）匹配除回车（\r）、换行(\n) 、行分隔符（\u2028）和段分隔符（\u2029）以外的所有字符。注意，对于码点大于0xFFFF字符，点字符不能正确匹配，会认为这是两个字符
  console.log(/c.t/.test('cat')) // true
  console.log(/c.t/.test('coot')) // false
  // c.t匹配c和t之间包含任意一个字符的情况，只要这三个字符在同一行，比如cat、c2t、c-t等等，但是不匹配coot

  // (1.2). 位置字符 => 位置字符用来提示字符所处的位置，主要有两个字符。 ^ 表示字符串的开始位置  $ 表示字符串的结束位置
  console.log(/^abc/.test('abcdef')) // true => 以 abc 开头
  console.log(/abc$/.test('123abc')) // true => 以 abc 为结尾
  console.log(/^abc$/.test('abcdef')) // false => 开头到结尾只有 abc

  // (1.3). 选择符（|）=> 竖线符号（|）在正则表达式中表示“或关系”（OR）
  console.log(/11|22/.test('110')) // true => 匹配到 11 或者 22
  // 多个选择符可以联合使用
  // 选择符会包括它前后的多个字符，比如/ab|cd/指的是匹配ab或者cd，而不是指匹配b或者c。如果想修改这个行为，可以使用圆括号
  console.log(/a( |\t)b/.test('a b')) // true => 上面代码指的是，a和b之间有一个空格或者一个制表符

  // 其他的元字符还包括\、\*、+、?、()、[]、{}等

  // (2). 转义符 => 正则表达式中那些有特殊含义的元字符，如果要匹配它们本身，就需要在它们前面要加上反斜杠
  console.log(/1+1/.test('1+1')) // false
  console.log(/1\+1/.test('1+1')) // true

  // 正则表达式中，需要反斜杠转义的，一共有12个字符：^、.、[、$、(、)、|、*、+、?、{和\。需要特别注意的是，如果使用RegExp方法生成正则对象，转义需要使用两个斜杠，因为字符串内部会先转义一次

  console.log(new RegExp('1+1').test('1+1')) // false
  console.log(new RegExp('1\\+1').test('1+1')) // true

  // (3). 特殊字符 => 正则表达式对一些不能打印的特殊字符：

  // \cX 表示Ctrl-[X]，其中的X是A-Z之中任一个英文字母，用来匹配控制字符
  // [\b] 匹配退格键(U+0008)，不要与\b混淆
  // \n 匹配换行键
  // \r 匹配回车键
  // \t 匹配制表符 tab（U+0009）
  // \v 匹配垂直制表符（U+000B）
  // \f 匹配换页符（U+000C）
  // \0 匹配null字符（U+0000）
  // \xhh 匹配一个以两位十六进制数（\x00-\xFF）表示的字符
  // \uhhhh 匹配一个以四位十六进制数（\u0000-\uFFFF）表示的 Unicode 字符

  // (4). 字符类 => 字符类（class）表示有一系列字符可供选择，只要匹配其中一个就可以了。所有可供选择的字符都放在方括号内
  console.log(/[abc]/.test('hello')) // false
  console.log(/[abc]/.test('apple')) // true

  // 有两个字符在字符类中有特殊含义
  // (4.1). 脱字符（^）=> 如果方括号内的第一个字符是[^]，则表示除了字符类之中的字符，其他字符都可以匹配。比如，[^xyz]表示除了x、y、z之外都可以匹配
  console.log(/[^abc]/.test('bbc news')) // true => 字符串bbc news包含a、b、c以外的其他字符，所以返回true
  console.log(/[^abc]/.test('bbc')) // false => 字符串bbc不包含a、b、c以外的其他字符，所以返回false

  // 如果方括号内没有其他字符，即只有[^]，就表示匹配一切字符，其中包括换行符。相比之下，点号作为元字符（.）是不包括换行符的

  let s2 = 'Please yes\nmake my day!'
  console.log(s2.match(/yes.*day/)) // null
  console.log(s2.match(/yes[^]*day/)) // [ 'yes\nmake my day']
  // 上面代码中，字符串s含有一个换行符，点号不包括换行符，所以第一个正则表达式匹配失败；第二个正则表达式[^]包含一切字符，所以匹配成功

  // ⚠️注意，脱字符只有在字符类的第一个位置才有特殊含义，否则就是字面含义

  // (4.2). 连字符（-） => 某些情况下，对于连续序列的字符，连字符（-）用来提供简写形式，表示字符的连续范围
  console.log(/a-z/.test('b')) // false => 当连字号（dash）不出现在方括号之中，就不具备简写的作用，只代表字面的含义，所以不匹配字符b
  console.log(/[a-z]/.test('b')) // true => 当连字号用在方括号之中，才表示连续的字符序列

  // (5). 预定义模式
  // 预定义模式指的是某些常见模式的简写方式:
  // \d 匹配0-9之间的任一数字，相当于[0-9]
  // \D 匹配所有0-9以外的字符，相当于[^0-9]
  // \w 匹配任意的字母、数字和下划线，相当于[A-Za-z0-9_]
  // \W 除所有字母、数字和下划线以外的字符，相当于[^A-Za-z0-9_]
  // \s 匹配空格（包括换行符、制表符、空格符等），相等于[ \t\r\n\v\f]
  // \S 匹配非空格的字符，相当于[^ \t\r\n\v\f]
  // \b 匹配词的边界
  // \B 匹配非词边界，即在词的内部

  // (6). 重复类
  // 模式的精确匹配次数，使用大括号（{}）表示。{n}表示恰好重复n次，{n,}表示至少重复n次，{n,m}表示重复不少于n次，不多于m次

  // (7). 量词符
  // 量词符用来设定某个模式出现的次数:
  // ? 问号表示某个模式出现0次或1次，等同于{0, 1}
  // * 星号表示某个模式出现0次或多次，等同于{0,}
  // + 加号表示某个模式出现1次或多次，等同于{1,}

  // (8). 贪婪模式
  // 上一小节的三个量词符，默认情况下都是最大可能匹配，即匹配直到下一个字符不满足匹配规则为止。这被称为贪婪模式
  console.log('aaab'.match(/a+/)) // [ 'aaa', index: 0, input: 'aaab', groups: undefined ]
  // 上面代码中，模式是/a+/，表示匹配1个a或多个a，那么到底会匹配几个a呢？因为默认是贪婪模式，会一直匹配到字符a不出现为止，所以匹配结果是3个a

  // 如果想将贪婪模式改为非贪婪模式，可以在量词符后面加一个问号
  console.log('aaab'.match(/a+?/)) // [ 'a', index: 0, input: 'aaab', groups: undefined ]
  // 上面代码中，模式结尾添加了一个问号/a+?/，这时就改为非贪婪模式，一旦条件满足，就不再往下匹配

  // 除了非贪婪模式的加号，还有非贪婪模式的星号（*）和非贪婪模式的问号（?）:
  // +?：表示某个模式出现1次或多次，匹配时采用非贪婪模式
  // *?：表示某个模式出现0次或多次，匹配时采用非贪婪模式
  // ??：表格某个模式出现0次或1次，匹配时采用非贪婪模式

  // (9). 修饰符 => 修饰符（modifier）表示模式的附加规则，放在正则模式的最尾部 (修饰符可以单个使用，也可以多个一起使用)
  // (9.1). g 修饰符 => 默认情况下，第一次匹配成功后，正则对象就停止向下匹配了。g修饰符表示全局匹配（global），加上它以后，正则对象将匹配全部符合条件的结果，主要用于搜索和替换
  let r3 = /a/
  let s3 = 'aac'
  console.log(r3.test(s3)) // true
  console.log(r3.test(s3)) // true
  console.log(r3.test(s3)) // true
  // 正则模式不含g修饰符，每次都是从字符串头部开始匹配。所以，连续做了三次匹配，都返回true
  
  let r4 = /a/g
  let s4 = 'aac'
  console.log(r4.test(s4)) // true
  console.log(r4.test(s4)) // true
  console.log(r4.test(s4)) // false
  // 正则模式含有g修饰符，每次都是从上一次匹配成功处，开始向后匹配。因为字符串abba只有两个b，所以前两次匹配结果为true，第三次匹配结果为false
  
  // (9.2). i 修饰符 => 默认情况下，正则对象区分字母的大小写，加上i修饰符以后表示忽略大小写
  console.log(/ABC/.test('abc')) // false
  console.log(/ABC/i.test('abc')) // true

  // (9.3). m 修饰符 => m修饰符表示多行模式（multiline），会修改^和$的行为。默认情况下（即不加m修饰符时），^和$匹配字符串的开始处和结尾处，加上m修饰符以后，^和$还会匹配行首和行尾，即^和$会识别换行符（\n）
  console.log(/world$/.test('hello world\n')) // false
  console.log(/world$/m.test('hello world\n')) // true

  console.log(/^b/m.test('a\nb')) // true
  // 上面代码要求匹配行首的b，如果不加m修饰符，就相当于b只能处在字符串的开始处。加上m修饰符以后，换行符\n也会被认为是一行的开始

  // (10)
  // (10.1). 组匹配 => 正则表达式的括号表示分组匹配，括号中的模式可以用来匹配分组的内容
  console.log(/abc+/.test('abcc')) // true
  console.log(/(abc)+/.test('abcabc')) // true
  // 上面代码中，第一个模式没有括号，结果+只表示重复字母c，第二个模式有括号，结果+就表示匹配abc这个词
  
  // (10.2). 非捕获组 => (?:x)称为非捕获组（Non-capturing group），表示不返回该组匹配的内容，即匹配的结果中不计入这个括号
  // 非捕获组的作用请考虑这样一个场景，假定需要匹配foo或者foofoo，正则表达式就应该写成/(foo){1, 2}/，但是这样会占用一个组匹配。这时，就可以使用非捕获组，将正则表达式改为/(?:foo){1, 2}/，它的作用与前一个正则是一样的，但是不会单独输出括号内部的内容
  console.log('abc'.match(/(?:.)b(.)/)) // [ 'abc', 'c', index: 0, input: 'abc', groups: undefined ]

  // (10.3). 先行断言 => x(?=y)称为先行断言（Positive look-ahead），x只有在y前面才匹配，y不会被计入返回结果。比如，要匹配后面跟着百分号的数字，可以写成/\d+(?=%)/
  console.log(/[0-9]+(?=%)/.exec('100%')) // [ '100', index: 0, input: '100%', groups: undefined ]
}
