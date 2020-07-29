// O(N^2) time | O(logN) space
const quickSort = (nums) => {
  quickSortWithBoundaries(nums, 0, nums.length - 1);

  return nums;
};

const quickSortWithBoundaries = (nums, start, end) => {
  if (start >= end) {
    return;
  }

  let left = start;
  let right = end;

  while (left <= right) {
    if (nums[left] <= nums[start]) {
      left++;
    } else {
      swap(nums, left, right);
      right--;
    }
  }

  swap(nums, start, right);

  quickSortWithBoundaries(nums, start, right - 1);
  quickSortWithBoundaries(nums, right + 1, end);
};

const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

console.log(quickSort([4, 4, 12, 4, 6, 3, 5, 6, 9, 8, 1, 0, 44, 6, 4, 77, 32]));
