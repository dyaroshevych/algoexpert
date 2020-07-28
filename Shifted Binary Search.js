// O(logN) time | O(1) space
const shiftedBinarySearch = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    // if we have found the right answer, return it
    if (nums[mid] === target) {
      return mid;
    }

    // everything between nums[start] and nums[mid] is sorted
    if (nums[start] <= nums[mid]) {
      // target is between nums[start] and nums[mid]
      if (nums[start] <= target && target <= nums[mid]) {
        end = mid - 1;
      }
      // target is not between nums[start] and nums[mid],
      // therefore is to the right from mid
      else {
        start = mid + 1;
      }
    }
    // array shift is between start and mid, therefore
    // mid is in the smaller part of the array
    else {
      // target is located in the bigger part of the array
      if (target >= nums[start] || target < nums[mid]) {
        end = mid - 1;
      }
      // target is located in the smaller part of the array
      else {
        start = mid + 1;
      }
    }
  }

  return -1;
};

console.log(shiftedBinarySearch([4, 5, 7, -1, 0, 1, 2, 3], 4));
console.log(shiftedBinarySearch([4, 5, 7, -1, 0, 1, 2, 3], 5));
console.log(shiftedBinarySearch([4, 5, 7, -1, 0, 1, 2, 3], 7));
console.log(shiftedBinarySearch([4, 5, 7, -1, 0, 1, 2, 3], -1));
console.log(shiftedBinarySearch([4, 5, 7, -1, 0, 1, 2, 3], 0));
console.log(shiftedBinarySearch([4, 5, 7, -1, 0, 1, 2, 3], 1));
console.log(shiftedBinarySearch([4, 5, 7, -1, 0, 1, 2, 3], 2));
console.log(shiftedBinarySearch([4, 5, 7, -1, 0, 1, 2, 3], 3));
console.log(shiftedBinarySearch([4, 5, 7, -1, 0, 1, 2, 3], 20));
