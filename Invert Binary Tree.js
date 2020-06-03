// recursive
// const invertTree = (node) => {
//   if (node === null) return null;

//   [node.left, node.right] = [node.right, node.left];

//   invertTree(node.left);
//   invertTree(node.right);

//   return node;
// };

class QueueNode {
  constructor(node, next = null) {
    this.node = node;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(node) {
    const newNode = new QueueNode(node, this.tail);

    if (this.length === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

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

// iterative
const invertTree = (root) => {
  if (root === null) return null;

  const nodes = new Queue();
  nodes.enqueue(root);

  while (nodes.length) {
    const length = nodes.length;

    for (let i = 0; i < length; i++) {
      const node = nodes.dequeue();

      if (node.left) nodes.enqueue(node.left);
      if (node.right) nodes.enqueue(node.right);

      [node.left, node.right] = [node.right, node.left];
    }
  }

  return root;
};

console.log(
  invertTree({
    val: 5,
    left: {
      val: 3,
      left: { val: 1, left: null, right: { val: 2, left: null, right: null } },
      right: { val: 4, left: null, right: null },
    },
    right: {
      val: 8,
      left: { val: 7, left: null, right: null },
      right: { val: 12, left: null, right: null },
    },
  })
);
