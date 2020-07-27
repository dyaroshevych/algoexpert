// node -> i
// left child -> 2*i + 1
// right child -> 2*i + 2
// parent -> Math.floor((i - 1) / 2)
const MIN_HEAP_FUNC = (a, b) => a < b;
const MAX_HEAP_FUNC = (a, b) => a > b;

class Heap {
  constructor(comparisonFunc) {
    this.arr = [];
    this.compare = comparisonFunc;
  }

  push(val) {
    this.arr.push(val);
    let idx = this.arr.length - 1;

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);

      if (this.compare(this.arr[idx], this.arr[parentIdx])) {
        [this.arr[idx], this.arr[parentIdx]] = [
          this.arr[parentIdx],
          this.arr[idx],
        ];
        idx = parentIdx;
      } else {
        break;
      }
    }
  }

  pop() {
    if (this.arr.length === 0) {
      return null;
    }

    const node = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.pop();

    let idx = 0;

    while (idx * 2 + 1 < this.arr.length) {
      const leftChildIdx = idx * 2 + 1;
      const rightChildIdx = idx * 2 + 2;

      let maxChildIdx = leftChildIdx;

      if (
        rightChildIdx < this.arr.length &&
        this.compare(this.arr[rightChildIdx], this.arr[leftChildIdx])
      ) {
        maxChildIdx = rightChildIdx;
      }

      if (this.compare(this.arr[maxChildIdx], this.arr[idx])) {
        [this.arr[idx], this.arr[maxChildIdx]] = [
          this.arr[maxChildIdx],
          this.arr[idx],
        ];
        idx = maxChildIdx;
      } else {
        break;
      }
    }

    return node;
  }

  peek() {
    if (this.arr.length === 0) {
      return null;
    }

    return this.arr[0];
  }
}

// O(NlogN) time | O(N) space
class ContinuousMedianHandler {
  constructor() {
    this.maxHalf = new Heap(MIN_HEAP_FUNC);
    this.minHalf = new Heap(MAX_HEAP_FUNC);
  }

  insert(val) {
    if (this.maxHalf.arr.length > this.minHalf.arr.length) {
      this.maxHalf.push(val);
      this.minHalf.push(this.maxHalf.pop());
    } else {
      this.minHalf.push(val);
      this.maxHalf.push(this.minHalf.pop());
    }
  }

  getMedian() {
    let leftVal = null;
    let rightVal = null;

    if (this.maxHalf.arr.length <= this.minHalf.arr.length) {
      leftVal = this.minHalf.peek();
    }

    if (this.maxHalf.arr.length >= this.minHalf.arr.length) {
      rightVal = this.maxHalf.peek();
    }

    let median = leftVal !== null ? leftVal : rightVal;

    if (leftVal !== null && rightVal !== null) {
      median = (leftVal + rightVal) / 2;
    }

    return median;
  }
}

const continuousMedian = new ContinuousMedianHandler();

continuousMedian.insert(2); // [2]
console.log(continuousMedian.getMedian());
continuousMedian.insert(5); // [2, 5]
console.log(continuousMedian.getMedian());
continuousMedian.insert(6); // [2, 5 ,6]
console.log(continuousMedian.getMedian());
continuousMedian.insert(27); // [2, 5, 6, 27]
console.log(continuousMedian.getMedian());
continuousMedian.insert(23); // [2, 5, 6, 23, 27]
console.log(continuousMedian.getMedian());
continuousMedian.insert(1); // [1, 2, 5, 6, 23, 27]
console.log(continuousMedian.getMedian());
continuousMedian.insert(2); // [1, 2, 2, 5, 6, 23, 27]
console.log(continuousMedian.getMedian());
continuousMedian.insert(3); // [1, 2, 2, 3, 5, 6, 23, 27]
console.log(continuousMedian.getMedian());
