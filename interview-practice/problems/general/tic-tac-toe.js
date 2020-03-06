
const winningCombos = [
  [[0, 0], [0, 1], [0, 2]], // row 0
  [[1, 0], [1, 1], [1, 2]], // row 1
  [[2, 0], [2, 1], [2, 2]], // row 2
  [[0, 0], [1, 0], [2, 0]], // col 0
  [[0, 1], [1, 1], [2, 1]], // col 1
  [[0, 2], [1, 2], [2, 2]], // col 2
  [[0, 0], [1, 1], [2, 2]], // diag down
  [[2, 0], [1, 1], [0, 2]], // diag up
];

/**
 * Accepts array history of tic-tac-toe moves and new move.
 * Checks if tic-tac-toe board w/ new move has a winning combination
 * or is at a tie.
 * 
 * Assumptions:
 *  - all input moves are valid and unique
 *      - all 'x's and 'o's map to the correct (and different) userIds
 *      - there are a total of 9 possible moves
 * 
 * @param {{ userId: String; icon: String; coord: number[] }[]} history
 * @param {{ userId: String; icon: String; coord: number[]}} nextMove
 * 
 * @return {
 *  { hasWinner: Boolean; winnerId: String; hasTie: Boolean; }
 * }
 */
function checkTicTacToe(history, nextMove) {
  const allMoves = [...history, nextMove];
  const board = buildBoard(allMoves);

  let winnerId = null;

  // - check winning combos
  // - stop when first positive check is encountered and update winnerId
  const hasWinner = winningCombos.some(coords => {
    let currIcon;
    let currUserId;
    const hasAllWinningCoords = coords.every(([row, col]) => {
      const cell = board[row][col];

      if (cell === null) return false;
      const { icon, userId } = cell;

      // set user id
      if (!currUserId) currUserId = userId;

      // set and check icon
      if (!currIcon) currIcon = icon;
      else if (currIcon !== icon) return false;

      return true;
    });

    if (!hasAllWinningCoords) return false;

    winnerId = currUserId;
    return true;
  });
  const hasTie = hasWinner ? false : allMoves.length === 9;

  return { hasWinner, winnerId, hasTie };
}

function buildBoard(moves) {
  const board = new Array(3).fill(null).map(() => new Array(3).fill(null));
  for (const move of moves) {
    const { userId, icon, coord: [row, col] } = move;
    board[row][col] = { userId, icon };
  }
  return board;
}

console.log('\n');

// winner
console.log(checkTicTacToe([
  { userId: 1, icon: 'x', coord: [0, 0] },
  { userId: 2, icon: 'o', coord: [1, 0] },
  { userId: 1, icon: 'x', coord: [1, 1] },
  { userId: 2, icon: 'o', coord: [1, 2] },
],
  { userId: 1, icon: 'x', coord: [2, 2] })
);
// tie
console.log(checkTicTacToe([
  { userId: 1, icon: 'x', coord: [0, 0] },
  { userId: 2, icon: 'o', coord: [1, 0] },
  { userId: 1, icon: 'x', coord: [2, 0] },
  { userId: 2, icon: 'o', coord: [1, 1] },
  { userId: 1, icon: 'x', coord: [0, 1] },
  { userId: 2, icon: 'o', coord: [2, 1] },
  { userId: 1, icon: 'x', coord: [1, 2] },
  { userId: 2, icon: 'o', coord: [0, 2] },
],
  { userId: 1, icon: 'x', coord: [2, 2] })
);
// neither winner nor tie
console.log(checkTicTacToe([
  { userId: 1, icon: 'x', coord: [0, 0] },
  { userId: 2, icon: 'o', coord: [1, 0] },
  { userId: 1, icon: 'x', coord: [1, 1] },
  { userId: 2, icon: 'o', coord: [1, 2] },
],
  { userId: 1, icon: 'x', coord: [2, 0] })
);