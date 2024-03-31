// 工厂模式 

// 单例模式
class SClass{
  static instance = undefined;
  static getInstance(){
    return function(){
      if(!SClass.instance){
        SClass.instance = new SClass()
      }else{
        SClass.instance
      }
    }
  }
}

const p1 = SClass.getInstance()
const p2 = SClass.getInstance() // 同一个实例

// 实际应用
// button producer：产出多中按钮 => 工厂模式
// 全局应用 router store => 单例
// 页头组件 包含 title button breadcum => 生产多重不同实例