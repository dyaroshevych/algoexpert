const iterativeInorderTraversal = (root, callback) => {
  let currNode = root;
  let prevNode = null;
  let nextNode = null;

  while (currNode) {
    // previous node is the current parent node, meaning
    // that we have not traversed through the subtree yet
    if (prevNode === currNode.parent) {
      // we have left subtree to traverse, do it first
      if (currNode.left) {
        nextNode = currNode.left;
      }
      // we don't have a left subtree, meaning that current
      // node is the leftmost one => add it to inorder array
      else {
        callback(currNode);
        // current node is not a leaf node
        if (currNode.right) {
          nextNode = currNode.right;
        }
        // current node is a leaf node
        else {
          nextNode = currNode.parent;
        }
      }
    }
    // previous node is not the parent node, meaning that
    // we have traversed through at least one subtree of the
    // current node
    else {
      // the right subtree exists and we have not
      // traversed through it yet
      if (prevNode === currNode.left && currNode.right) {
        callback(currNode);
        nextNode = currNode.right;
      }
      // the right subtree doesn't exist or we have
      // already traversed through it
      else {
        nextNode = currNode.parent;
      }
    }

    prevNode = currNode;
    currNode = nextNode;
  }
};

//        10
//       / \
//      5   9
//     / \   \
//    3   4   8
//     \     / \
//      2   6   7
//     / \
//    0   1

// inorder: [3, 0, 2, 1, 5, 4, 10, 9, 6, 8, 7]

class Node {
  constructor(val, left = null, right = null, parent = null) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }
}

const node0 = new Node(0);
const node1 = new Node(1);

const node2 = new Node(2, node0, node1);
node0.parent = node2;
node1.parent = node2;

const node3 = new Node(3, null, node2);
node2.parent = node3;

const node4 = new Node(4);

const node5 = new Node(5, node3, node4);
node3.parent = node5;
node4.parent = node5;

const node6 = new Node(6);
const node7 = new Node(7);

const node8 = new Node(8, node6, node7);
node6.parent = node8;
node7.parent = node8;

const node9 = new Node(9, null, node8);
node8.parent = node9;

const root = new Node(10, node5, node9);
node5.parent = root;
node9.parent = root;

iterativeInorderTraversal(root, (node) => console.log(node.val));
