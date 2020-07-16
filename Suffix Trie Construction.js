class SuffixTrieNode {
  constructor(children, isEnd) {
    this.children = {};
    this.isEnd = false;
  }
}

class SuffixTrie {
  constructor(string) {
    this.root = new SuffixTrieNode();
    this.populateSuffixTrieFrom(string);
  }

  // O(n*n) time | O(n*n) space
  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      this.insert(string, i);
    }
  }

  insert(string, startIdx) {
    let idx = startIdx,
      node = this.root;

    while (node.children[string[idx]]) {
      node = node.children[string[idx]];
      idx++;
    }

    while (idx < string.length) {
      const newNode = new SuffixTrieNode();

      node.children[string[idx]] = newNode;
      node = newNode;
      idx++;
    }

    node.isEnd = true;
  }

  // O(n) time | O(1) space
  contains(string) {
    let node = this.root;

    let idx = 0;

    while (idx < string.length) {
      if (node.children[string[idx]]) {
        node = node.children[string[idx]];
      } else {
        break;
      }
      idx++;
    }

    return node.isEnd && idx === string.length;
  }
}

const suffixTrie = new SuffixTrie("lmao");

console.log(suffixTrie.contains("lmao"));
console.log(suffixTrie.contains("o"));
console.log(suffixTrie.contains("ol"));
console.log(suffixTrie.contains("lmaoo"));
