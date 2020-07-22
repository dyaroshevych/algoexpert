const canStackFirstUnderSecond = (disk1, disk2) =>
  disk1[0] > disk2[0] && disk1[1] > disk2[1] && disk1[2] > disk2[2];

// O(n^2) time | O(n) space
const diskStacking = (disks) => {
  if (disks.length === 0) {
    return [];
  }

  disks.sort((disk1, disk2) => disk1[2] > disk2[2]);

  const heights = disks.map((disk) => disk[2]);
  const sequences = [...Array(disks.length).keys()];
  let maxHeightIdx = 0;

  for (let i = 1; i < disks.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (
        canStackFirstUnderSecond(disks[i], disks[j]) &&
        heights[i] < heights[j] + disks[i][2]
      ) {
        heights[i] = heights[j] + disks[i][2];
        sequences[i] = j;
      }
    }

    if (heights[i] > heights[maxHeightIdx]) {
      maxHeightIdx = i;
    }
  }

  let currIdx = maxHeightIdx;
  const tower = [];

  while (true) {
    tower.push(disks[currIdx]);
    if (currIdx === sequences[currIdx]) {
      break;
    }
    currIdx = sequences[currIdx];
  }

  return tower;
};

console.log(
  diskStacking([
    [1, 1, 2],
    [2, 3, 4],
    [5, 5, 5],
    [2, 1, 5],
  ])
);
console.log(
  diskStacking([
    [2, 2, 1],
    [2, 1, 2],
    [3, 2, 3],
    [2, 3, 4],
    [4, 4, 5],
    [2, 2, 8],
  ])
);
