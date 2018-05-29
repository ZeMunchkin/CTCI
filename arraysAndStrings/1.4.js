/*
 * Write a method to replace all spaces in a string with '%20'.
 * You may assume that the string has sufficient space at the
 * end to hold the additional characters, and that you are
 * given the 'true' length of the string. (Note: if implementing
 * in Java, please use a character array so that you can perform
 * this operation in place.)
 *
 * EXAMPLE
 *
 * Input: 'Mr John Smith', 13
 * Output: 'Mr%20'John%20Smith'
*/

// Not in place:

const replaceSpaces = (str) => {
  const chars = str.split('');

  for (let i = 0; i < chars.length; i += 1) {
    if (chars[i] === ' ') {
      chars[i] = '%20';
    }
  }

  return chars.join('');
};


/*
 * Notes from Solution:
 *
 * 1. If this needs to be done in place, a common approach is to start
 *    from the end of the string and work towards the beginning.
*/
