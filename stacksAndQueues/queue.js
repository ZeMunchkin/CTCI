class Queue {
  constructor() {
    this.storage = {};
    this.addIndex = 0;
    this.removeIndex = 0;
  }

  enqueue(value) {
    this.storage[this.addIndex] = value;
    this.addIndex += 1;
  }

  dequeue() {
    if (this.removeIndex >= this.addIndex) {
      return null;
    }
    const removeVal = this.storage[this.removeIndex];
    delete this.storage[this.removeIndex];
    this.removeIndex += 1;
    return removeVal;
  }

  size() {
    return this.addIndex - this.removeIndex;
  }
}

module.exports = Queue;
