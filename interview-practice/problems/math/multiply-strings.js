var multiply = function (num1, num2) {
  const totalSize = num1.length + num2.length;
  const nums = Array.from({ length: totalSize }).fill(0);
  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      const num1Val = num1[i];
      const num2Val = num2[j];
      const arrIndex = totalSize - 1 - (num1.length - 1 - i) - (num2.length - 1 - j);
      const product = num1Val * num2Val;
      nums[arrIndex] += product;
      if (nums[arrIndex] > 9) {
        nums[arrIndex - 1] += Math.floor(nums[arrIndex] / 10);
        nums[arrIndex] = nums[arrIndex] % 10;
      }
    }
  }

  while (nums[0] === 0 && nums.length > 1) {
    nums.shift();
  }

  return nums.join('');
};

const run = (s1, s2) => {
  const product = multiply(s1, s2);
  console.log(`${s1} * ${s2} = ${product}`);
};

run('2', '3');
run('1', '1');
run('99', '1');
run('123456789', '987654321');
run('123', '456');