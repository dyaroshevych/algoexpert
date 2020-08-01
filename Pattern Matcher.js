// N - length of pattern
// M - length of str
// O(M^2) time | O(N + M) space
const patternMatcher = (pattern, str) => {
  if (pattern.length === 0 || pattern.length > str.length) {
    return [];
  }

  const oldPattern = pattern;
  pattern = updatePattern(pattern);

  const patternCount = getPatternCharsCount(pattern);
  const firstIndexOfY = pattern.indexOf("y");

  // try putting different strings as x and
  // check whether we can construct a proper
  // string given its length and count of x and y
  for (let xLength = 1; xLength <= str.length / patternCount.x; xLength++) {
    const yLength =
      Math.floor((str.length - patternCount.x * xLength) / patternCount.y) || 0;

    if (yLength === 0) continue;

    // try constructiong the pattern
    if (patternCount.x * xLength + patternCount.y * yLength === str.length) {
      if (isPatternWithLengths(pattern, str, xLength, yLength, firstIndexOfY)) {
        const result = [
          str.slice(0, xLength),
          str.slice(xLength * firstIndexOfY, xLength * firstIndexOfY + yLength),
        ];

        return oldPattern === pattern ? result : result.reverse();
      }
    }
  }

  return [];
};

const isPatternWithLengths = (
  pattern,
  str,
  xLength,
  yLength,
  firstIndexOfY
) => {
  let patternIndex = 0;
  let strIndex = 0;

  while (strIndex < str.length) {
    if (pattern[patternIndex] === "x") {
      for (let i = 0; i < xLength; i++) {
        if (str[strIndex] !== str[i]) {
          return false;
        }
        strIndex++;
      }
    } else {
      for (let i = 0; i < yLength; i++) {
        if (str[strIndex] !== str[xLength * firstIndexOfY + i]) {
          return false;
        }
        strIndex++;
      }
    }

    patternIndex++;
  }

  return true;
};

// count number of x and y in a pattern
const getPatternCharsCount = (pattern) => {
  const chars = {
    x: 0,
    y: 0,
  };

  for (let i = 0; i < pattern.length; i++) {
    chars[pattern[i]]++;
  }

  return chars;
};

const updatePattern = (pattern) => {
  if (pattern[0] === "x") {
    return pattern;
  }

  let updatedPattern = "";

  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === "x") {
      updatedPattern += "y";
    } else {
      updatedPattern += "x";
    }
  }

  return updatedPattern;
};

console.log(patternMatcher("yxy", "gogogoxgo"));
