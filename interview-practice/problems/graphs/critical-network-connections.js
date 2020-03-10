/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function (n, connections) {
  let id = 0;
  const ids = new Array(n).fill(0);
  const lows = new Array(n).fill(0);
  const visited = new Set();
  const graphTable = {};
  const bridges = [];

  // build table of connections
  for (const [from, to] of connections) {
    if (!graphTable[from]) graphTable[from] = [];
    if (!graphTable[to]) graphTable[to] = [];
    graphTable[from].push(to);
    graphTable[to].push(from);
  }

  const dfs = (at, prev) => {
    id++;
    ids[at] = id;
    lows[at] = id;
    visited.add(at);

    // set min
    // compare to `to` in case bridge
    for (const to of graphTable[at]) {
      if (to === prev) continue;
      if (!visited.has(to)) {
        dfs(to, at);
        lows[at] = Math.min(lows[at], lows[to]);
        if (ids[at] < lows[to]) bridges.push([at, to]);
      } else {
        lows[at] = Math.min(lows[at], ids[to]);
      }
    }

  };

  dfs(0, -1);
  return bridges;
};

console.log('\n');
console.log(criticalConnections(4, [[0, 1], [1, 2], [2, 0], [1, 3]]));