// O(n) time | O(n) space
const balancedBranckets = (str) => {
  let opened = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      opened.push("(");
    } else if (str[i] === ")") {
      if (opened.pop() !== "(") return false;
    } else if (str[i] === "{") {
      opened.push("{");
    } else if (str[i] === "}") {
      if (opened.pop() !== "{") return false;
    } else if (str[i] === "[") {
      opened.push("[");
    } else if (str[i] === "]") {
      if (opened.pop() !== "[") return false;
    }
  }

  return opened.length === 0;
};

console.log(balancedBranckets("[({}[)]]"));
