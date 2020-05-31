// O(n^2) time | O(1) space
// const twoNumberSum = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [nums[i], nums[j]];
//     }
//   }

//   return [];
// };

// O(nlogn) time | O(1) space
// const twoNumberSum = (nums, target) => {
//   nums.sort((a, b) => a - b);

//   let low = 0,
//     high = nums.length - 1;

//   while (low < high) {
//     const currSum = nums[low] + nums[high];

//     if (currSum < target) low++;
//     else if (currSum > target) high--;
//     else return [nums[low], nums[high]];
//   }

//   return [];
// };

// O(n) time | O(n) space
const twoNumberSum = (nums, target) => {
  const numsSet = new Set();

  for (let num of nums) {
    if (numsSet.has(target - num)) return [target - num, num];
    numsSet.add(num);
  }

  return [];
};

console.log(twoNumberSum([3, 6, 8, 5, 4, 2], 13));
