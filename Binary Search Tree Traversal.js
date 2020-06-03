// preorder
// const traverse = (node, nodes = []) => {
//   if (node === null) return;

//   nodes.push(node.val);
//   traverse(node.left, nodes);
//   traverse(node.right, nodes);

//   return nodes;
// };

// postorder
// const traverse = (node, nodes = []) => {
//   if (node === null) return;

//   traverse(node.left, nodes);
//   traverse(node.right, nodes);
//   nodes.push(node.val);

//   return nodes;
// };

// inorder
const traverse = (node, nodes = []) => {
  if (node === null) return;

  traverse(node.left, nodes);
  nodes.push(node.val);
  traverse(node.right, nodes);

  return nodes;
};

console.log(
  traverse({
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
