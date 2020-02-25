/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  if (!nums || !nums.length || k < 0) return 0;

  // build dictionary with char count
  const numsDict = nums.reduce((memo, num) => {
    if (!memo[num]) memo[num] = 1;
    else memo[num]++;
    return memo;
  }, {});
  const pairsSet = new Set();

  // add to set as sorted pair to ensure no duplicates
  const serializeAndAddPair = (num1, num2) => {
    const serialized = [num1, num2].sort().join('_');
    pairsSet.add(serialized);
  };

  // add immediately if nums arent equal, else check char count > 1
  const verifyInDictAndAdd = (comp, num) => {
    if (comp !== num) serializeAndAddPair(num, comp);
    else if (numsDict[comp] > 1) serializeAndAddPair(num, comp);
  };

  // iterate and check dictionary for complement
  for (const num of nums) {
    const comp1 = (k * -1) + num;
    const comp2 = k + num;
    if (comp1 in numsDict) verifyInDictAndAdd(comp1, num);
    if (comp2 in numsDict) verifyInDictAndAdd(comp2, num);
  }

  return pairsSet.size;
};

console.log(findPairs(
  [3, 1, 4, 1, 5],
  2
));