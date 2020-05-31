// O(n) time | O(n) space | recursive
// const findClosestValueInBST = (root, val) => {
//   const findClosestValueInSubtree = (node, closestValue) => {
//     if (node === null) return closestValue;

//     if (Math.abs(node.val - val) < Math.abs(closestValue - val))
//       closestValue = node.val;

//     if (node.val < val)
//       return findClosestValueInSubtree(node.right, closestValue);
//     else if (node.val > val)
//       return findClosestValueInSubtree(node.left, closestValue);
//     else return closestValue;
//   };

//   return findClosestValueInSubtree(root, Infinity);
// };

// O(n) time | O(1) space | iterative
const findClosestValueInBST = (root, val) => {
  let currNode = root,
    closestValue = Infinity;

  while (currNode) {
    if (Math.abs(currNode.val - val) < Math.abs(closestValue - val))
      closestValue = currNode.val;

    if (val < currNode.val) currNode = currNode.left;
    else if (val > currNode.val) currNode = currNode.right;
    else return val;
  }

  return closestValue;
};

console.log(
  findClosestValueInBST(
    {
      val: 10,
      left: {
        val: 5,
        left: {
          val: 2,
          left: { val: 1, left: null, right: null },
          right: null,
        },
        right: { val: 5, left: null, right: null },
      },
      right: {
        val: 15,
        left: {
          val: 13,
          left: null,
          right: { val: 14, left: null, right: null },
        },
        right: { val: 22, left: null, right: null },
      },
    },
    12
  )
);
