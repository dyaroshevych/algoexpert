// parent: Math.floor((index - 1) / 2)
// left shild: index * 2 + 1
// right shild: index * 2 + 2

// O(NlogN) time | O(1) space
const heapSort = (nums) => {
  return constructHeap(nums);
};

const constructHeap = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    bubbleUp(nums, i);
  }

  for (let i = 0; i < nums.length; i++) {
    [nums[0], nums[nums.length - i - 1]] = [nums[nums.length - i - 1], nums[0]];

    sinkDown(nums, nums.length - i - 2);
  }

  return nums;
};

const bubbleUp = (nums, endIndex) => {
  let index = endIndex;

  while (index > 0) {
    const parentIndex = Math.floor((index - 1) / 2);

    if (nums[index] > nums[parentIndex]) {
      swap(nums, index, parentIndex);

      index = parentIndex;
    } else {
      break;
    }
  }
};

const sinkDown = (nums, endIndex) => {
  let index = 0;

  while (index * 2 + 1 <= endIndex) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;

    const maxChildIndex =
      rightChildIndex <= endIndex &&
      nums[leftChildIndex] < nums[rightChildIndex]
        ? rightChildIndex
        : leftChildIndex;

    if (nums[index] < nums[maxChildIndex]) {
      swap(nums, index, maxChildIndex);

      index = maxChildIndex;
    } else {
      break;
    }
  }
};

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

console.log(
  heapSort([5, 3, 7, 3, 2, 8, 4, 0, 9, 7, 1, 100, 55, 34, 52, 54, 23, 60, 16])
);
