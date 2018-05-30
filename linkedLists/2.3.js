/*
 * Implement an algorithm to delete a node in the
 * middle of a singly linked list, given accesss
 * only to that node.
 *
 * EXAMPLE:
 * Input: node c from list a -> b -> c -> d -> e
 * Output: nothing is returned, but the list is now
 * a -> b -> d -> e
*/

const removeNode = (node) => {
  node.val = node.next.val;
  node.next = node.next.next;
};

/*
 * Questions I have as I'm coding:
 *
 * - Can I assume that the given node is NOT
 *   the last node?
*/
