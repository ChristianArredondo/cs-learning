/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (!head) return null;

  head = appendAndConnectChildren(head);
  let curr = head;
  while (curr.next) {
    curr.next = appendAndConnectChildren(curr.next);
    curr = curr.next;
  }

  return head;
};

function appendAndConnectChildren(node) {
  if (!node) return null;
  if (!node.child) return node;

  const refToInitialNext = node.next;
  node.next = (appendAndConnectChildren(node.child));
  node.next.prev = node;
  node.child = null;
  let curr = node;
  while (curr.next) curr = curr.next;

  // attach prev and next
  curr.next = refToInitialNext;
  if (refToInitialNext) {
    refToInitialNext.prev = curr;
  }

  return node;
}