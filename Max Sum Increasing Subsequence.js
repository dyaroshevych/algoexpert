// O(n^2) time | O(n) space
const maxSumIncreasingSubsequence = (nums) => {
  if (nums.length === 0) return [0, []];

  const sums = new Array(nums.length);
  sums[0] = nums[0];

  let maxSum = 0;

  for (let i = 1; i < sums.length; i++) {
    let currMaxSum = nums[i];

    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        currMaxSum = Math.max(currMaxSum, sums[j] + nums[i]);
      }
    }

    sums[i] = currMaxSum;

    maxSum = Math.max(maxSum, currMaxSum);
  }

  const result = [];
  let index = sums.length - 1;
  let remainingSum = maxSum;

  while (remainingSum > 0) {
    if (sums[index] === remainingSum) {
      remainingSum -= nums[index];
      result.push(nums[index]);
    }

    index--;
  }

  return [maxSum, buildSequence(nums, sums, maxSum)];
};

const buildSequence = (nums, sums, maxSum) => {
  const result = [];
  let index = sums.length - 1;
  let remainingSum = maxSum;

  while (remainingSum > 0) {
    if (sums[index] === remainingSum) {
      remainingSum -= nums[index];
      result.push(nums[index]);
    }

    index--;
  }

  return result.reverse();
};

console.log(maxSumIncreasingSubsequence([4, 2, 7, 3, 6, 8, 200, 150, 150]));
console.log(maxSumIncreasingSubsequence([8, 12, 2, 3, 15, 5, 7]));
console.log(maxSumIncreasingSubsequence([-8, -12, 2, -3, -15, -5, 7]));
