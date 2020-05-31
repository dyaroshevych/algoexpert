// O(n) time | O(n) space

const depthFirstSearch = (root) => {
  const nodes = [];

  const addNodes = (node) => {
    if (node === null) return;

    nodes.push(node.val);

    node.children.forEach((node) => addNodes(node));
  };

  addNodes(root);

  return nodes;
};

console.log(
  depthFirstSearch({
    val: "A",
    children: [
      {
        val: "B",
        children: [
          {
            val: "E",
            children: [],
          },
          {
            val: "F",
            children: [
              {
                val: "I",
                children: [],
              },
              {
                val: "J",
                children: [],
              },
            ],
          },
        ],
      },
      {
        val: "C",
        children: [],
      },
      {
        val: "D",
        children: [
          {
            val: "G",
            children: [{ val: "K", children: [] }],
          },
          {
            val: "H",
            children: [],
          },
        ],
      },
    ],
  })
);
