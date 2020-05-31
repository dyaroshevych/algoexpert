// O(n) time | O(1) space
const findThreeLargestNumbers = (nums) => {
  if (nums.length <= 3) return [...nums].sort((a, b) => a - b);

  const largestNums = nums.slice(0, 3).sort((a, b) => a - b);

  for (let i = 3; i < nums.length; i++) updateLargest(largestNums, nums[i]);

  return largestNums;
};

const updateLargest = (largestNums, newNum) => {
  if (newNum > largestNums[2])
    [largestNums[0], largestNums[1], largestNums[2]] = [
      largestNums[1],
      largestNums[2],
      newNum,
    ];
  else if (newNum > largestNums[1])
    [largestNums[0], largestNums[1]] = [largestNums[1], newNum];
  else if (newNum > largestNums[2]) largestNums[0] = newNum;
};

console.log(
  findThreeLargestNumbers([
    6,
    3,
    -1,
    2,
    4,
    7,
    9,
    20,
    -5,
    -3,
    -4,
    11,
    13,
    14,
    120,
    95,
  ])
);
