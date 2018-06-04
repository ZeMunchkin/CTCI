/*
 * An animal shelter holds only dogs and cats, and operates on
 * a strictly "first in, first out" basis. People must adopt
 * either the "oldest" (based on arrival time) of all animals
 * at the shelter, or they can select whether they would prefer
 * a dog or a cat (and will receive the oldest animal of that
 * type). They cannot select which specific animal they would
 * like. Create the data structures to maintain this system
 * and implement operations such as enqueue, dequeueAny, dequeueDog,
 * and dequeueCat. You may use the built-in LinkedList data structure.
*/

const LinkedList = require('../linkedLists/linkedList.js');

class ShelterQueue {
  constructor() {
    this.animals = new LinkedList();
  }

  enqueue(animal) {
    this.animals.addToTail(animal);
  }

  dequeueAny() {
    return this.animals.dequeue();
  }

  dequeueDog() {
    let curNode = this.animals.head;
    while (curNode.val.type !== 'dog' && curNode) {
      curNode = curNode.next;
    }
    if (!curNode) {
      return null;
    }
    return this.animals.removeNode(curNode);
  }

  dequeueCat() {
    let curNode = this.animals.head;
    while (curNode.val.type !== 'cat' && curNode) {
      curNode = curNode.next;
    }
    if (!curNode) {
      return null;
    }
    return this.animals.removeNode(curNode);
  }
}


/*
 * Notes from Solution:
 *
 * Another means to implement (which is more efficient for dequeueing
 * specific types of animals) is to have a separate queue for each type
 * of animal and give them each a timestamp as they are enqueued. To
 * dequeueAny, you peak at the heads of each linked list and see which
 * stamp is earlier before dequeueing from that list and returning the
 * animal object.
*/

