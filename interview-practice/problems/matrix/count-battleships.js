
const countBattleships = board => {
  const usedCoordsSet = new Set();
  let totalBattleships = 0;

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === 'X') {
        const serialized = serializeCoords(row, col);
        if (!usedCoordsSet.has(serialized)) {
          totalBattleships++;
          updateSet(row, col, board, set);
        }
      }
    }
  }

  return totalBattleships;
};

const serializeCoords = (row, col) => `${row}-${col}`;
const updateSet = (row, col, board, set) => {
  let serialized = serializeCoords(row, col);
  set.add(serialized);
  let maybeRight = board[row][col + 1];
  if (maybeRight === 'X') {
    col += 1;
    while (maybeRight === 'X') {
      serialized = serializeCoords(row, col);
      set.add(serialized);
      col++;
      maybeRight = board[row][col];
    }
    return;
  }

  let maybeDown = board[row + 1] && board[row + 1][col];
  if (maybeDown === 'X') {
    row += 1;
    while (maybeDown === 'X') {
      serialized = serializeCoords(row, col);
      set.add(serialized);
      row++;
      maybeDown = board[row] && board[row][col];
    }
    return;
  }
};