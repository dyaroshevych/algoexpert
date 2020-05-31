class Node {
  constructor(val, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  containsNodeWithValue(val) {
    let currNode = this.head;

    while (currNode) {
      if (currNode.val === val) return true;
      currNode = currNode.next;
    }

    return false;
  }

  remove(node) {
    if (this.head === node) this.head = this.head.next;
    if (this.tail === node) this.tail = this.tail.prev;

    this.removeNodeBindings(node);
  }

  removeNodeBindings(node) {
    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    node.prev = null;
    node.next = null;
  }

  removeNodesWithValue(val) {
    let currNode = this.head;

    while (currNode) {
      if (currNode.val === val) {
        const nodeToRemove = currNode;
        currNode = currNode.next;
        this.remove(nodeToRemove);
      } else currNode = currNode.next;
    }
  }

  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === node) return;

    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;

    if (this.head === node) this.head = nodeToInsert;
    else node.prev.next = nodeToInsert;

    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    if (nodeToInsert === node) return;

    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;

    if (this.tail === node) this.tail = nodeToInsert;
    else node.next.prev = nodeToInsert;

    node.next = nodeToInsert;
  }

  setHead(node) {
    if (this.head) return this.insertBefore(this.head, node);

    this.head = this.tail = node;
  }

  setTail(node) {
    if (this.tail) return this.insertAfter(this.tail, node);

    this.head = this.tail = node;
  }

  insertAtPosition(idx, node) {
    if (idx <= 0) this.setHead(node);

    let currNode = this.head,
      currIdx = 0;

    while (currIdx < idx && currNode) {
      currNode = currNode.next;
      currIdx++;
    }

    if (currNode) this.insertBefore(currNode, node);
    else this.setTail(node);
  }

  traverse() {
    this.traverseFromHead();
    this.traverseFromTail();
  }

  traverseFromHead() {
    let currNode = this.head;
    const nodes = [];

    while (currNode) {
      nodes.push(currNode.val);
      currNode = currNode.next;
    }

    console.log(nodes);
  }

  traverseFromTail() {
    let currNode = this.tail;
    const nodes = [];

    while (currNode) {
      nodes.push(currNode.val);
      currNode = currNode.prev;
    }

    console.log(nodes);
  }
}

const linkedList = new LinkedList();

const test1 = new Node(6);
const test2 = new Node(10);
const test3 = new Node(1);
linkedList.setTail(test1);
linkedList.setTail(new Node(7));
linkedList.setTail(new Node(8));
linkedList.setTail(new Node(9));
linkedList.setTail(test2);
linkedList.setHead(new Node(5));
linkedList.setHead(new Node(4));
linkedList.setHead(new Node(3));
linkedList.setHead(new Node(2));
linkedList.setHead(test3);

linkedList.traverse();

linkedList.insertAfter(test1, new Node(200));
linkedList.insertAfter(test2, new Node(200));
linkedList.insertAfter(test3, new Node(200));

linkedList.insertBefore(test1, new Node(200));
linkedList.insertBefore(test2, new Node(200));
linkedList.insertBefore(test3, new Node(200));

linkedList.traverse();

linkedList.removeNodesWithValue(200);

linkedList.traverse();
