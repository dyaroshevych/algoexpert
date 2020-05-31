// O(n^2) time | O(1) space
const bubbleSort = (nums) => {
  const swap = (idx1, idx2) =>
    ([nums[idx1], nums[idx2]] = [nums[idx2], nums[idx1]]);

  let end = nums.length - 1,
    isSorted = false;

  while (end > 1 && !isSorted) {
    isSorted = true;

    for (let i = 0; i < end; i++)
      if (nums[i] > nums[i + 1]) {
        swap(i, i + 1);
        isSorted = false;
      }
    end--;
  }

  return nums;
};

console.log(bubbleSort([5, 2, 8, 5, 6, 3, 9]));
