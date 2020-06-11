// O(n) time | O(1) space
const kadanesAlgorithm = (nums) => {
  if (nums.length === 0) return;

  let max = Math.max(nums[0], 0),
    maxToIdx = max;

  for (let i = 1; i < nums.length; i++) {
    maxToIdx = Math.max(maxToIdx + nums[i], 0);
    max = Math.max(max, maxToIdx);
  }

  return max;
};

console.log(kadanesAlgorithm([-3, 2, -1, 5, 6, -3, 10, -7, -8, -9, 10, 5]));
