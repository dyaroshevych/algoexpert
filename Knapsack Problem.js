// dp[i][j] is the maximum sum we can get with items [0.. i - 1] and max capacity j
// dp[i][j] = max(dp[i - 1][j - weightI] + valueI, dp[i - 1][j])

// O(n*c) time | O(n*c) space
const knapsackProblem = (items, maxCapacity) => {
  if (items.length === 0) {
    return [0, []];
  }

  const dp = new Array(items.length + 1);

  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(maxCapacity + 1);
    dp[i][0] = 0;
  }

  dp[0].fill(0);

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      const [value, weight] = items[i - 1];

      const maxWithCurrItem = j >= weight ? dp[i - 1][j - weight] + value : 0;
      const maxWithoutCurrItem = dp[i - 1][j];

      dp[i][j] = Math.max(maxWithCurrItem, maxWithoutCurrItem);
    }
  }

  return [dp[items.length][maxCapacity], getItems(dp, items)];
};

const getItems = (dp, items) => {
  let i = dp.length - 1;
  let j = dp[0].length - 1;

  const selectedItems = [];

  while (dp[i][j] > 0) {
    if (dp[i - 1][j] === dp[i][j]) {
      i--;
    } else {
      console.log(i, j);
      selectedItems.push(i - 1);
      j -= items[i - 1][1];
      i--;
    }
  }

  return selectedItems.reverse();
};

console.log(
  knapsackProblem(
    [
      [1, 2],
      [4, 3],
      [5, 6],
      [6, 7],
    ],
    10
  )
);
