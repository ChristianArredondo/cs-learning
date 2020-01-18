/**
 * Merge two sorted linked lists and return as new list.
 * The new list should maintain order.
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function mergeSortedLists(l1, l2) {
  let l3 = null;
  if (l1.val < l2.val) {
    l3 = new ListNode(l1.val);
    l1 = l1.next;
  } else {
    l3 = new ListNode(l2.val);
    l2 = l2.next;
  }
  const l3Ref = l3;

  while (l1 || l2) {
    if (!l2 || l1.val < l2.val) {
      l3.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      l3.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    l3 = l3.next;
  }

  l3.next = null;
  return l3Ref;
}

const l1 = new ListNode(2);
l1.next = new ListNode(5);
l1.next.next = new ListNode(7);
const l2 = new ListNode(0);
l2.next = new ListNode(3);
console.log(mergeSortedLists(l1, l2));