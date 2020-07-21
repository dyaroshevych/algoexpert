// O(n) time | O(1) space
const waterArea = (heights) => {
  let pointer1 = 0;
  let pointer2 = heights.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let area = 0;

  while (pointer1 < pointer2) {
    leftMax = Math.max(leftMax, heights[pointer1]);
    rightMax = Math.max(rightMax, heights[pointer2]);

    const minHeight = Math.min(leftMax, rightMax);

    let currAreaLeft = Math.max(minHeight - heights[pointer1], 0);
    let currAreaRight = Math.max(minHeight - heights[pointer2], 0);

    area += currAreaLeft + currAreaRight;

    if (leftMax < rightMax) {
      pointer1++;
    } else {
      pointer2--;
    }
  }

  return area;
};

console.log(waterArea([0, 5, 0, 10, 3, 0, 7, 0, 1, 0, 4, 0, 6]));
console.log(waterArea([0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]));
