class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.length = 0;
  }

  insert(val) {
    const node = new Node(val);
    if (this.length === 0) {
      this.root = node;
    } else {
      let currNode = this.root;

      while (true) {
        if (val < currNode.val) {
          if (currNode.left) currNode = currNode.left;
          else {
            currNode.left = node;
            break;
          }
        } else {
          if (currNode.right) currNode = currNode.right;
          else {
            currNode.right = node;
            break;
          }
        }
      }
    }

    this.length++;

    return this;
  }

  search(val) {
    let currNode = this.root;

    while (currNode) {
      if (val < currNode.val) currNode = currNode.left;
      else if (val > currNode.val) currNode = currNode.right;
      else return currNode;
    }

    return null;
  }

  delete(val) {
    let parentNode = null,
      currNode = this.root;

    while (currNode) {
      if (val < currNode.val) {
        parentNode = currNode;
        currNode = currNode.left;
      } else if (val > currNode.val) {
        parentNode = currNode;
        currNode = currNode.right;
      } else break;
    }

    if (currNode === null) return this;

    this.length--;

    if (currNode.left === null) {
      if (parentNode === null) this.root = this.root.right;
      else if (parentNode.left === currNode) parentNode.left = currNode.right;
      else parentNode.right = currNode.right;

      return this;
    }
    if (currNode.right === null) {
      if (parentNode === null) this.root = this.root.left;
      else if (parentNode.left === currNode) parentNode.left = currNode.left;
      else parentNode.right = currNode.left;
      return this;
    }

    if (currNode.left.right === null) {
      currNode.left.right = currNode.right;

      if (parentNode === null) this.root = this.root.left;
      else if (parentNode.left === currNode) parentNode.left = currNode.left;
      else parentNode.right = currNode.left;

      return this;
    }
    if (currNode.right.left === null) {
      currNode.right.left = currNode.left;

      if (parentNode === null) this.root = this.root.right;
      else if (parentNode.left === currNode) parentNode.left = currNode.right;
      else parentNode.right = currNode.right;

      return this;
    }

    let largestNodeParent = currNode.left;
    while (largestNodeParent.right && largestNodeParent.right.right)
      largestNodeParent = largestNodeParent.right;

    const temp = largestNodeParent.right;
    largestNodeParent.right = temp.left;
    temp.left = currNode.left;
    temp.right = currNode.right;
    if (parentNode === null) this.root = temp;
    else if (parentNode.left === currNode) parentNode.left = temp;
    else parentNode.right = temp;

    // if (parentNode === null) {
    //   if (currNode.left === null) {
    //     this.root = this.root.right;
    //     return this;
    //   }
    //   if (currNode.right === null) {
    //     this.root = this.root.left;
    //     return this;
    //   }

    //   if (currNode.left.right === null) {
    //     this.root = currNode.left;
    //     this.root.right = currNode.right;
    //     return this;
    //   }

    //   let largestNode = currNode.left;

    //   while (largestNode.right && largestNode.right.right)
    //     largestNode = largestNode.right;

    //   const temp = largestNode.right;
    //   largestNode.right = largestNode.right.left;
    //   temp.left = currNode.left;
    //   temp.right = currNode.right;

    //   this.root = temp;
    //   return this;
    // }

    // if (parentNode.left === currNode) {
    //   let largestNodeParent = currNode;
    //   while (largestNodeParent.right && largestNodeParent.right.right)
    //     largestNodeParent = largestNodeParent.right;

    //   const temp = largestNodeParent.right;
    //   largestNodeParent.right = temp.left;
    //   temp.left = currNode.left;
    //   temp.right = currNode.right;
    //   parentNode.left = temp;

    //   return this;
    // } else {
    //   let smallestNodeParent = currNode;
    //   while (smallestNodeParent.left && smallestNodeParent.left.left)
    //     smallestNodeParent = smallestNodeParent.left;

    //   const temp = smallestNodeParent.left;
    //   smallestNodeParent.left = smallestNodeParent.left.right;
    //   temp.left = currNode.left;
    //   temp.right = currNode.right;
    //   parentNode.right = temp;

    //   return this;
    // }
  }
}

const bst = new BST();

bst.insert(2).insert(5).insert(7).insert(4).insert(3).insert(8).insert(9);

bst.delete(3);

console.log(bst.root);
