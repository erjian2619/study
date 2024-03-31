// 逆依赖原则
class Store{
  static modules = new Set()
  constructor(){
    Store.modules.forEach(module => {
      module.init(this)
    })
  }

  inject(game){
    Store.modules.set(game.constructor.name, game)
  }
}

class LOL{
  init(store){
    store.inject(this)
  }
}

const lol = new LOL()
lol.init()

const Store = new Store()