// O(n*2^n) time | O(n) space
// const powerset = (nums, idx = nums.length - 1) => {
//   if (idx < 0) return [[]];

//   const subsets = powerset(nums, idx - 1);

//   subsets.forEach((set) => {
//     subsets.push([...set, nums[idx]]);
//   });

//   return subsets;
// };

// O(n*2^n) time | O(1) space
const powerset = (nums) => {
  const sets = [[]];

  for (let i = 0; i < nums.length; i++) {
    sets.forEach((set) => {
      sets.push([...set, nums[i]]);
    });
  }

  return sets;
};

console.log(powerset([1, 2, 3]));
