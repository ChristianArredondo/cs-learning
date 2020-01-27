
const permute = nums => {
  if (!nums || !nums.length) return [];
  if (nums.length === 1) return [nums];
  if (nums.length === 2) return [[nums[0], nums[1]], [nums[1], nums[0]]];

  return nums.map((num, i) => {
    const rest = nums.slice(0, i).concat(nums.slice(i + 1));
    return permute(rest).map(arr => [num, ...arr]);
  }).reduce((memo, arr) => memo.concat(arr), []);
};

console.log(permute([1, 2, 3, 4]));