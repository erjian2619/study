Function.prototype.myBind = function (){
  const _this = this;
  const args = Array.prototype.slice.call(arguments);
  const context = args.unshift();
  return function(){
    return _this.myApply(context, args)
  }
}

Function.prototype.myApply = function (context) {
  context = context || window
  context.fn = this;
  let res = arguments[1]
              ? context.fn(arguments[1])
              : context.fn()
  delete context.fn;
  return res
}

Function.prototype.myCall = function(context){
  context = context || window
  context.fn = this;
  const res = arguments[1]
              ? context.fn(...arguments[1])
              : context.fn()
  delete context.fn
  return res
}