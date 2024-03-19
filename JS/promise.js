const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';


class MyPromise {
  constructor(exector) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined
    this.onFulfillFn = [];
    this.onRejectFn = [];

    const resolve = (value) => {
      if (this.status === PENDING) {
        queueMicrotask(() => {
          if (this.status !== PENDING) return;
          this.value = value;
          this.status = FULFILLED
          this.onFulfillFn.forEach((fn) => fn(this.value))
        })
      }
    }

    const reject = (reason) => {
      if (this.status === PENDING) {
        queueMicrotask(() => {
          if (this.status !== PENDING) return;
          this.reason = reason;
          this.status = REJECTED;
          this.onRejectFn.forEach((fn) => fn(this.reason))
        })
      }
    }

    try {
      exector(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfill, onReject) {
    onFulfill = onFulfill || ((value) => { return value});
    onReject = onReject || ((reason) => {
      throw reason
    });
    
    return new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        try {
          resolve(onFulfill(this.value))
        } catch (e) {
          reject(e)
        }
      }
      if (this.status === REJECTED) {
        try {
          reject(onReject(this.reason))
        } catch (e) {
          reject(e)
        }
      }

      if (this.status === PENDING) {
        this.onFulfillFn.push(onFulfill)
        this.onRejectFn.push(onReject)
      }
    })
  }

  catch(fn) {
    return this.then(undefined, fn)
  }

  finally(fn) {
    return this.then(() => fn(), () => fn())
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      const result = [];
      let count = 0;
      for (let i = 0; i < promises.length; i++) {
        const promise = promises[i];
        promise
          .then(value => {
            result[i] = value;
            if (count === promises.length) {
              resolve(result)
            }
          })
          .catch(error => reject(error))
      }
    })
  }

  static resolve(value) {
    return new MyPromise((resolve) => resolve(value))
  }

  static reject(reason) {
    return new MyPromise((resolve, reject) => reject(reason))
  }
  
//  static race(promises){
//    return new MyPromise((resolve, reject) => {
//      for(let i = 0;)
//    })
//  }
}


new MyPromise((resolve, reject) => {
  resolve('123123')
}).then(res => console.log(res))

