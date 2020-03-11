/**
 * EDGE CASES
 *  - capacity of 1
 */


class ListNode {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.nodeTable = {};
  this.head = null;
  this.tail = null;
};

/** 
 * SCENARIOS
 *  - get head node
 *  - get tail node
 *  - head = tail
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const targetNode = this.nodeTable[key];

  if (!targetNode) return -1;

  if (targetNode === this.head) {
    return targetNode.val;
  } else if (targetNode === this.tail) {
    const secondToLast = targetNode.prev;
    // clear tail
    // update tail to secondToLast
    // remove prev from tail
    secondToLast.next = null;
    this.tail = secondToLast;

    // move tail to head
    targetNode.next = this.head;
    targetNode.prev = null;
    this.head.prev = targetNode;
    this.head = targetNode;
    return targetNode.val;
  } else {
    // remove targetNode from list
    targetNode.next.prev = targetNode.prev;
    targetNode.prev.next = targetNode.next;

    // set targetNode as head
    targetNode.next = this.head;
    targetNode.prev = null;
    this.head.prev = targetNode;
    this.head = targetNode;
    return targetNode.val;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const newNode = new ListNode(key, value);

  if (this.nodeTable[key]) {
    const currNode = this.nodeTable[key];
    if (this.size === 1) {
      this.head = newNode;
      this.tail = newNode;
    } else if (currNode === this.head) {
      const currHead = this.head;
      newNode.next = currHead.next;
      currHead.next.prev = newNode;
      this.head = newNode;
    } else if (currNode === this.tail) {
      const currHead = this.head;
      const secondToLast = this.tail.prev;
      secondToLast.next = null;
      this.tail = secondToLast;
      newNode.next = currHead;
      currHead.prev = newNode;
      this.head = newNode;
    } else {
      currNode.next.prev = currNode.prev;
      currNode.prev.next = currNode.next;
      const currHead = this.head;
      newNode.next = currHead;
      currHead.prev = newNode;
      this.head = newNode;
    }

    this.nodeTable[key] = newNode;
    return;
  }

  this.nodeTable[key] = newNode;
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    this.size++;
  } else if (this.size < this.capacity) {
    const currHead = this.head;
    newNode.next = currHead;
    currHead.prev = newNode;
    this.head = newNode;
    this.size++;
    if (currHead === this.tail) {
      this.tail.prev = newNode;
    }
  } else {
    const currHead = this.head;
    const currTail = this.tail;
    const tailKey = currTail.key;
    const secondToLast = currTail.prev;
    if (secondToLast) {
      // set new node as head
      newNode.next = currHead;
      currHead.prev = newNode;
      this.head = newNode;

      // remove tail from table
      // set secondToLast.next as null
      // set tail as secondToLaste
      delete this.nodeTable[tailKey];
      secondToLast.next = null;
      this.tail = secondToLast;
    } else {
      delete this.nodeTable[currHead.key];
      this.head = newNode;
      this.tail = newNode;
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4