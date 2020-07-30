const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

// worst: O(n^2) time | average: O(n) time | O(1) space
const quickselect = (nums, index) => {
  position = index - 1;

  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let left = start;
    let right = end;
    let val = nums[start];

    while (left <= right) {
      if (nums[left] > val) {
        swap(nums, left, right);
        right--;
      } else {
        left++;
      }
    }

    swap(nums, start, right);

    if (position < right) {
      end = right - 1;
    } else if (position > right) {
      start = right + 1;
    } else {
      return val;
    }
  }
};

console.log(quickselect([6, 5, 2, 3, 7, 8, 9], 3));
