// O(log(n)) time | O(1) space
const binarySearch = (nums, val) => {
  let low = 0,
    high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (val > nums[mid]) low = mid + 1;
    else if (val < nums[mid]) high = mid - 1;
    else return mid;
  }

  return -1;
};

console.log(binarySearch([0, 1, 21, 33, 46, 49, 61, 71, 72, 73], 33));
