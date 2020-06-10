// O(n*m) time | O(n*m) space
// const getLavensteinDistance = (str1, str2) => {
//   if (str1.length > str2.length) return getLavensteinDistance(str2, str1);

//   const dp = new Array(str1.length + 1);

//   for (let i = 0; i <= str1.length; i++) {
//     dp[i] = new Array(str2.length + 1);
//     dp[i][0] = i;
//   }

//   for (let i = 1; i <= str2.length; i++) {
//     dp[0][i] = i;
//   }

//   for (let i = 1; i <= str1.length; i++) {
//     for (let j = 1; j <= str2.length; j++) {
//       if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
//       else
//         dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
//     }
//   }

//   return dp[str1.length][str2.length];
// };

// O(n*m) time | O(min(n, m)) space
const getLavensteinDistance = (str1, str2) => {
  if (str1.length < str2.length) return getLavensteinDistance(str2, str1);

  const dp = [new Array(str2.length + 1), new Array(str2.length + 1)];
  dp[1][0] = 1;

  for (let i = 0; i <= str2.length; i++) {
    dp[0][i] = i;
  }

  for (let i = 1; i <= str1.length; i++) {
    dp[i % 2][0] = i;
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) dp[i % 2][j] = dp[(i - 1) % 2][j - 1];
      else
        dp[i % 2][j] =
          Math.min(
            dp[(i - 1) % 2][j - 1],
            dp[i % 2][j - 1],
            dp[(i - 1) % 2][j]
          ) + 1;
    }
  }

  return dp[str1.length % 2][str2.length];
};

console.log(getLavensteinDistance("delete", "omelette"));
console.log(getLavensteinDistance1("delete", "omelette"));
