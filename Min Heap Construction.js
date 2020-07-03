class MinHeap {
  constructor(arr) {
    this.heap = this.buildHeap(arr);
  }

  // O(n) time | O(1) space
  buildHeap(arr) {
    const heap = [];

    for (let i = 0; i < arr.length; i++) this.insert(arr[i], heap);

    return heap;
  }

  // O(1) time | O(1) space
  swap(idx1, idx2, heap = this.heap) {
    [heap[idx1], heap[idx2]] = [heap[idx2], heap[idx1]];
  }

  // O(log(n)) time | O(1) space
  siftUp(currIdx, heap) {
    while (currIdx > 0) {
      const parentIdx = Math.floor((currIdx - 1) / 2);
      if (heap[currIdx] >= heap[parentIdx]) return;

      this.swap(parentIdx, currIdx, heap);
      currIdx = parentIdx;
    }
  }

  // O(log(n)) time | O(1) space
  siftDown(currIdx, heap = this.heap) {
    while (currIdx * 2 < heap.length - 1) {
      let maxChildIdx = currIdx * 2 + 1;

      if (
        maxChildIdx + 1 < heap.length &&
        heap[maxChildIdx] < heap[maxChildIdx + 1]
      )
        maxChildIdx++;

      if (heap[currIdx] <= heap[maxChildIdx]) return;

      this.swap(currIdx, maxChildIdx, heap);

      currIdx = maxChildIdx;
    }
  }

  peek() {
    if (this.heap.length === 0) return null;

    return this.heap[0];
  }

  // O(log(n)) time | O(1) space
  insert(val, heap = this.heap) {
    console.log(heap);
    heap.push(val);
    this.siftUp(heap.length - 1, heap);
  }

  // O(log(n)) time | O(1) space
  remove(heap = this.heap) {
    if (heap.length === 1) return null;

    let val = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    this.siftDown(0, heap);

    return val;
  }
}

const minHeap = new MinHeap([8, 5, 9, 12, 4, 7, 1]);

minHeap.insert(1);
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(6);
minHeap.insert(7);
minHeap.insert(9);
minHeap.insert(0);
minHeap.insert(-2);
