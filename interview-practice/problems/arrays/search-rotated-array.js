/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums || !nums.length) return -1;

  const searchArr = (lowIndex, highIndex) => {
    const middleIndex = Math.floor((highIndex + lowIndex) / 2);
    if (target === nums[lowIndex]) return lowIndex;
    if (target === nums[middleIndex]) return middleIndex;
    if (target === nums[middleIndex + 1]) return middleIndex + 1;
    if (target === nums[highIndex]) return highIndex;

    if ((highIndex - lowIndex) <= 3) return -1;

    const targetMightBeInRight = (target > nums[middleIndex + 1] && target < nums[highIndex]) ||
      (target > nums[highIndex] && nums[middleIndex + 1] > nums[highIndex] && target > nums[middleIndex + 1]) ||
      (target < nums[highIndex] && nums[middleIndex + 1] > nums[highIndex]);

    return targetMightBeInRight
      ? searchArr(middleIndex + 1, highIndex)
      : searchArr(lowIndex, middleIndex);
  };

  return searchArr(0, nums.length - 1);
};

console.log('\n');
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([4, 5, 6, 7, 0, 1, 2], 4));
console.log(search([2, 3, 4, 5, 6, 7, 8, 9, 1], 9));