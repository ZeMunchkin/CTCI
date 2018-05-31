/*
 * Implement a function to check if a linked list
 * is a palindrome.
*/

const isPalindrome = (list) => {
  if (list.head.val !== list.tail.val) {
    return false;
  }

  const values = [];
  let curNode = list.head;

  while (curNode) {
    values.push(curNode.val);
    curNode = curNode.next;
  }

  const reversed = values.reverse();

  for (let i = 0; i < values.length / 2; i += 1) {
    if (values[i] !== reversed[i]) {
      return false;
    }
  }

  return true;
};

/*
 * Notes from Solution:
 *
 * There are two approaches to this:
 * - Reverse the order of the list and compare
 *   With this approach, you only need to check the first
 *   half of the list -- once it passes the halfway point,
 *   it's a mirror.
 * - Iterative: Use a stack and the fast runner / slow runner
 *   approach. Have your slow runner push values into the stack
 *   and when the fast runner reaches the end of the list, you
 *   know the slow runner is at the middle. Once there, start
 *   removing items from the stack and comparing them down the
 *   second half of the list.
 * - This can also be done recursively -- but it's really ugly.
*/
