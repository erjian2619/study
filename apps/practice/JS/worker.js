self.addEventListener('message', (e) => {
  console.log('worker 线程受到的数据', e)
})
let count = 0

setInterval(() => {
  new Promise((resolve) => {
    ++count
    if (count > 5) return
    resolve('worker 线程返回数据' + count)
  }).then((value) => {
    self.postMessage(value)
  })
}, 1000)
