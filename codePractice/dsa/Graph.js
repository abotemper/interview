// {
//   A: [],
//   b: [],
// }

class Graph {
  constructor() {
    this.adjacencyList = {};// {[]}
  }

  //增加一个顶点
  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertex1, vertex2) {
    if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }

  removeEdge(vertex1, vertex2) {
    if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
        .filter(v => v !== vertex2);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2]
        .filter(v => v !== vertex1);
      return true;
    }
    return false;
  }

  removeVertex(vertex) {
    if(!this.adjacencyList[vertex]) return undefined;
    //当目标顶点不空
    while(this.adjacencyList[vertex].length) {
      // 让一个临时值等于这个顶点pop出来的东西
      let temp = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, temp); 
    }
    delete this.adjacencyList[vertex];
    return this;
  }
}