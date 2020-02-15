
const serializePoint = (row, col) => `${row}-${col}`;

function countServers(grid) {
  if (!grid || !grid[0]) return 0;
  
  const rowsTable = {};
  const colsTable = {};

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (!rowsTable[row]) {
        rowsTable[row] = [];
      }
      if (!colsTable[col]) {
        colsTable[col] = [];
      }
      
      if (grid[row][col] === 1) {
        const point = serializePoint(row, col);
        rowsTable[row].push(point);
        colsTable[col].push(point);
      }
    }
  }

  const usedPoints = new Set();
  let totalServers = 0;
  for (row in rowsTable) {
    if (rowsTable[row].length > 1) {
      rowsTable[row].forEach(point => {
        if (!usedPoints.has(point)) {
          totalServers++;
          usedPoints.add(point);
        }
      });
    }
  }
  for (col in colsTable) {
    if (colsTable[col].length > 1) {
      colsTable[col].forEach(point => {
        if (!usedPoints.has(point)) {
          totalServers++;
          usedPoints.add(point);
        }
      })
    }
  }

  return totalServers;
}