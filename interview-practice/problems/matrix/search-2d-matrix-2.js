/**
 * * @description
 * Write an efficient algorithm that searches for a value in an m x n matrix.
 * This matrix has the following properties:
 *  - Integers in each row are sorted in ascending from left to right.
 *  - The first integer of each row is greater than the last integer of the previous row.
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix || !matrix.length || !matrix[0].length) return false;

  const totalRows = matrix.length - 1;
  const totalCols = matrix[0].length - 1;
  let col = totalCols;
  let row = 0;

  while (row <= totalRows && col >= 0) {
    const el = matrix[row][col];
    if (el === target) return true;
    if (el > target) col--;
    else if (el < target) {
      if (col !== totalCols) return false;
      row++;
    }
  }

  return false;
};

console.log(searchMatrix(
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ],
  3
));