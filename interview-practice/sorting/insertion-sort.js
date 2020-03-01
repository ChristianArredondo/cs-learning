
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

console.log('\n');
console.log(insertionSort([3, 1, 5, 6, -1, 2, 9, 2]));