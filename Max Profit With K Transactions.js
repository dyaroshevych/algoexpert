// O(n*k) time | O(n*k) space
// const maxProfitWithKTransactions = (prices, k) => {
//   const profits = new Array(k + 1);

//   for (let i = 0; i <= k; i++) {
//     profits[i] = new Array(prices.length);
//     profits[i][0] = 0;
//   }

//   for (let i = 1; i < prices.length; i++) {
//     profits[0][i] = 0;
//   }

//   for (let i = 1; i <= k; i++) {
//     let currMaxBeforeSelling = -Infinity;

//     for (let j = 1; j < prices.length; j++) {
//       currMaxBeforeSelling = Math.max(
//         currMaxBeforeSelling,
//         profits[i - 1][j - 1] - prices[j - 1]
//       );
//       profits[i][j] = Math.max(
//         profits[i][j - 1],
//         prices[j] + currMaxBeforeSelling
//       );
//     }
//   }

//   return profits[k][prices.length - 1];
// };

// O(n*k) time | O(n) space
const maxProfitWithKTransactions = (prices, k) => {
  const profits = [new Array(prices.length).fill(0), new Array(prices.length)];

  profits[1][0] = 0;

  for (let i = 1; i <= k; i++) {
    let currMaxBeforeSelling = -Infinity;

    for (let j = 1; j < prices.length; j++) {
      currMaxBeforeSelling = Math.max(
        currMaxBeforeSelling,
        profits[(i - 1) % 2][j - 1] - prices[j - 1]
      );

      profits[i % 2][j] = Math.max(
        profits[i % 2][j - 1],
        prices[j] + currMaxBeforeSelling
      );
    }
  }

  return profits[k % 2][prices.length - 1];
};

console.log(maxProfitWithKTransactions([5, 11, 3, 50, 60, 90], 2));
