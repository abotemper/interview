input = [3,4,5,6,3];

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        }
        this.length++;
        return this;
    }
    
}
let list = new LinkedList(input[0]);
let result = [];
for (let i = 1; i < input.length; i++) {
    list.push(input[i]);
}

let temp = list.head;
let right = temp.next;
let count = 0;
while(true) {
    if(result.length === input.length) break;

    if(right.value > temp.head) {
        result.push(right.value);
        temp = temp.next
        right = temp.next;
        count = 0;
        console.log(result);
    } else {
        right = right.next;
        count++
        if(count === input.length - 1) {
            result.push(-1);
        
        }
    }
}

console.log(list);
console.log(result);