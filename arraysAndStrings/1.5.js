/*
 * Implement a method to perform basic string compression using
 * the counts of repeated characters. For example, the string
 * 'aabcccccaaa' would become 'a2b1c5a3'. If the "compressed"
 * string would not become smaller than the original string,
 * your method should return the original string. You can assume
 * the string has only upper and lower case letters (a - z).
*/

const compressString = (str) => {
  let compressedStr = '';
  let workingChar = str[0];
  let occurances = 1;

  for (let i = 1; i < str.length; i += 1) {
    const curChar = str[i];

    if (curChar === workingChar) {
      occurances += 1;
      continue;
    }

    compressedStr += workingChar;
    compressedStr += occurances;
    workingChar = curChar;
    occurances = 1;
  }

  compressedStr += workingChar;
  compressedStr += occurances;

  if (compressedStr.length < str.length) {
    return compressedStr;
  }
  return str;
};

