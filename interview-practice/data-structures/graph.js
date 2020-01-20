
class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    if (!this.adjacentList[node]) {
      this.adjacentList[node] = new Set();
      this.numberOfNodes++;
    }
  }

  addEdge(node1, node2) {
    this.addVertex(node1);
    this.addVertex(node2);
    if (!this.adjacentList[node1].has(node2)) {
      this.adjacentList[node1].add(node2);
    }
    if (!this.adjacentList[node2].has(node1)) {
      this.adjacentList[node2].add(node1);
    }
  }

  showConnections() {
    console.log('\n');
    Object.keys(this.adjacentList).forEach(key => {
      const connections = Array.from(this.adjacentList[key]);
      console.log(`${key} ==> ${connections}`);
    });
  }

}

const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.showConnections();