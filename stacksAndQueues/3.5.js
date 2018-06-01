/*
 * Implement a MyQueue class which implements a queue using
 * two stacks.
*/

const Stack = require('./stack.js');

class MyQueue {
  constructor() {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }

  enqueue(value) {
    this.inbox.push(value);
  }

  dequeue() {
    if (this.outbox.length === 0) {
      while (this.inbox.length > 0) {
        this.outbox.push(this.inbox.pop());
      }
    }
    if (this.outbox.length === 0) {
      return null;
    }
    return this.outbox.pop();
  }

  size() {
    return this.inbox.length + this.outbox.length;
  }
}
