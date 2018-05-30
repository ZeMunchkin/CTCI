/*
 * Write code to remove duplicates from an unsorted linked list.
 *
 * FOLLOW UP:
 * How would you solve this problem if a temporary buffer is not allowed?
*/

const removeDuplicates = (list) => {
  let pointer1 = list.head;
  let pointer2 = list.head;
  const values = {};

  while (pointer2) {
    const value = pointer2.val;

    if (!values[value]) {
      values[value] = true;
      pointer1 = pointer2;
      pointer2 = pointer2.next;
    } else {
      let duplicate = true;
      let difference = 0;

      while (duplicate) {
        difference = 1;
        pointer2 = pointer2.next;
        const { val } = pointer2;

        if (!values[val]) {
          duplicate = false;
          values[val] = true;
          pointer1.next = pointer2;
          pointer1 = pointer2;
          pointer2 = pointer2.next;
          list.length -= difference;
        }
      }
    }
  }
  return list;
};


/*
 * Notes from Solution:
 *
 * This can be done two ways:
 *   - Can use an object to keep track of duplicates.
 *     Time Complexity: O(n)
 *     Space Complexity: O(n)
 *   - If no additional data structures are allowed, you can do this
 *     with a runner -- on each node, send a second runner through the
 *     list to remove any nodes with the same value.
 *     Time Complexity: O(n^2)
 *     Space Complexity: O(1)
*/
