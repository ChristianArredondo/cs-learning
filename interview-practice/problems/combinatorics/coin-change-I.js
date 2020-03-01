
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  coins.sort((a, b) => a - b);

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log('\n');
console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([3, 7, 405, 436], 8839));