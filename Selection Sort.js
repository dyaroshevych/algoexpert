// O(n^2) time | O(1) space
const selectionSort = (nums) => {
  const swap = (idx1, idx2) =>
    ([nums[idx1], nums[idx2]] = [nums[idx2], nums[idx1]]);

  for (let i = 0; i < nums.length; i++) {
    let smallestNumberIdx = i;

    for (let j = i + 1; j < nums.length; j++)
      if (nums[j] < nums[smallestNumberIdx]) smallestNumberIdx = j;

    swap(i, smallestNumberIdx);
  }

  return nums;
};

console.log(selectionSort([8, 5, 2, 9, 5, 6, 3]));
