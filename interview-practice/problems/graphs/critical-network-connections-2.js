/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function (n, connections) {
  const bridges = [];
  const graph = {};
  const visited = new Set();
  const ids = [];
  const lows = [];
  let id = -1;

  // build graph table
  for (const [from, to] of connections) {
    if (!graph[from]) graph[from] = [];
    if (!graph[to]) graph[to] = [];
    graph[from].push(to);
    graph[to].push(from);
  }

  const dfs = (node, prev) => {
    const currId = ++id;
    ids[node] = currId;
    lows[node] = currId;
    visited.add(node);

    for (const to of graph[node]) {
      if (to === prev) continue;
      if (!visited.has(to)) {
        dfs(to, node);
        lows[node] = Math.min(lows[node], lows[to]);
        if (ids[node] < lows[to]) {
          bridges.push([node, to]);
        }
      } else {
        lows[node] = Math.min(lows[node], ids[to]);
      }
    }
  };

  dfs(0, -1);
  return bridges;
};