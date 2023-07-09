//满二叉树：除了最后一层的节点没有任何子节点，每层上的所有节点都有两个叶子节点

//完全二叉树，一棵树的深度为H，除了第H层外，其他各层的节点都有两个叶子结点，并且
//h层的所有节点都集中在最左边

//二叉搜索树： 左子树所有的节点均小于它根节点的值
//右子树的所有节点的值均大于它根节点的值

class Node {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value){
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while(true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contains(value){
    if (this.root === null) return false;
    let temp = this.root;
    while(temp) {
      if (value < temp.value) {
        temp = temp.left;

      }else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  minValueNode(currentNode) {
    while (currentNode.left != null) {
      currentNode = currentNode.left;
    }
    return currentNode;

  }

  BFS() {
    let currentNode = this.root;
    let queue = [];
    let results = [];
    queue.push(currentNode);
  
    while(queue.length) {
      currentNode = queue.shift();
      results.push(currentNode.value);
      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
    }
    return results;
  }

  //先序遍历，根左右
  DFSPreOrder() {
    let results = [];
    function traverse(currentNode) {
      results.push(currentNode.value);
      if(currentNode.left) traverse(currentNode.left);
      if(currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);
    return results;
  }

  //后续遍历， 左右根
  DFSPostOrder() {
    let results = [];
    function traverse(currentNode) {
      if(currentNode.left) traverse(currentNode.left);
      if(currentNode.right) traverse(currentNode.right);
      results.push(currentNode.value);
    }
    traverse(this.root);
    return results;
  }

  //中序遍历，左根右
  DFSInOrder() {
    let results = [];
    function traverse(currentNode) {
      if(currentNode.left) traverse(currentNode.left);
      results.push(currentNode.value);
      if(currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);
    return results;
  }
}

