class TrieNode {
  constructor(val) {
    this.val = val;
    this.children = {};
    this.end = null;
  }
}

class Trie {
  constructor() {
    this.root = {};
  }

  addWord(word) {
    let currNode = this.root[word[0]];

    if (!currNode) {
      currNode = new TrieNode(word[0]);
      this.root[word[0]] = currNode;
    }

    let currIdx = 1;

    while (currIdx < word.length) {
      if (!currNode.children[word[currIdx]]) {
        currNode.children[word[currIdx]] = new TrieNode(word[currIdx]);
      }

      currNode = currNode.children[word[currIdx]];
      currIdx++;
    }

    currNode.end = word;
  }
}

const getNeighbours = (board, i, j) => {
  const N = board.length;
  const M = board[0].length;

  const neighbours = [];

  if (i > 0 && j > 0) {
    neighbours.push([i - 1, j - 1]);
  }
  if (i > 0) {
    neighbours.push([i - 1, j]);
  }
  if (i > 0 && j < M - 1) {
    neighbours.push([i - 1, j + 1]);
  }
  if (j < M - 1) {
    neighbours.push([i, j + 1]);
  }
  if (i < N - 1 && j < M - 1) {
    neighbours.push([i + 1, j + 1]);
  }
  if (i < N - 1) {
    neighbours.push([i + 1, j]);
  }
  if (i < N - 1 && j > 0) {
    neighbours.push([i + 1, j - 1]);
  }
  if (j > 0) {
    neighbours.push([i, j - 1]);
  }

  return neighbours;
};

const dfs = (result, board, visited, currNode, currI, currJ) => {
  const id = `${currI}_${currJ}`;

  if (visited.has(id)) {
    return;
  }

  if (currNode.end) {
    result.add(currNode.end);
  }

  visited.add(id);

  const neighbours = getNeighbours(board, currI, currJ);

  for (let [i, j] of neighbours) {
    const childNode = currNode.children[board[i][j]];

    if (childNode) {
      dfs(result, board, visited, childNode, i, j);
    }
  }

  visited.delete(id);
};

// O(w*l + n*m*8^l) time | O(w*l + n*m) space
const boggleBoard = (board, words) => {
  if (board.length === 0) {
    return [];
  }

  const N = board.length;
  const M = board[0].length;
  const trie = new Trie();

  for (let word of words) {
    trie.addWord(word);
  }

  const result = new Set();

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      let currNode = trie.root[board[i][j]];

      if (currNode) {
        dfs(result, board, new Set(), currNode, i, j);
      }
    }
  }

  return Array.from(result);
};

console.log(
  boggleBoard(
    [
      ["t", "h", "i", "s", "i", "s", "a"],
      ["s", "i", "m", "p", "l", "e", "x"],
      ["b", "x", "x", "x", "x", "e", "b"],
      ["x", "o", "g", "g", "l", "x", "o"],
      ["x", "x", "x", "D", "T", "r", "a"],
      ["R", "E", "P", "E", "A", "d", "x"],
      ["x", "x", "x", "x", "x", "x", "x"],
      ["N", "O", "T", "R", "E", "-", "P"],
      ["x", "x", "D", "E", "T", "A", "E"],
    ],
    [
      "this",
      "is",
      "not",
      "a",
      "simple",
      "boggle",
      "board",
      "test",
      "REPEATED",
      "NOTRE-PEATED",
    ]
  )
);
