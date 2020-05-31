// O(n^2) time, O(n) space
// const fib = (n) => {
//   if (n <= 2) return n - 1;

//   return fib(n - 1) + fib(n - 2);
// };

// O(n) time, O(n) space - recursive
// const fib = (n, memo = { 1: 0, 2: 1 }) => {
//   if (memo[n] === undefined) memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

//   return memo[n];
// };

// O(n) time, O(n) space - iterative
// const fib = (n) => {
//   const dp = [0, 1];

//   if (n <= 2) return dp[n - 1];

//   for (let i = 2; i < n; i++) {
//     dp.push(dp[i - 2] + dp[i - 1]);
//   }

//   return dp[n - 1];
// };

// O(n) time, O(1) space
const fib = (n) => {
  if (n <= 2) return n - 1;

  let first = 0,
    second = 1;

  for (let i = 2; i < n; i++) {
    [first, second] = [second, first + second];
  }

  return second;
};

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
