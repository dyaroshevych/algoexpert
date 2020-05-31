// O(n^2) time | O(1) space
const threeNumberSum = (nums, target) => {
  nums.sort((a, b) => a - b);

  const answers = [];

  for (let i = 0; i < nums.length - 2; i++) {
    let low = i + 1,
      high = nums.length - 1;

    while (low < high) {
      const currSum = nums[low] + nums[high] + nums[i];
      if (currSum > target) high--;
      else if (currSum < target) low++;
      else {
        answers.push([nums[i], nums[low], nums[high]]);
        low++;
        high--;
      }
    }
  }

  return answers;
};

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
