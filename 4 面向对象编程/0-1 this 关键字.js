/*
 * @Description: this 关键字
 * @Author: WaynePeng
 * @Date: 2020-04-21 17:43:17
 * @LastEditTime: 2020-04-21 18:09:34
 * @LastEditors: WaynePeng
 */
// 1. 涵义 => 不管是什么场合，this都有一个共同点：⚠️它总是返回一个对象⚠️。简单说，this就是属性或方法“当前”所在的对象
console.log('############### 涵义 #################')
// this.property
// 上面代码中，this就代表property属性当前所在的对象

let person = {
  name: '张三',
  describe: function () {
    return '姓名：'+ this.name;
  }
}
console.log(person.describe()) // 姓名：张三
// 上面代码中，this.name表示name属性所在的那个对象。由于this.name是在describe方法中调用，而describe方法所在的当前对象是person，因此this指向person，this.name就是person.name

// 由于对象的属性可以赋给另一个对象，所以属性所在的当前对象是可变的，即this的指向是可变的
let person1 = {
  name: '李四'
}
person1.describe = person.describe
console.log(person1.describe()) // 姓名：李四

// JavaScript 语言之中，一切皆对象，运行环境也是对象，所以函数都是在某个对象之中运行，this就是函数运行时所在的对象（环境）

// 2. 实质 => 