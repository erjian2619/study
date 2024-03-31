// 数组转链表

class Node{
  constructor(element){
    this.element = element;
    this.next = null
  }
}

class Link{
  constructor(){
    this.length = 0;
    this.head = null;
  }

  getElementAt(position){
    if(position < 0 || position > this.length) return null;
    let _current = this.head;
    for (let i = 0; i < position; i++) {
      _current = _current.next;
    }
    return _current
  }

  indexOf(element){
    let _current = this.head;
    for (let i = 0; i < this.length; i++) {
      if(_current.element === element) return i;
      _current = _current.next;
    }
    return -1;
  }

  append(element){
    let _node = new Node(element)
    if(this.head === null){
      this.head = _node
    }else{
      let _current = this.getElementAt(this.length - 1);
      _current.next = _node
    }
    this.length++
  }

  insert(position, element){
    if(position < 0 || position > this.length) return false;
    let _node = new Node(element);
    if(position === 0){
      _node.next = this.head;
      this.head = _node
    }else{
      let _pre = this.getElementAt(position - 1);
      _node.next = _pre.next;
      _pre.next = _node
    }
    this.length++
    return true 
  }

  removeAt(position){
    if(position < 0 || position > this.length) return false;
    let _current = this.head
    if(position === 0){
      this.head = this.head.next
    }else{
      let _pre = this.getElementAt(position - 1)
      _current = _pre.next;
      _pre.next = _current.next
    }
    this.length--;
    return _current.element
  }

  remove(element){
    let position = this.indexOf(element);
    if(position === -1) return false;
    this.removeAt(position);
  }
}

let link = new Link()
const arr = Array(100).fill(0)
arr.forEach((_, index) => {
  link.append(index)
})
console.log(link);