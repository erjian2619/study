function* fib(){
  let a = 0;
  let b = 1;

  while(true) {
    yield a;
    [a, b] = [ b, a + b ]
  }
}

function fib2(n){
  if(n < 2) return n;
  let pre = 0, next = 0, res = 1;
  for (let i = 0; i < n; i++) {
    pre = next;
    next = res;
    res = pre + next
  }
  return res
}

function fib3(n){
  if(n < 1) return 0;
  if(n <=2 ) return 1;
  return fib3(n -1) + fib3(n - 2)
}


// 最大和 [1,2,3,4,5,6,-123,1,3,4,6,44,3,13]

// 贪婪法
function maxSubArr(arr){
  let res = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // 看前面数的和对当前是否有增益，而不是看当前数对卡面的和是否有增益
    if(sum > 0){
      sum += arr[i]
    }else{
      sum = arr[i]
    }
    res = Math.max(sum, res)
  }
  return res
}

const arr = [1,2,3,-8,3,1,-2,1,8,1,-100];
console.log(maxSubArr(arr));


class Stack{
  constructor(){
    this.data = []
  }

  push(d){
    this.data.push(d)
  }

  pop(){
    return this.data.pop()
  }

  peek(){
    return this.data[this.data.length - 1]
  }

  size(){
    return this.data.length
  }
}

'{}{}{}[]()'

function isR(s){
  const map = {
    "}": "{",
    "]": "[",
    ")": '('
  }
  const stack = new Stack()
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    stack.push(element)
    // console.log( '进入', stack);
    if(stack.size() < 2) continue;
    const l = stack[stack.size() - 2];
    const r = stack[stack.size() - 1];
    // console.log(l, r);
    if(map[r] === l){
      stack.pop()
      stack.pop()
    }
    // console.log('结束', stack);
  }
  // console.log( 'res', stack);
  return stack.size() === 0
}

console.log(isR('{{{}}}'));