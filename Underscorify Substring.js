// N - length of input string
// M - length of target string
// O(N + (M^2)/N) time | O(N) space
const underscorifySubstring = (str, target) => {
  const intervalsToUnderscorify = [];

  for (let i = 0; i < str.length; i++) {
    let index = i;

    while (
      index < str.length &&
      index - i < target.length &&
      str[index] === target[index - i]
    ) {
      index++;
    }

    if (index - i === target.length) {
      addInterval(intervalsToUnderscorify, i, index - 1);
    }
  }

  console.log(intervalsToUnderscorify);

  return underscorify(str, intervalsToUnderscorify);
};

const addInterval = (intervals, start, end) => {
  if (
    intervals.length === 0 ||
    intervals[intervals.length - 1][1] + 1 < start
  ) {
    intervals.push([start, end]);
  } else {
    intervals[intervals.length - 1][1] = end;
  }
};

const underscorify = (str, intervals) => {
  if (intervals.length === 0) {
    return str;
  }

  let result = "";

  let prevEndIndex = 0;

  for (let i = 0; i < intervals.length; i++) {
    result +=
      str.slice(prevEndIndex, intervals[i][0]) +
      "_" +
      str.slice(intervals[i][0], intervals[i][1] + 1) +
      "_";
    prevEndIndex = intervals[i][1] + 1;
  }

  result += str.slice(prevEndIndex);

  return result;
};

console.log(
  underscorifySubstring(
    "testthis is a simple testtest to prove that I am test right testestest",
    "test"
  )
);
console.log(underscorifySubstring("aaaaatestaaatesta", "test"));
