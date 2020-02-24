/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.table = {};
  this.tableSize = 0;
  this.turn = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  this.turn++;
  if (!this.table[key]) return -1;
  this.table[key][1] = this.turn;
  return this.table[key][0];
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  this.turn++;

  if (key in this.table) {
    this.table[key] = [value, this.turn];
    return;
  }

  if (this.tableSize < this.capacity) {
    this.table[key] = [value, this.turn];
    this.tableSize++;
    return;
  }

  const { key: keyToRemove } = Object.keys(this.table).reduce((memo, localKey) => {
    const [_, turn] = this.table[localKey];
    if (turn < memo.min) {
      memo.key = localKey;
      memo.min = turn;
    }
    return memo;
  }, { key: '', min: Infinity });

  delete this.table[keyToRemove];
  this.table[key] = [value, this.turn];
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */