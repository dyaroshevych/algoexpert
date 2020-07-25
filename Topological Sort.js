// // // O(n + l) time | O(n + l) space
// const topologicalSort = (nodes, pairs) => {
//   const graph = new Graph(nodes);

//   for (let pair of pairs) {
//     graph.addPrerequisite(...pair);
//   }

//   return graph.getOrder();
// };

// class GraphNode {
//   constructor(val) {
//     this.val = val;
//     this.prerequisites = [];
//     this.visited = false;
//   }
// }

// class Graph {
//   constructor(values) {
//     this.graph = {};

//     for (let val of values) {
//       this.graph[val] = new GraphNode(val);
//     }
//   }

//   addPrerequisite(prerequisiteId, nodeId) {
//     this.graph[nodeId].prerequisites.push(this.graph[prerequisiteId]);
//   }

//   getOrderStartingFromNode(currNode) {
//     if (currNode.visited) {
//       return [];
//     }

//     currNode.visited = true;

//     const currOrder = [];

//     for (let prerequisiteNode of currNode.prerequisites) {
//       const prerequisiteOrder = this.getOrderStartingFromNode(prerequisiteNode);

//       currOrder.push(...prerequisiteOrder);
//     }

//     currOrder.push(currNode.val);

//     return currOrder;
//   }

//   getOrder() {
//     const order = [];

//     for (let node of Object.values(this.graph)) {
//       order.push(...this.getOrderStartingFromNode(node));
//     }

//     return order;
//   }
// }

// O(n + l) time | O(n + l) space
const topologicalSort = (nodes, pairs) => {
  const graph = new Graph(nodes);

  for (let pair of pairs) {
    graph.addDependency(...pair);
  }

  return graph.getOrder();
};

class GraphNode {
  constructor(val) {
    this.val = val;
    this.dependencies = [];
    this.numOfPrerequisites = 0;
    this.visited = false;
  }
}

class Graph {
  constructor(values) {
    this.graph = {};

    for (let val of values) {
      this.graph[val] = new GraphNode(val);
    }
  }

  addDependency(nodeId, dependencyId) {
    const node = this.graph[nodeId];
    const dependency = this.graph[dependencyId];

    node.dependencies.push(dependency);
    dependency.numOfPrerequisites++;
  }

  deletePrerequisite(prerequisiteNode, nodesWithNoPrerequisites) {
    for (let dependency of prerequisiteNode.dependencies) {
      dependency.numOfPrerequisites--;

      if (dependency.numOfPrerequisites === 0) {
        nodesWithNoPrerequisites.push(dependency);
      }
    }

    prerequisiteNode.dependencies = [];
  }

  getOrder() {
    const order = [];
    const nodesWithNoPrerequisites = Object.values(this.graph).reduce(
      (nodes, node) => {
        if (node.numOfPrerequisites === 0) {
          nodes.push(node);
        }

        return nodes;
      },
      []
    );

    while (nodesWithNoPrerequisites.length) {
      const currNode = nodesWithNoPrerequisites.pop();

      order.push(currNode.val);

      this.deletePrerequisite(currNode, nodesWithNoPrerequisites);
    }

    return order;
  }
}

console.log(
  topologicalSort(
    [1, 2, 3, 4],
    [
      [1, 2],
      [1, 3],
      [3, 2],
      [4, 2],
      [4, 3],
    ]
  )
);
