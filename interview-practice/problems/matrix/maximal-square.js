/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let maxSquareLength = 0;

  if (!matrix || !matrix.length || !matrix[0].length) return maxSquareLength;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === '1') {
        const maybeMax = getMaxSquare([[row, col], [row, col]], matrix);
        maxSquareLength = Math.max(maxSquareLength, maybeMax);
      }
    }
  }

  return maxSquareLength * maxSquareLength;
};

const getMaxSquare = ([topLeft, bottomRight], matrix) => {
  const minRow = topLeft[0];
  const nextRow = bottomRight[0] + 1;
  const minCol = topLeft[1];
  const nextCol = bottomRight[1] + 1;
  const currentSize = nextRow - minRow;

  // check next bottomRight
  if (!(matrix[nextRow] && matrix[nextRow][nextCol] === '1')) return currentSize;

  // check next col
  for (let row = minRow; row <= nextRow; row++) {
    if (matrix[row][nextCol] !== '1') return currentSize;
  }

  // check next row
  for (let col = minCol; col <= nextCol; col++) {
    if (matrix[nextRow][col] !== '1') return currentSize;
  }

  return getMaxSquare([topLeft, [nextRow, nextCol]], matrix);
};

console.log('\n');
console.log(maximalSquare([
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
]));
console.log(maximalSquare([
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '1', '1', '1'],
]));