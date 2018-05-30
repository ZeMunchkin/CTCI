/*
 * You have two numbers represented by a linked list, where
 * each node contains a single digit. The digits are stored
 * in reverse order, such that the 1's digit is at the head
 * of the list. Write a function that adds the two numbers
 * and returns the sum as a linked list.
 *
 * EXAMPLE
 * Input: (7 -> 1 -> 6) + (5 -> 9 -> 2)
 * That's 617 + 295
 * Output: (2 -> 1 -> 9)
 * That's 912
 *
 * FOLLOW UP
 * Suppose the digits are stored in forward order. Repeat
 * the above problem.
 * Input: (6 -> 1 -> 7) + (2 -> 9 -> 5)
 * That's 617 + 295
 * Output: (9 -> 1 -> 2)
 * That's 912
*/

const List = require('./linkedList.js');

const addReverseLists = (l1, l2) => {
  let cur1 = l1.head;
  let cur2 = l2.head;
  let carry = 0;

  const returnList = new List();

  while (cur1.val || cur2.val) {
    const num1 = cur1.val || 0;
    const num2 = cur2.val || 0;
    const sum = num1 + num2 + carry;
    carry = Math.floor(sum / 10);
    const value = sum % 10;

    returnList.addToTail(value);
    cur1 = cur1.next || {};
    cur2 = cur2.next || {};
  }

  return returnList;
};


/*
 * Notes from Solution:
 *
 * Think of how you would handle large addition. In this example:
 *
 *   617
 *  +295
 *
 * The ones place will be addressed first, adding the two integers,
 * notating the remainder in the ones column, and any full tens as
 * a carryover for the next column.
 *
 *
 * FOLLOW UP
 *
 * See CTCI for more on the follow up portion.
*/

