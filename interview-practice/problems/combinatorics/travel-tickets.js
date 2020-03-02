/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const dp = new Array(days[days.length - 1] + 1);
  const daysSet = new Set(days);

  dp[0] = 0;

  for (let i = 1; i < dp.length; i++) {
    if (!daysSet.has(i)) {
      dp[i] = dp[i - 1];
      continue;
    }

    dp[i] = Math.min(
      dp[i - 1] + costs[0],
      (dp[i - 7] || 0) + costs[1],
      (dp[i - 30] || 0) + costs[2]
    );
  }

  return dp[dp.length - 1];
};

console.log('\n');
console.log(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]));