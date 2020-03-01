/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {

  if (!nums || !nums.length) return null;
  if (nums.length === 1) return nums[0];

  while (true) {
    const mid = Math.floor(nums.length / 2);
    const left = nums.slice(0, mid);
    const right = nums.slice(mid);

    if (left.length === 1 && right.length === 1) {
      return left[0] < right[0] ? left[0] : right[0];
    };

    const firstLeft = left[0];
    const lastLeft = left[left.length - 1];
    const firstRight = right[0];
    const lastRight = right[right.length - 1];

    if (firstLeft <= lastLeft && firstRight <= lastRight) {
      return firstLeft < firstRight ? firstLeft : firstRight;
    }

    if (firstLeft > lastLeft) {
      nums = left;
      continue;
    }

    if (firstRight > lastRight) {
      nums = right;
      continue;
    }

  }
};

console.log('\n');
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([4, 5, 6, 0, 1, 2]));
console.log(findMin([4, 0, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0]));