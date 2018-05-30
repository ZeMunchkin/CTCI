/*
 * Implement an algorithm to find the kth to last element
 * of a singly linked list.
*/

const findKthToLast = (k, list) => {
  // initialize two pointers
  // one should be pointing at the head
  let p1 = list.head;
  // one should be pointing at the tail
  let p2 = list.tail;
  // initialize a counter at 1
  let counter = 1;
  // while counter is less than k
  while (counter < k) {
    // if k is greater than the list is long
    if (p2 === list.head) {
      // return null
      return null;
    }
    // if p1.next is p2
    if (p1.next === p2) {
      // increase counter
      counter += 1;
      // p2 = p1
      p2 = p1;
      // p1 = head
      p1 = list.head;
    // else
    } else {
      // p1 = p1.next
      p1 = p1.next;
    }
  }
  // return p2.val
  return p2.val;
};


/*
 * Notes from Solution:
 *
 * There are two approaches to this problem:
 *   - recursion
 *   - non-recursively
 *
 * Questions to keep in mind:
 *   - Do we know the size of the linked list?
 *     If so, we can just subtract k from the length and
 *     traverse the list to that element
 *
 * Should not traverse the list more than twice! Once
 * to find out the length of the list, and a second to
 * find the kth element once you know where it is.
 *
 * If solving with recursion, pass in the counter
*/
