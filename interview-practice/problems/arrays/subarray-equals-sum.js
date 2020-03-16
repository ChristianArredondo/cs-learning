/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const map = { 0: 1 };
  let totalSubarrays = 0;
  let sum = 0;
  for (const num of nums) {
    sum += num;
    totalSubarrays += map[sum - k] || 0;
    map[sum] = (map[sum] || 0) + 1;
  }

  return totalSubarrays;
};