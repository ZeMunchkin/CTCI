class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(value) {
    const newNode = new Node(value);

    if (this.length) {
      this.tail.next = newNode;
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
      this.head = this.head.next;
      this.length -= 1;
    }

    return returnVal;
  }

  removeNode(node) {
    if (node === this.head) {
      return this.removeHead();
    }

    let curNode = this.head;
    while (curNode.next !== node && curNode) {
      curNode = curNode.next;
    }

    if (!curNode) {
      return null;
    }
    
    curNode.next = curNode.next.next;
    this.length -= 1;
    return node.val;
  }
}

module.exports = LinkedList;
