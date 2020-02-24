/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (!l1 && !l2) return null;
  if (!l2) return l1;
  if (!l1) return l2;

  let sumList = {};
  let carryOver = 0;
  const rootSumList = sumList;
  const initialSum = l1.val + l2.val;
  if (initialSum > 9) {
    sumList.val = initialSum - 10;
    sumList.next = null;
    carryOver = 1;
  } else {
    sumList.val = initialSum;
  }

  let l1Node = l1.next;
  let l2Node = l2.next;
  while (l1Node || l2Node) {
    if (!l2Node) {
      const sum = l1Node.val + carryOver;
      sumList.next = {
        val: sum > 9 ? sum - 10 : sum,
        next: null
      };
      carryOver = sum > 9 ? 1 : 0;
      sumList = sumList.next;
      l1Node = l1Node.next;
      continue;
    }

    if (!l1Node) {
      const sum = l2Node.val + carryOver;
      sumList.next = {
        val: sum > 9 ? sum - 10 : sum,
        next: null
      };
      carryOver = sum > 9 ? 1 : 0;
      sumList = sumList.next;
      l2Node = l2Node.next;
      continue;
    }

    const sum = l1Node.val + l2Node.val + carryOver;
    sumList.next = {
      val: sum > 9 ? sum - 10 : sum,
      next: null
    };
    carryOver = sum > 9 ? 1 : 0;
    sumList = sumList.next;
    l1Node = l1Node.next;
    l2Node = l2Node.next;
  }

  if (carryOver) {
    sumList.next = {
      val: carryOver,
      next: null
    };
  }

  return rootSumList;
};

const l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3
    }
  }
};
const l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4
    }
  }
};

console.log(addTwoNumbers(l1, l2));