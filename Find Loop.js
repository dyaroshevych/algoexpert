// // O(n) time | O(n) space
// const findLoop = (head) => {
//   const visited = new Set();

//   let currNode = head;

//   while (!visited.has(currNode)) {
//     visited.add(currNode);
//     currNode = currNode.next;
//   }

//   return currNode;
// };

// O(n) time | O(1) space
const findLoop = (head) => {
  let pointer1 = head;
  let pointer2 = head;

  do {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next.next;
  } while (pointer1 !== pointer2);

  pointer1 = head;

  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  return pointer1;
};

const thirdNode = {
  val: 3,
  next: {
    val: 4,
    next: {
      val: 5,
      next: {
        val: 6,
        next: {
          val: 7,
          next: {
            val: 8,
            next: { val: 9, next: null },
          },
        },
      },
    },
  },
};

const tenthNode = { val: 10, next: thirdNode };

thirdNode.next.next.next.next.next.next.next = tenthNode;

console.log(
  findLoop({
    val: 1,
    next: {
      val: 2,
      next: thirdNode,
    },
  })
);

// 1 -> 2 -> 3 -> 4 -> 5
//           |         |
//           10        6
//           |         |
//           9 <- 8 <- 7
// x steps before the loop
// y steps from the start of the loop to the node where two pointers meet
// z steps from the meeting node to the start node of the loop
// first pointer did x + y steps until the meeting
// second pointer did x + y + z + y steps until the meeting
// x + y + z + y = 2x + 2y
// z = x
