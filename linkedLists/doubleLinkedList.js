class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(value) {
    const newNode = new Node(value);

    if (this.length) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length += 1;
    } else {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    }
  }

  removeHead() {
    let returnVal;

    if (!this.length) {
      returnVal = null;
    } else if (this.length === 1) {
      returnVal = this.head.val;
      this.head = null;
      this.tail = null;
      this.length -= 1;
    } else {
      returnVal = this.head.val;
      this.head.next.prev = null;
      this.head = this.head.next;
      this.length -= 1;
    }

    return returnVal;
  }
}

module.exports = DoubleLinkedList;
