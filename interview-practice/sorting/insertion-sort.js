
const insertionSort = nums => {

  let sortedList = [];

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    if (!sortedList.length) {
      sortedList[0] = currNum;
      continue;
    }

    if (currNum <= sortedList[0]) {
      sortedList.unshift(currNum);
      continue;
    }

    if (currNum >= sortedList[sortedList.length - 1]) {
      sortedList.push(currNum);
      continue;
    }

    for (let j = 0; j < sortedList.length; j++) {
      if (currNum <= sortedList[j]) {
        sortedList.splice(j, 0, currNum);
        break;
      }
    }
  }

  return sortedList;
};
const insertionSortInPlace = nums => {

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    if (currNum < nums[0]) {
      nums.unshift(nums.splice(i, 1)[0]);
    } else if (currNum < nums[i - 1]) {
      for (let j = 0; j < i; j++) {
        if (currNum < nums[j]) {
          nums.splice(j, 0, nums.splice(i, 1)[0]);
          break;
        }
      }
    }
  }

  return nums;
};

console.log('\n');
console.log(insertionSortInPlace([3, 1, 5, 6, -1, 2, 9, 2]));