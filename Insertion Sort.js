// O(n^2) time | O(1) space
const insertionSort = (nums) => {
  const shift = (start, end) => {
    for (let i = end; i >= start; i--) nums[i] = nums[i - 1];
  };

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];

    let minIdx = i;
    while (minIdx > 0 && nums[minIdx - 1] > val) minIdx--;

    shift(minIdx + 1, i);
    nums[minIdx] = val;

    console.log(nums);
  }

  return nums;
};

console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]));
