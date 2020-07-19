// O(n) time | O(n) space
const largestRange = (nums) => {
  const set = new Set(nums);
  let maxRange = [];
  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      let left = nums[i];
      let right = nums[i] + 1;

      while (set.has(left)) {
        set.delete(left);
        left--;
      }

      while (set.has(right)) {
        set.delete(right);
        right++;
      }

      left++;
      right--;

      if (right - left > maxLength) {
        maxLength = right - left;
        maxRange = [left, right];
      }
    }
  }

  return maxRange;
};

console.log(
  largestRange([1, 6, 3, 5, 0, 4, 3, 100, 200, 101, 103, 99, 102, 98, 96])
);
