// O(n^3) time | O(1) space
// const fourNumberSum = (nums, target) => {
//   if (nums.length < 4) return [];

//   nums.sort((a, b) => a - b);

//   const results = [];

//   for (let i = 0; i < nums.length - 3; i++) {
//     for (let j = i + 1; j < nums.length - 2; j++) {
//       let low = j + 1,
//         high = nums.length - 1;

//       while (low < high) {
//         let sum = nums[i] + nums[j] + nums[low] + nums[high];

//         if (sum < target) {
//           low++;
//         } else if (sum > target) {
//           high--;
//         } else {
//           results.push([nums[i], nums[j], nums[low], nums[high]]);
//           break;
//         }
//       }
//     }
//   }

//   return results;
// };

// O(n^3) time | O(n^2) space
const fourNumberSum = (nums, target) => {
  if (nums.length < 4) return [];

  const results = [];

  const pairs = {
    [nums[0] + nums[1]]: [[nums[0], nums[1]]],
  };
  for (let i = 2; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let diff = target - nums[i] - nums[j];
      if (pairs[diff]) {
        for (let pair of pairs[diff]) {
          results.push([...pair, nums[i], nums[j]]);
        }
      }
    }

    for (let j = 0; j < i; j++) {
      let sum = nums[i] + nums[j];

      if (pairs[sum]) {
        pairs[sum].push([nums[i], nums[j]]);
      } else {
        pairs[sum] = [[nums[i], nums[j]]];
      }
    }
  }

  return results;
};

console.log(fourNumberSum([5, 4, 3, 7, -1, 20, 2, 1, -10], 10));
