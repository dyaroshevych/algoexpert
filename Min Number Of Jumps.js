// O(n^2) time | O(n) space
// const minNumberOfJumps = (arr) => {
//   if (arr.length === 0) return 0;

//   const minJumps = new Array(arr.length).fill(Infinity);
//   minJumps[0] = 0;

//   for (let i = 0; i < arr.length; i++) {
//     const end = Math.min(i + arr[i], arr.length - 1);
//     const currNumOfJumps = minJumps[i] + 1;

//     for (let j = i + 1; j <= end; j++) {
//       minJumps[j] = Math.min(minJumps[j], currNumOfJumps);
//     }
//   }

//   return minJumps[minJumps.length - 1];
// };

// O(n) time | O(1) space
const minNumberOfJumps = (arr) => {
  if (arr.length === 0) return 0;

  let jumps = 1;
  let maxReach = arr[0];
  let stepsLeft = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxReach = Math.max(maxReach, arr[i] + i);

    stepsLeft--;

    if (stepsLeft === 0) {
      stepsLeft = maxReach - i;
      jumps++;
    }
  }

  return jumps;
};

console.log(minNumberOfJumps([1, 3, 5, 1, 1, 1, 7, 3, 1, 1]));
