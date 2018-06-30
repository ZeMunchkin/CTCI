/*
 * Write a method to compute all permutations of a string
 * of unique characters.
*/

const getAllPermutations = (str) => {
  const chars = str.split('');
  const results = [];

  const findPermutations = (charsRemaining, curChars) => {
    if (charsRemaining.length === 0) {
      results.push(curChars.join(''));
      return;
    }

    for (let i = 0; i < charsRemaining.length; i += 1) {
      const char = charsRemaining[i];
      curChars.push(char);

      const remaining = [].concat(charsRemaining.slice(0, i), charsRemaining.slice(i + 1));

      findPermutations(remaining, curChars);
      curChars.pop();
    }
  };

  findPermutations(chars, []);

  return results;
};
