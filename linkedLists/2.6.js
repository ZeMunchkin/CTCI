/*
 * Given a circular linked list, implement an algorithm which returns
 * the node at the beginning of the loop.
 *
 * DEFINITION
 * Circular linked list: A (corrupt) linked listed in which a node's
 * next pointer is pointing to an earlier node, so as to make a loop
 * in the linked list.
 *
 * EXAMPLE
 * Input: A -> B -> C -> D -> E -> C [same C as earlier]
 * Output: C
*/

const findLoopOrigin = (list) => {
  let p1 = list.head;
  let p2 = list.head.next;
  let p3 = list.head;
  let loopVal = null;

  while (!loopVal) {
    if (p3 === p2 || p3 === p1) {
      p3 = list.head;
      p1 = p1.next;
      p2 = p2.next.next;
    } else if (p2.next === p3.next || p1.next === p3.next) {
      loopVal = p3.next.val;
    } else {
      p1 = p1.next;
      p2 = p2.next.next;
      p3 = p3.next;
    }
  }
  return loopVal;
};

/*
 * This can be done with two pointers only!
 * First you need to use the slow runner / fast runner technique
 * to find where the two pointers intersect in the loop.
 *
 * The collision point is always the same length from the start
 * of the loop as the head node. So if you reset one pointer to
 * the head and have them each traverse at a rate of one node,
 * they will intersect at the beginning of the loop.
 *
 * See pages 193 through 196 of CTCI for full breakdown of how
 * this is mathematically possible.
*/
