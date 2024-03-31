// 1. 确认输入输出 - 入： tree - 出：void
// 2. 执行方式  遍历 | 递归
// 3. 先子后兄

// 深度优先遍历 dfs--------------------------------------------
// 递归
function dfs(node) {
  console.log(node)
  if (node.children) {
    node.children.forEach((child) => {
      dfs(child)
    })
  }
}

// 遍历 栈
function dfs2(node) {
  const stack = [node]
  while (stack.length > 0) {
    const current = stack.pop()
    if (current.children) {
      current.children.reverse().forEach((child) => stack.push(child))
    }
  }
}

// 广度优先遍历 bfs-------------------------------------------

// 递归  队列 ---- 到对应的节点时，把子节点放入队列，然后递归
function bfs(node, queue = [node]) {
  if (queue.length === 0) return
  const current = queue.shift()
  console.log(current.value)
  if (current.children) {
    queue.push(...current.children)
  }

  bfs(null, queue)
}

// 遍历
function bfs2(node) {
  const queue = [node]

  while (queue.length) {
    const current = queue.shift()
    console.log(current.value)
    if (current.children) {
      current.children.forEach((child) => {
        queue.push(child)
      })
    }
  }
}

// 快速构建二叉树

// 1. 左边有要小于父节点
// 2. 右边有要大于父节点
// 3. 左右节点也满足上面条件

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)

    const insertNode = (node, newNode) => {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode
        } else {
          insertNode(node.left, newNode)
        }
      } else {
        if (node.right === null) {
          node.right = newNode
        } else {
          insertNode(node.right, newNode)
        }
      }
    }

    if (this.root === null) {
      this.root = newNode
    } else {
      insertNode(this.root, newNode)
    }
  }

  findMax() {
    let max = nul

    // 深度优先，贪婪
    function dfs(node) {
      if (node === null) return
      if (max === null || node.value > max) {
        max = node.value
      }
      dfs(node.left)
      dfs(node.right)
    }

    dfs(this.root)
    return max
  }
}

// function total(arr){
//   return arr.reduce((pre, cur) => pre + cur, 0)
// }

// function runWorld(gas, cost){
//   if(total(cost) > total(gas)) return -1;
//   let res = 0;
//   let tank = 0;
//   for (let i = 0; i < gas.length; i++) {
//     tank += gas[i] -cost[i]
//     if(tank < 0){
//       res = i + 1
//     }
//   }
//   return res
// }

// var myAtoi = function(s) {
//   let res = '0';
//   let char = false;

//   for (let i = 0; i < s.length; i++) {
//     const e = s[i];
//     if(res.length === 1 && e === ' ') continue;
//     if(res.length === 1 && e === '+') {
//       res+='0'
//       continue
//     };
//     if(res.length === 1 && e === '-') {
//       char = true;
//       res += '0'
//       continue
//     };

//     if(isNaN(parseInt(e))){
//       break
//     }else{
//       res += e
//     }
//   }

//   function format(){
//     if(char){
//       return Math.max(-parseInt(res), -(2**31))
//     }else{
//       return Math.min(parseInt(res), (2**31) - 1)
//     }
//   }

//   return format()
// };

// 三数之和
function threeSum(arr, target) {
  const result = []
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length - 2; i++) {
    const current = arr[i]
    if (current > target) break
    if (i > 0 && arr[i] === arr[i - 1]) continue
    // twoSum(arr.slice(i+1), target - current).forEach((s) => {
    //   result.push([arr[i], ...s])
    // })

    let l = i + 1
    let r = arr.length - 1
    while (l < r) {
      let sum = arr[i] + arr[l] + arr[r]
      if (sum === target) {
        result.push([arr[i], arr[l], arr[r]])
        if (arr[l] === arr[l + 1]) {
          l++
        }
        if (arr[r] === arr[r - 1]) {
          r--
        }
        l++
        r--
      } else if (sum < target) {
        l++
      } else {
        r--
      }
    }
  }

  return result

  function twoSum(arr, target) {
    let res = []
    for (let j = 0; j < arr.length - 1; j++) {
      let targetNum = target - arr[j]
      for (let k = j + 1; k < arr.length; k++) {
        if (targetNum === arr[k]) {
          res.push([arr[j], arr[k]])
        }
      }
    }
    return res
  }
}

console.log('threeSum', threeSum([-1, 0, 1, 2, -1, 3, -4, 5], 0))
