// O(n+m) time | O(1) space
const searchInSortedMatrix = (matrix, val) => {
  if (matrix.length === 0) return null;

  let col = matrix[0].length - 1,
    row = 0;

  while (col >= 0 && row < matrix.length) {
    if (matrix[row][col] < val) row++;
    else if (matrix[row][col] > val) col--;
    else return [row, col];
  }

  return null;
};

console.log(
  searchInSortedMatrix(
    [
      [1, 2, 3, 4, 5],
      [11, 12, 13, 14, 15],
      [21, 22, 23, 24, 25],
      [31, 32, 33, 34, 35],
    ],
    35
  )
);
