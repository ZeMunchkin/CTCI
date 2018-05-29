/*
 * Implement an algorithm to determine if a string
 * has all unique characters. What if you cannot
 * use additional data structures?
*/


// regularly:
// Time Complexity: O(n)
// Space Complexity: O(n)

const allUnique = (string) => {
  const chars = {};
  for (let i = 0; i < string.length; i += 1) {
    const curChar = string[i];
    if (chars[curChar]) {
      return false;
    }
    chars[curChar] = true;
  }
  return true;
};

// without additional data structures:
// Time Complexity: O(n^2)
// Space Complexity: O(1)

const allUnique2 = (string) => {
  for (let i = 1; i < string.length; i += 1) {
    const curChar = string[i];
    const prevChars = string.slice(0, i);
    if (prevChars.includes(curChar)) {
      return false;
    }
  }
  return true;
};


/*
 * Notes from Solution:
 *
 * 1. Good to ask if string is an ASCII string or a Unicode String
 *    - ASCII: American Standard Code for Information Interchange
 *      Initially developed for tasks such as sending documents to printers
 *      Each letter is assigned a value according to its position on the
 *      ASCII table.
 *
 * 2. Good to ask if you can mutate the string: If so, you could sort it
 *    and compare characters to their neighbors to look for repeats
 *
 * 3. Strings longer than 128 must have repeats: there are only 128
 *    unique characters
*/
