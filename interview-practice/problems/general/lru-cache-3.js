class ListNode {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new ListNode();
    this.tail = new ListNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  insertHead = node => {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  };

  moveToHead = node => {
    this.removeNode(node);
    this.insertHead(node);
  };

  removeTail = () => {
    const tail = this.tail.prev;
    this.removeNode(tail);
    return tail.key;
  };

  removeNode = node => {
    const next = node.next;
    const prev = node.prev;

    prev.next = next;
    next.prev = prev;
  };
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.dll = new DoublyLinkedList();
  this.table = {};
};

/** 
 * 
 * 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.table[key];
  if (!node) return -1;
  this.dll.moveToHead(node);
  return node.val;
};

/**
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.table[key]) {
    const node = this.table[key];
    node.val = value;
    this.dll.moveToHead(node);
  } else {
    const newNode = new ListNode(key, value);
    if (this.size < this.capacity) {
      this.dll.insertHead(newNode);
      this.size++;
      this.table[key] = newNode;
    } else {
      this.dll.insertHead(newNode);
      this.table[key] = newNode;
      const tailKey = this.dll.removeTail();
      delete this.table[tailKey];
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */