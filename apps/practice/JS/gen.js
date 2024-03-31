function* gen() {
  const res = yield Promise.resolve('Hello');
  console.log(res);
  const res1 = yield Promise.resolve('World');
  console.log(res1);
  return 'end';
}

function run(gen) {
  const g = gen();

  function next(data) {
    const result = g.next(data);
    if (result.done) return result.value;
    result.value.then(data => {
      next(data);
    });
  }

  next();
}
run(gen)


function* fib(){
  let a = 0;
  let b = 1;
  while(true){
    yield a;
    [a, b] = [b, a + b];
  }
}

let count = 0;
for (let value of fib()) {
  if (count > 8) break;
  count++
  console.log(value);
}