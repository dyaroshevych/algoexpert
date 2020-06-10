const minNumberOfCoinsForChange = (target, coins) => {
  const dp = new Array(target + 1).fill(Infinity);
  dp[0] = 0;

  coins.forEach((coin) => {
    for (let i = coin; i <= target; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  });

  return dp[target];
};

console.log(minNumberOfCoinsForChange(6, [1, 2, 4]));
