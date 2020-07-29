// O(logN) time | O(1) space
const searchForRange = (arr, target) => [
  binarySearchWithDirection(arr, target, "left"),
  binarySearchWithDirection(arr, target, "right"),
];

const binarySearchWithDirection = (arr, target, direction) => {
  let start = 0;
  let end = arr.length - 1;

  let index = -1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      index = mid;
      if (direction === "left") {
        end = mid - 1;
      } else {
        start = start + 1;
      }
    }
  }

  return index;
};

console.log(
  searchForRange([1, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6], 4)
);
