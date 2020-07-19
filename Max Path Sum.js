// O(n) time | O(n) space
const maxPathSum = (root) => findMaxSum(root)[1];

const findMaxSum = (node) => {
  if (node === null) {
    return [0, 0];
  }

  const [leftMaxSubAsBranch, leftMaxSum] = findMaxSum(node.left);
  const [rightMaxSumAsBranch, rightMaxSum] = findMaxSum(node.right);

  const maxSumAsBranch = Math.max(
    node.val,
    node.val + leftMaxSubAsBranch,
    node.val + rightMaxSumAsBranch
  );
  const maxSumAsRoot = Math.max(
    leftMaxSubAsBranch + node.val + rightMaxSumAsBranch,
    rightMaxSumAsBranch
  );
  const maxSum = Math.max(maxSumAsRoot, leftMaxSum, rightMaxSum);

  return [maxSumAsBranch, maxSum];
};

console.log(
  maxPathSum({
    val: 6,
    left: {
      val: 3,
      left: { val: 2, left: null, right: null },
      right: { val: 1, left: null, right: null },
    },
    right: {
      val: 5,
      left: {
        val: -7,
        left: null,
        right: null,
      },
      right: {
        val: 4,
        left: null,
        right: null,
      },
    },
  })
);
