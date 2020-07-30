// O(n) time | O(1) space
const longestSubstringWithoutDuplication = (str) => {
  const chars = {};

  let startIndex = 0;

  let maxLengthStart = 0;
  let maxLengthEnd = 0;

  for (let i = 0; i < str.length; i++) {
    if (chars[str[i]] >= 0) {
      startIndex = Math.max(startIndex, chars[str[i]] + 1);
    }

    // update the max values if needed
    if (i - startIndex > maxLengthEnd - maxLengthStart) {
      maxLengthStart = startIndex;
      maxLengthEnd = i;
    }

    // update the last occurrence of current character
    chars[str[i]] = i;
  }

  return str.slice(maxLengthStart, maxLengthEnd + 1);
};

console.log(longestSubstringWithoutDuplication("clementisacap"));
