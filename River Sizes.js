// O(n*m) time | O(n*m) space

const riverSizes = (matrix) => {
  if (matrix.length === 0) return [];

  const sizes = [];

  const getRiverLength = (i, j) => {
    let size = 1;
    matrix[i][j] = -1;

    if (i > 0 && matrix[i - 1][j] === 1) size += getRiverLength(i - 1, j);
    if (j > 0 && matrix[i][j - 1] === 1) size += getRiverLength(i, j - 1);
    if (i < matrix.length - 1 && matrix[i + 1][j] === 1)
      size += getRiverLength(i + 1, j);
    if (j < matrix[0].length - 1 && matrix[i][j + 1] === 1)
      size += getRiverLength(i, j + 1);

    return size;
  };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) sizes.push(getRiverLength(i, j));
    }
  }

  return sizes;
};

console.log(
  riverSizes([
    [1, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
  ])
);
