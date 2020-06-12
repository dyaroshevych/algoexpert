class QueueNode {
  constructor(node) {
    this.node = node;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(node) {
    const newNode = new QueueNode(node);

    if (this.length === 0) this.head = newNode;
    else this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
  }

  dequeue() {
    if (this.length === 0) return null;
    if (this.length === 1) this.tail = null;

    const node = this.head.node;
    this.head = this.head.next;
    this.length--;

    return node;
  }
}

// O(n) time | O(n) space
const breadthFirstSearch = (root) => {
  if (root === null) return [];

  const nodes = new Queue();
  nodes.enqueue(root);

  let currNode = root;
  const tree = [];

  while (currNode && nodes.length) {
    const length = nodes.length;

    for (let i = 0; i < length; i++) {
      const node = nodes.dequeue();

      if (node.left) nodes.enqueue(node.left);
      if (node.right) nodes.enqueue(node.right);

      tree.push(node.name);
    }
  }

  return tree;
};

console.log(
  breadthFirstSearch({
    name: "A",
    left: {
      name: "B",
      left: { name: "D", left: null, right: null },
      right: null,
    },
    right: {
      name: "C",
      left: {
        name: "E",
        left: { name: "G", left: null, right: null },
        right: null,
      },
      right: { name: "F", left: null, right: null },
    },
  })
);
