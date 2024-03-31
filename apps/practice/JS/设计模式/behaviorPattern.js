// 行为型
// 不同对象之间责任的划分和算法的抽象化

// 命令模式
class Receiver{
  execute(){
    // 执行
  }
}

class Operator{
  constructor(command){
    this.command = command
  }
  execute()[
    this.command.execute()
  ]
}

class Command{
  constructor(receiver){
    this.receiver = receiver
  }
  execute(){
    this.receiver.execute()
  }
}

const soldier = new Receiver()
const order = new Command(soldier)
const op = new Operator(order)
op.execute()