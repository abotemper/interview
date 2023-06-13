class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;

  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead(){
    if(this.head === null) {
      console.log('head: null');
    } else {
      console.log("head: " + this.head.value);
    }
  }

  getTail(){
    if (this.tail === null) {
      console.log("tail: null");
    } else {
      console.log('tail: ' + this.tail.value);
    }
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value){
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    //最后一个元素pop出去后，要让头尾两个指针指向null
    if (this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  //前加方法
  unshift(value){
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++
    return this;
  }

  shift(){
    if(!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;

    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true
    }
    return false;
  }

  insert(index, value){
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  delete(index) {
    if (index === 0) return this.unshift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index > this.length) return undefined;

    const before = this.get(index - 1);
    const temp = before.next

    before.next = temp.next;
    temp.next = null
    length--;
    return temp;

  }

  reverse() {
    let temp = this.head;
    //先头尾翻转
    this.head = this.tail;
    this.tail = temp;

    // 三个指针，prev,temp,next往前走
    let next = temp.next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
  }

  //找到中间的节点，慢指针速度比快指针速度慢一倍。
  findMiddleNode() {
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !==null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow
  }

  //还是快慢指针，因为快指针更快，如果一旦快慢指针指到一个位置，
  //那么肯定是有环了
  hasLoop() {
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }

  findKthFromEnd(k){
    let slow = this.head;
    let fast = this.head;
// fast先移动k步，其实也就是人为制造快指针比慢指针之间具有k的距离
// 这里++i和i++没区别，区别是++i效率高一点点
    for (let i = 0; i < k; ++i) {
      //如果整个链还不如k长，那就返回null
      if (fast === null) {
        return null
      }
      fast = fast.next;
    }
//再让快指针走到最后，只要快指针走，慢指针也走
    while (fast !== null) {
      slow = slow.next;
      fast = fast.next;
    }
//这时 slow就是从后数第k个元素
    return slow;
  }

  reverseBetween(m, n){
    if (this.head === null) return;

    const dummy = new Node(0);
    dummy.next = this.head;
    let prev = dummy;
    for (let i = 0; i < m; i++) {
      //让prev走到m - 1这个点
      prev = prev.next;
    }
// 那么，current就是m这个点
    let current = prev.next;
    //在m到n之间进行for循环
    for (let i = 0; i < n - m; i++) {
      const temp = current.next;
      current.next = temp.next;
      temp.next = prev.next;
      prev.next = temp;
    }

    this.head = dummy.next;
  }

  partitionList(x) {
    if (this.head === null) return;

    const dummy1 = new Node(0);
    const dummy2 = new Node(0);
    let prev1 = dummy1;
    let prev2 = dummy2;
    let current = this.head;

    while (current !== null) {
      if (current.value < x) {
        prev1.next = current;
        prev1 = current;
      } else {
        prev2.next = current;
        prev2 = current;
      }
      current = current.next;
    }

    prev2.next = null;
    prev1.next = dummy2.next;

    this.head = dummy1.next
  }

  removeDuplicates () {
    const values = new Set();
    let previous = null;
    let current = this.head;
    while (current !== null) {
      if (values.has(current.value)) {
        //有这个值的话就把它跳过去
        previous.next = current.next;
        this.length -= 1;
      } else {
        values.add(current.value);
        previous = current;
      }
      current = current.next;
    }
  }
}

let myLinkedList = new LinkedList(2);
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);

// myLinkedList.pop();
// myLinkedList.shift();
console.log(myLinkedList);