// O(n!*n^2) time | O(n^2) space
// const getPermutations = (nums) => {
//   if (nums.length === 0) return [];

//   const permutationsArr = [];

//   const permute = (currPermutation, arr) => {
//     if (arr.length === 0) {
//       permutationsArr.push(currPermutation);
//       return;
//     }
//     for (let i = 0; i < arr.length; i++) {
//       permute(
//         [...currPermutation, arr[i]],
//         [...arr.slice(0, i), ...arr.slice(i + 1)]
//       );
//     }
//   };

//   permute([], nums);

//   return permutationsArr;
// };

// O(n!*n) time | O(n) space
const getPermutations = (nums) => {
  const permutationsArr = [];

  const permute = (idx, arr) => {
    if (idx === arr.length - 1) {
      permutationsArr.push([...arr]);
      return;
    }

    for (let i = idx; i < arr.length; i++) {
      swap(idx, i, arr);
      permute(idx + 1, arr);
      swap(idx, i, arr);
    }
  };

  permute(0, nums);

  return permutationsArr;
};

const swap = (idx1, idx2, arr) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

console.log(getPermutations([1, 2, 3]));
