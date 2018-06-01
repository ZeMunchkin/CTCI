class Stack {
  constructor() {
    this.stack = [];
    this.length = 0;
  }

  push(value) {
    this.stack[this.length] = value;
    this.length += 1;
  }

  pop() {
    if (this.length > 0) {
      this.length -= 1;
      const returnVal = this.stack[this.length];
      this.stack[this.length] = undefined;
      return returnVal;
    }
    return null;
  }
}

module.exports = Stack;
