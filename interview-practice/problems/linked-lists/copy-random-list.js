function ListNode(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
};

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;

  const originalNodesWithIndex = [];
  let index = 0;
  let curr = head;
  while (curr) {
    originalNodesWithIndex.push({ node: curr, index });
    index++;
    curr = curr.next;
  }

  const nodeIndexToRandomIndexTable = {};
  let currIndex = 0;
  curr = head;
  while (curr) {
    const maybeRef = originalNodesWithIndex.find(({ node }) => node === curr.random);
    if (maybeRef) {
      const { index: randIndex } = maybeRef;
      nodeIndexToRandomIndexTable[currIndex] = randIndex;
    }
    currIndex++;
    curr = curr.next;
  }


  const cloneTable = {};
  const cloneNode = (node, index) => {
    if (!node) return null;
    const nodeCopy = new ListNode(
      node.val,
      cloneNode(node.next, index + 1),
      null
    );
    cloneTable[index] = nodeCopy;
    return nodeCopy;
  };

  const deepHeadCopy = cloneNode(head, 0);

  let currCopyRand = deepHeadCopy;
  let currIndexRan = 0;
  while (currCopyRand) {
    if (typeof nodeIndexToRandomIndexTable[currIndexRan] === 'number') {
      currCopyRand.random = cloneTable[nodeIndexToRandomIndexTable[currIndexRan]];
    }
    currIndexRan++;
    currCopyRand = currCopyRand.next;
  }

  return deepHeadCopy;
};
