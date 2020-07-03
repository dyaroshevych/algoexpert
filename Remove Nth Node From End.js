// O(n) time | O(1) space
const removeNthNodeFromEnd = (head, N) => {
  let first = (second = head),
    idx = 0;

  while (second && idx < N) {
    second = second.next;
    idx++;
  }

  if (second === null) return;

  while (second.next) {
    first = first.next;
    second = second.next;
  }

  first.next = first.next.next;

  return head;
};

console.log(
  removeNthNodeFromEnd(
    {
      val: 1,
      next: {
        val: 2,
        next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
      },
    },
    4
  )
);
