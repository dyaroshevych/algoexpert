// O(n*log(n)) time | O(n) space
// const subarraySort = (nums) => {
//   const sortedNums = [...nums].sort((a, b) => a - b);

//   let idx = 0;
//   while (idx < nums.length && nums[idx] === sortedNums[idx]) {
//     idx++;
//   }

//   if (idx === nums.length) {
//     return [];
//   }

//   const startIdx = idx;
//   idx = nums.length - 1;

//   while (idx > 0 && nums[idx] === sortedNums[idx]) {
//     idx--;
//   }

//   const endIdx = idx;

//   return [startIdx, endIdx];
// };

// O(n) time | O(1) space
const subarraySort = (nums) => {
  let minUnsortedNum = Infinity,
    maxUnsortedNum = -Infinity;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      minUnsortedNum = Math.min(minUnsortedNum, nums[i], nums[i + 1]);
      maxUnsortedNum = Math.max(maxUnsortedNum, nums[i], nums[i + 1]);
    }
  }

  if (minUnsortedNum === Infinity) {
    return [-1, -1];
  }

  let startIdx = 0;

  while (nums[startIdx] <= minUnsortedNum) {
    startIdx++;
  }

  let endIdx = nums.length - 1;

  while (nums[endIdx] >= maxUnsortedNum) {
    endIdx--;
  }

  return [startIdx, endIdx];
};

console.log(subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]));
