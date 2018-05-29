/*
 * Given two strings, write a method to decide if
 * one is a permutation of the other.
*/

const isPermutation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const str1Chars = {};
  const str2Chars = {};

  for (let i = 0; i < str1.length; i += 1) {
    const curChar1 = str1[i];
    const curChar2 = str2[i];

    if (!str1Chars[curChar1]) {
      str1Chars[curChar1] = 0;
    }
    if (!str2Chars[curChar2]) {
      str2Chars[curChar2] = 0;
    }

    str1Chars[curChar1] += 1;
    str2Chars[curChar2] += 1;
  }

  const chars1Arr = Object.keys(str2Chars);

  if (chars1Arr.length !== Object.keys(str2Chars).length) {
    return false;
  }

  for (let i = 0; i < chars1Arr.length; i += 1) {
    const curChar = chars1Arr[i];
    if (str1Chars[curChar] !== str2Chars[curChar]) {
      return false;
    }
  }
  return true;
};


/*
 * Notes from Solution:
 *
 * 1. Can you sort the strings?
 * 2. Are the permutations case sensitive? ie: 'dog' and 'God'
 * 3. Is whitespace significant? ie: 'dog     ' and 'god'
 *
 * Two approaches:
 * - Sort the strings and compare them
 * - Check if the strings have identical character counts
 *
 * First way is easier to read, second is more efficient
*/
