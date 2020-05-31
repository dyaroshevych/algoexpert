// O(n) time | O(n) space
// const isPalindrome = (str) => str.split("").reverse().join("") === str;

// O(n) time | O(1) space
const isPalindrome = (str) => {
  const middle = Math.floor(str.length / 2);
  for (let i = 0; i < middle; i++)
    if (str[i] !== str[str.length - i - 1]) return false;

  return true;
};

console.log(isPalindrome("abccba"));
