// O(n*c) time | O(n) space
const numWays = (target, coins) => {
  const dp = new Array(target + 1).fill(0);

  dp[0] = 1;

  coins.forEach((coin) => {
    for (let i = coin; i <= target; i++) {
      dp[i] += dp[i - coin];
    }
  });

  return dp[target];
};

console.log(numWays(10, [1, 5, 10, 25]));
