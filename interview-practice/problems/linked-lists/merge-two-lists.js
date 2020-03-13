function ListNode(val) {
  this.val = val;
  this.next = null;
}

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
var mergeTwoLists = function (l1, l2) {

  if (!l1 && !l2) return null;
  if (!l1) return l2;
  if (!l2) return l1;

  let newHead;
  if (l1.val <= l2.val) {
    newHead = l1;
    l1 = l1.next;
  } else {
    newHead = l2;
    l2 = l2.next;
  }

  let curr = newHead;
  while (l1 || l2) {
    if (!l1 || (l2 && l2.val < l1.val)) {
      curr.next = l2;
      curr = curr.next;
      l2 = l2.next;
    } else if (!l2 || (l1 && l1.val <= l2.val)) {
      curr.next = l1;
      curr = curr.next;
      l1 = l1.next;
    }
  }

  return newHead;
};