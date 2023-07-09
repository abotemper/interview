class Stack {
  constructor() {
      this.stackList = [];
  }

  getStackList() {
      return this.stackList;
  }

  printStack() {
      for (let i = this.stackList.length - 1; i >= 0; i--) {
          console.log(this.stackList[i]);
      }
  }

  isEmpty() {
      return this.stackList.length === 0;
  }

  peek() {
      if (this.isEmpty()) {
          return null;
      } else {
          return this.stackList[this.stackList.length - 1];
      }
  }

  size() {
      return this.stackList.length;
  }
  push() {
      this.stackList.push(value);
  }

  pop() {
    if(this.isEmpty()) return null;
    return this.stackList.pop();
  }
  
}

class MyQueue {
  constructor() {
      this.stack1 = new Stack();
      this.stack2 = new Stack();
  }
  
  peek() {
      return this.stack1.peek();
  }

  isEmpty() {
      return this.stack1.isEmpty();
  }

  enqueue(value) {
    while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(value);
    while (!this.stack2.isEmpty()) {
        this.stack1.push(this.stack2.pop());
    }
 }

 dequeue() {
  if(this.isEmpty()) {
    return null
  }else {
    return this.stack1.pop();
  }
 }

}

function reverseString(string) {
  const stack = new Stack();
  let reverseString = "";

  for(const c of string) {
    stack.push(c);
  }
  while(!stack.isEmpty()) {
    reverseString += stack.pop();
  }
}

function isBalancedParentheses(parentheses) {
  const stack = new Stack();
  for(const p of parentheses) {
    if(p === '(') {
      stack.push(p);
    } else if (p === ')') {
      if(stack.isEmpty() || stack.pop() !== '(') {
        return false;
      }
    }
  }
  return stack.isEmpty();
}

function sortStack(stack) {
  const additionalStack = new Stack();

  while(!stack.isEmpty()) {
    const temp = stack.pop();

    while(!additionalStack.isEmpty() && additionalStack.peek() > temp) {
      stack.push(additionalStack.pop());
    }

    additionalStack.push(temp);
  }

  
  while(!additionalStack.isEmpty()) {
    stack.push(additionalStack.pop());
  }
}

