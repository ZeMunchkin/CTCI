/*
 * Write an algorithm such that if an element in an MxN
 * matrix is 0, its entire row and column are set to 0.
*/

const nullifyRowsAndCols = (matrix) => {
  const rowsToNullify = [];
  const colsToNulify = [];

  for (let i = 0; i < matrix.length; i += 1) {
    const curRow = matrix[i];
    for (let j = 0; j < curRow.length; j += 1) {
      if (matrix[i][j] === 0) {
        rowsToNullify.push(i);
        colsToNulify.push(j);
        break;
      }
    }
  }

  for (let i = 0; i < rowsToNullify.length; i += 1) {
    const row = rowsToNullify[i];
    matrix[row].fill(0);
  }

  for (let i = 0; i < colsToNulify.length; i += 1) {
    const col = colsToNulify[i];
    for (let j = 0; j < matrix.length; j += 1) {
      matrix[j][col] = 0;
    }
  }

  return matrix;
};
