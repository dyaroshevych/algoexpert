// O(nlogn + mlogm) time | O(1) space
const smallestDifference = (nums1, nums2) => {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let pointer1 = (pointer2 = 0),
    minDifference = Infinity,
    minDifferencePair = [];

  while (pointer1 < nums1.length && pointer2 < nums2.length) {
    const currDifference = nums1[pointer1] - nums2[pointer2],
      currPair = [nums1[pointer1], nums2[pointer2]];

    if (currDifference > 0) pointer2++;
    else if (currDifference < 0) pointer1++;
    else return [nums[pointer1], nums[pointer2]];

    if (minDifference > Math.abs(currDifference)) {
      minDifference = Math.abs(currDifference);
      minDifferencePair = currPair;
    }
  }

  return minDifferencePair;
};

console.log(smallestDifference([5, -3, -2, 0, 8], [20, 13, -5, -4, 3, 11]));
