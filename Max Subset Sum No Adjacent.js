// O(n) time | O(n) space
// const maxSumNoAdjacent = (nums) => {
//   const dp = new Array(nums.length);
//   dp[0] = nums[0];
//   dp[1] = nums[1];

//   for (let i = 2; i < nums.length; i++) {
//     dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
//   }

//   return dp[nums.length - 1];
// };

// O(n) time | O(1) space
const maxSumNoAdjacent = (nums) => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let first = nums[0],
    second = Math.max(nums[1], nums[2]);

  for (let i = 2; i < nums.length; i++) {
    [first, second] = [second, Math.max(first + nums[i], second)];
  }

  return second;
};

console.log(maxSumNoAdjacent([7, 10, 12, 7, 9, 14]));
