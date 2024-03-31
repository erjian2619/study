// 结构型
// 功能：优化结构的实现方式

// 适配器模式 - adapter
// 适配独立模式，保证模块间的独立解耦且连接兼容

class HKDevice{
  getPlug(){
    return '港版'
  }
}

class Target{
  constructor(){
    this.plug = new HKDevice()
  }
  getPlug(){
    return this.plug.getPlug() + '转换器'
  }
}

const target = new Target()
target.getPlug()

// 装饰器模式
// 代理模式
class Game{
  play(){
    //
  }
}

class Player{
  constructor(age){
    this.age = age
  }
}

class GameProxy{
  constructor(player){
    this.player = player
  }
  play(){
    return (this.player.age < 16) ? 'no play' : new Game().play()
  }
}

const player = new Player(11)
const game = new GameProxy(player)
game.play()



// 实际应用

// 1. 筛选器 + 表格 模块 => 独立模块 => 适配器
// 2. 按钮 title icon 三个组件都要高亮 => 增强模块 => 装饰器
// 3. 事件委托 => 代理模式 