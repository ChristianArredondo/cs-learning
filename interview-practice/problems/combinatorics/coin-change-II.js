/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  if (amount === 0) return 1;
  if (amount < 0) return 0;

  const checkSum = (runningSum, parent) => {
    if (runningSum === amount) return 1;
    if (runningSum > amount) return 0;
    return coins.reduce((totalWays, coin) => {
      if (coin >= parent) return checkSum(runningSum + coin, coin) + totalWays;
      return totalWays;
    }, 0);
  };

  return coins.reduce((totalWays, coin) => checkSum(coin, coin) + totalWays, 0);
};

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var changeDP = function (amount, coins) {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  coins = coins.sort((a, b) => a - b);
  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    for (let j = coin; j <= amount; j++) {
      dp[j] += dp[j - coin];
    }
  }
  return dp[amount];
};

console.log('\n');
console.log(changeDP(5, [1, 2, 5]));
console.log(changeDP(500, [3, 5, 7, 8]));
// console.log(change(500, [3, 5, 7, 8, 9, 10, 11]));