/*
 * Write code to partition a linked list around a
 * value x, such that all nodes less than x come
 * before all nodes greater than or equal to x.
*/


/*
 * Questions I have:
 *
 * - Do nodes equal to x need to come before nodes
 *   greater than x? Or should they be intermingled?
*/

const partition = (list, x) => {
  let partitionStart = null;
  let partitionEnd = null;
  let newTail = null;
  let curNode = list.head;

  while (curNode) {
    const next = curNode.next;
    if (curNode.val < x) {
      if (curNode !== list.head) {
        curNode.next = list.head;
        list.head = curNode;
      }
      if (!partitionStart) {
        partitionStart = curNode;
      }
    } else {
      if (!partitionEnd) {
        partitionEnd = curNode;
      } else {
        newTail.next = curNode;
      }
      newTail = curNode;
      curNode.next = null;
    }
    curNode = next;
  }

  if (partitionStart) {
    partitionStart.next = partitionEnd;
  } else {
    list.head = partitionEnd;
  }
  if (newTail) {
    list.tail = newTail;
  } else {
    list.tail = partitionStart;
  }
};

/*
 * Notes from Solution:
 *
 * One approach is to have two linked lists going -- one of
 * elements smaller than partition and one for all equal to
 * or greater than, and then once we've sorted the whole list
 * we can merge the two smaller lists. Cons -- have four
 * variables to track.
 *
 * Another approach is to create a new list with existing nodes
 * and add smaller than ones to the head and larger than ones
 * to the tail.
 *
 * There are several approaches to this problem. Pay attention
 * to any given contraints, otherwise all are valid.
*/

