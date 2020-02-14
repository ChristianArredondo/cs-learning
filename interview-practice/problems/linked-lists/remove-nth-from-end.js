
const removeNthFromEnd = (head, n) => {
  const nodeTable = {};
  let size = 1;
  let curr = head;
  nodeTable[size] = curr;

  while (curr.next) {
    size++;
    curr = curr.next;
    nodeTable[size] = curr;
  }
  
  const indexToDelete = size - (n - 1);
  if (indexToDelete === 1) {
    return head.next;
  }

  if (indexToDelete === size) {
    nodeTable[indexToDelete - 1].next = null;
    return head;
  }

  nodeTable[indexToDelete - 1].next = nodeTable[indexToDelete + 1];
  return head;
}


function ListNode(val) {
    this.val = val;
    this.next = null;
}