class Stack {
  constructor() {
    this.stack = [];
    this.min = [];
    this.max = [];
  }

  // O(1) time | O(1) space
  push(val) {
    this.stack.push(val);
    if (this.min.length)
      this.min.push(Math.min(this.min[this.min.length - 1], val));
    else this.min.push(val);
    if (this.max.length)
      this.max.push(Math.max(this.max[this.max.length - 1], val));
    else this.max.push(val);
  }

  // O(1) time | O(1) space
  pop() {
    if (this.stack.length === 0) return null;

    this.min.pop();
    this.max.pop();

    return this.stack.pop();
  }

  // O(1) time | O(1) space
  peek() {
    if (this.stack.length === 0) return null;
    return this.stack[this.stack.length - 1];
  }

  // O(1) time | O(1) space
  getMin() {
    if (this.stack.length === 0) return null;
    return this.min[this.min.length - 1];
  }

  // O(1) time | O(1) space
  getMax() {
    if (this.stack.length === 0) return null;
    return this.max[this.max.length - 1];
  }
}

const stack = new Stack();

stack.push(5);
console.log(stack.getMin());
console.log(stack);
stack.push(4);
console.log(stack.getMin());
stack.push(10);
console.log(stack.getMin());
stack.push(8);
console.log(stack.getMin());
stack.push(3);
console.log(stack.getMin());
stack.pop();
console.log(stack.getMin());
