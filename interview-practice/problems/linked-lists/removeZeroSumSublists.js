/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function (head) {
  let list = head;
  while (true) {
    const [mHead, sum] = checkZeroSums(list);
    if (mHead) {
      list = mHead;
      continue;
    }
    if (sum === 0) {
      return null;
    }
    break;
  }

  let prev = list;
  let next = prev.next;
  while (next) {
    const [mNode, sum] = checkZeroSums(next);
    if (mNode) {
      prev.next = mNode;
      next = mNode;
      continue;
    }
    if (sum === 0) {
      prev.next = null;
      break;
    }
    prev = next;
    next = next.next;
  }

  return list;
};

function checkZeroSums(node) {
  let total = node.val;
  while (node.next) {
    if (total === 0) {
      return [node.next, null];
    }
    total += node.next.val;
    node = node.next;
  }
  return [null, total];
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const run = listArr => {
  let head = new ListNode(listArr.shift());
  let pointer = head;
  while (listArr.length) {
    pointer.next = new ListNode(listArr.shift());
    pointer = pointer.next;
  }
  const withZerosRemoved = removeZeroSumSublists(head);
  let zHead = withZerosRemoved;
  const list = [];
  while (zHead) {
    list.push(zHead.val);
    zHead = zHead.next;
  }
};

run([1, 2, -3, 3, 1]);
run([1, 2, 3, -3, 4]);
run([1, 2, 3, -3, -2]);