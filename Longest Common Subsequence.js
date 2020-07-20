// O(n*m) time | O(n*m) space
const longestCommonSubsequence = (str1, str2) => {
  // dp[i][j] is length of the longest common subsequence of strings str1[0..i - 1] and str2[0..j - 1]
  const dp = new Array(str1.length + 1);

  for (let i = 0; i <= str1.length; i++) {
    dp[i] = new Array(str2.length + 1);

    // base case: str2 is an empty string
    dp[i][0] = 0;
  }

  for (let i = 1; i <= str2.length; i++) {
    // base case: str1 is an empty string
    dp[0][i] = 0;
  }

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      let currLength = dp[i - 1][j - 1];

      if (str1[i - 1] === str2[j - 1]) {
        currLength++;
      }

      dp[i][j] = Math.max(currLength, dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return getSubsequence(dp, str1, str2);
};

const getSubsequence = (lengths, str1, str2) => {
  let pointer1 = str1.length;
  let pointer2 = str2.length;
  let result = "";

  while (lengths[pointer1][pointer2] > 0) {
    let shouldMoveLeft =
      lengths[pointer1][pointer2] === lengths[pointer1][pointer2 - 1];
    let shouldMoveTop =
      lengths[pointer1][pointer2] === lengths[pointer1 - 1][pointer2];

    if (shouldMoveTop) {
      pointer1--;
    }

    if (shouldMoveLeft) {
      pointer2--;
    }

    if (!(shouldMoveLeft || shouldMoveTop)) {
      result = str1[pointer1 - 1] + result;
      pointer1--;
      pointer2--;
    }
  }

  return result;
};

console.log(longestCommonSubsequence("xkykzpw", "zxvvyzw"));
