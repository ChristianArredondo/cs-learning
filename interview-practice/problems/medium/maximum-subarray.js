// return the sum of the contiguous subarray
// the highest sum. [4,-1,2,1] has the largest sum = 6
function maxSubarraySum(arr) {
  let globalMax = -Infinity;
  let localMax = 0;

  for (let i = 0; i < arr.length; i++) {
    localMax = Math.max(arr[i], localMax + arr[i]);
    globalMax = Math.max(localMax, globalMax);
  }

  return globalMax;
}

console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
