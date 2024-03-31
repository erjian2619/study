// 原型链继承------------------
function Parent(){
  this.name = 'parent'
}

Parent.prototype.getName = function(){
  return this.name
}

function Son (){
  this.name = 'son'
}
Son.prototype = new Parent()
Son.prototype.constructor = Son
// 缺点：1.引用类型的属性被所有实例共享 2.在创建Child的实例时，不能向Parent传参

// 构造函数继承------------------
function Parent(){
  this.name = 'parent'
}

function Son(){
  Parent.call(this)
  this.type = 'son'
}
// 缺点：方法都在构造函数中定义，每次创建实例都会创建一遍方法

// 组合继承------------------
function Parent(){
  this.name = 'parent'
  this.play = [1,2,3]
}
Parent.prototype.getName = function(){
  return this.name
}

function Son(){
  Parent.call(this)
  this.type = 'son'
}
Son.prototype = new Parent()
Son.prototype.constructor = Son
// 缺点：调用了两次Parent构造函数


// 寄生组合继承------------------
function Parent(){
  this.name = 'parent'
  this.play = [1,2,3]
}
Parent.prototype.getName = function(){
  return this.name
}

function Son(){
  Parent.call(this)
  this.type = 'son'
}
Son.prototype = Object.create(Parent.prototype)
Son.prototype.constructor = Son




function myNew(Con, ...args){
  let obj = {}
  obj.__proto__ = Con.prototype
  let result = Con.apply(obj, args)
  return result instanceof Object ? result : obj
}