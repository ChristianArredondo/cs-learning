/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const elements = [];

  if (!matrix || !matrix.length || !matrix[0].length) return elements;

  let minRow = -1;
  let maxRow = matrix.length;
  let minCol = -1;
  let maxCol = matrix[0].length;

  let deltaCol = 1;
  let deltaRow = 0;
  let row = 0;
  let col = 0;
  while (elements.length < matrix.length * matrix[0].length) {
    if (col === maxCol) {
      minRow++;
      col += deltaCol * -1;
      row++;
      deltaCol = 0;
      deltaRow = 1;
      continue;
    }
    if (row === maxRow) {
      maxCol--;
      row += deltaRow * -1;
      col--;
      deltaCol = -1;
      deltaRow = 0;
      continue;
    }
    if (col === minCol) {
      maxRow--;
      col += deltaCol * -1;
      row--;
      deltaCol = 0;
      deltaRow = -1;
      continue;
    }
    if (row === minRow) {
      minCol++;
      row += deltaRow * -1;
      col++;
      deltaCol = 1;
      deltaRow = 0;
      continue;
    }

    elements.push(matrix[row][col]);
    col += deltaCol;
    row += deltaRow;
  }

  return elements;
};

console.log(spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));
console.log(spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]));