/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity;
  this.table = {};
  this.size = 0;
  this.turn = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  this.turn++;
  const turn = this.turn;
  if (this.table[key]) {
    this.table[key].counter++;
    this.table[key].turn = turn;
    return this.table[key].val;
  } else {
    return -1;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  this.turn++;
  const turn = this.turn;
  if (!this.capacity) return;
  if (!this.table[key]) {
    if (this.size < this.capacity) {
      this.table[key] = { val: value, counter: 1, turn };
      this.size++;
    }
    else {
      this._removeLFU();
      this.table[key] = { val: value, counter: 1, turn };
    }
  } else {
    this.table[key].val = value;
    this.table[key].counter++;
    this.table[key].turn = turn;
  }
};

LFUCache.prototype._removeLFU = function () {
  const { key } = Object.keys(this.table).reduce((memo, key) => {
    const node = this.table[key];
    const assign = () => {
      memo.key = key;
      memo.counter = node.counter;
      memo.turn = node.turn;
    };

    if (!memo.key) assign();
    else if (node.counter < memo.counter) assign();
    else if (node.counter === memo.counter && node.turn < memo.turn) assign();

    return memo;
  }, { key: null, counter: Infinity, turn: null });

  delete this.table[key];
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */