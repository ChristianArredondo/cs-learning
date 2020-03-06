/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function (weights, D) {
  const max = Math.max(...weights);
  const sum = weights.reduce((sum, weight) => sum + weight, 0);

  let left = max;
  let right = sum;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let days = 1;
    let totalWeight = 0;
    for (const weight of weights) {
      if (weight + totalWeight > mid) {
        days++;
        totalWeight = weight;
      } else {
        totalWeight += weight;
      }
    }
    if (days > D) left = mid + 1;
    else right = mid;
  }

  return left;
};

console.log('\n');
console.log(shipWithinDays([1, 2, 3, 1, 1], 4));
console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));