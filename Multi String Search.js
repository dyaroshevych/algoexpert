// n - length of the big string
// m - length of strings array
// l - length of the longest word in the array

// O(n^2 + m*l) time | O(n^2 + m) space
// const multiStringSearch = (input, strs) => {
//   const trie = new Trie(input);

//   const result = new Array(strs.length);

//   for (let i = 0; i < strs.length; i++) {
//     result[i] = trie.contains(strs[i]);
//   }

//   return result;
// };

// class TrieNode {
//   constructor(val) {
//     this.val = val;
//     this.children = {};
//   }
// }

// class Trie {
//   constructor(word) {
//     this.root = {};

//     for (let i = 0; i < word.length; i++) {
//       this.addFromIndex(word, i);
//     }
//   }

//   addFromIndex(str, index) {
//     let currNode = this.root[str[index]];

//     if (!currNode) {
//       currNode = new TrieNode(str[index]);
//       this.root[str[index]] = currNode;
//     }

//     index++;

//     while (index < str.length) {
//       if (!currNode.children[str[index]]) {
//         currNode.children[str[index]] = new TrieNode(str[index]);
//       }

//       currNode = currNode.children[str[index]];
//       index++;
//     }
//   }

//   contains(str) {
//     if (!this.root[str[0]]) {
//       return false;
//     }

//     let currNode = this.root[str[0]];
//     let index = 1;

//     while (index < str.length) {
//       currNode = currNode.children[str[index]];

//       if (!currNode) {
//         return false;
//       }

//       index++;
//     }

//     return true;
//   }
// }

// O(m*l + n*l) time | O(m*l) space
const multiStringSearch = (input, strs) => {
  const trie = new Trie();

  for (let i = 0; i < strs.length; i++) {
    trie.add(strs[i], i);
  }

  const result = new Array(strs.length).fill(false);

  for (let i = 0; i < input.length; i++) {
    const possibleIndexes = trie.search(input, i);

    possibleIndexes.forEach((index) => {
      result[index] = true;
    });
  }

  return result;
};

class TrieNode {
  constructor(val) {
    this.val = val;
    this.children = {};
    this.arrIndex = null;
  }
}

class Trie {
  constructor() {
    this.root = {};
  }

  add(str, arrIndex) {
    let currNode = this.root[str[0]];

    if (!currNode) {
      currNode = new TrieNode(str[0]);
      this.root[str[0]] = currNode;
    }

    let index = 1;

    while (index < str.length) {
      if (!currNode.children[str[index]]) {
        currNode.children[str[index]] = new TrieNode(str[index]);
      }

      currNode = currNode.children[str[index]];
      index++;
    }

    currNode.arrIndex = arrIndex;
  }

  search(str, index) {
    if (!this.root[str[index]]) {
      return [];
    }

    let currNode = this.root[str[index]];
    index++;

    const arrIndexes = [];

    while (index < str.length) {
      currNode = currNode.children[str[index]];

      if (!currNode) {
        return arrIndexes;
      }

      if (currNode.arrIndex !== null) {
        arrIndexes.push(currNode.arrIndex);
      }

      index++;
    }

    return arrIndexes;
  }
}

console.log(
  multiStringSearch("diamin is d1malox in disguise", [
    "diss",
    "diam",
    "dima",
    "d1malox ",
    "in dis",
    "ise",
  ])
);
