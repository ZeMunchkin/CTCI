/*
 * Given an image represented by an NxN matrix, where each pixel
 * in the image is 4 bytes, write a method to rotate the image by
 * 90 degrees. Can you do this in place?
*/


// Not in place:

const rotate = (matrix) => {
  const newMatrix = [];

  for (let i = 0; i < matrix[0].length; i += 1) {
    const newRow = [];
    for (let j = matrix.length - 1; j >= 0; j -= 1) {
      newRow.push(matrix[j][i]);
    }
    newMatrix.push(newRow);
  }
  return newMatrix;
};


// In place:

const rotateInPlace = (matrix) => {
  const top = 0;
  const left = 0;
  const bottom = matrix.length - 1;
  const right = matrix[0].length - 1;

  const rightMax = matrix[0].length / 2;
  const bottomMax = Math.floor(matrix.length / 2);

  for (let i = 0; i < rightMax; i += 1) {
    for (let j = 0; j < bottomMax; j += 1) {
      const newTop = top + j;
      const newLeft = left + i;
      const newBottom = bottom - j;
      const newRight = right - i;

      const placeholder = matrix[newTop][newLeft];
      matrix[newTop][newLeft] = matrix[newRight][newTop];
      matrix[newRight][newTop] = matrix[newBottom][newRight];
      matrix[newBottom][newRight] = matrix[newLeft][newBottom];
      matrix[newLeft][newBottom] = placeholder;
    }
  }

  return matrix;
};


/*
 * Notes from Solution:
 *
 * This algorithm has time complexity of O(n^2), which is actually
 * the best we can do, since each element of the matrix must be touched.
*/
