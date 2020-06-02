// O(n) time | O(d) space, d = depth of tree
const validateBST = (root, min = -Infinity, max = Infinity) => {
  if (root === null) return true;

  if (root.val < min || root.val >= max) return false;

  return (
    validateBST(root.left, min, root.val) &&
    validateBST(root.right, root.val, max)
  );
};

console.log(
  validateBST({
    val: 5,
    left: {
      val: 3,
      left: { val: 1, left: null, right: { val: 2, left: null, right: null } },
      right: { val: 4, left: null, right: null },
    },
    right: {
      val: 8,
      left: { val: 5, left: null, right: null },
      right: { val: 12, left: null, right: null },
    },
  })
);
