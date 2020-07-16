// O(n*n) time | O(n*n) space
// const longestPalindromicSubstring = (str) => {
//   if (str.length === 0) return "";

//   const dp = new Array(str.length);

//   for (let i = 0; i < str.length; i++) {
//     dp[i] = new Array(str.length).fill(false);
//   }

//   let maxI = 0,
//     maxJ = 0;

//   for (let len = 0; len < dp.length; len++) {
//     for (let i = 0; i < dp.length - len; i++) {
//       let j = len + i;

//       if (i === j) dp[i][j] = true;
//       else if (str[i] === str[j] && (dp[i + 1][j - 1] || i + 1 === j)) {
//         dp[i][j] = true;
//       }

//       if (dp[i][j] && maxJ - maxI < j - i) {
//         maxI = i;
//         maxJ = j;
//       }
//     }
//   }

//   return str.slice(maxI, maxJ + 1);
// };

const longestPalindromicSubstring = (str) => {
  if (str.length === 0) return "";
  let maxStart = 0,
    maxEnd = 0;

  for (let i = 1; i < str.length; i++) {
    let length = 1;

    // check palindromes with odd length and center in i
    while (
      str[i - length] === str[i + length] &&
      str[i - length] &&
      str[i + length]
    ) {
      length++;
    }

    if ((length - 1) * 2 > maxEnd - maxStart) {
      maxStart = i - length + 1;
      maxEnd = i + length - 1;
    }

    length = 0;

    // check palindromes with even length and center in i - 1 and i
    while (
      str[i - length - 1] === str[i + length] &&
      str[i - length - 1] &&
      str[i + length]
    ) {
      length++;
    }

    if (length * 2 > maxEnd - maxStart + 1) {
      maxStart = i - length;
      maxEnd = i + length - 1;
    }
  }

  return str.slice(maxStart, maxEnd + 1);
};

console.log(longestPalindromicSubstring("abaxyyxb"));
