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
 * @param {ListNode[]} lists
 * @return {ListNode}
 * 
 * O((k x n) + (v x logv))
 */
var mergeKLists = function (lists) {
  const counts = {};

  // build hashtable of val counts
  // O(k x n)
  // where k = total lists
  // where n = total nodes per list
  for (list of lists) {
    let curr = list;
    while (curr) {
      const val = curr.val;
      if (!counts[val]) counts[val] = 1;
      else counts[val]++;
      curr = curr.next;
    }
  }

  // get vals in ascending order
  // O(v x logv)
  // where v = all unique node vals
  const sortedKeys = Object.keys(counts).sort((a, b) => a - b);

  // build single sorted list
  // O(k x n)
  // where k = total lists
  // where n = total nodes per list
  let kHead = null;
  let kCurr = null;
  for (const i of sortedKeys) {
    while (counts[i]) {
      const node = new ListNode(i);
      if (!kHead) {
        kHead = node;
        kCurr = node;
      } else {
        kCurr.next = node;
        kCurr = kCurr.next;
      }
      counts[i]--;
    }
  }

  return kHead;
};