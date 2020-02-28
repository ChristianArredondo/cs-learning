/**
 * Initialize your data structure here.
 */
var Logger = function () {
  this.table = {};
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  if (this.table[message] === undefined) {
    this.table[message] = timestamp;
    return true;
  }

  const diff = timestamp - this.table[message];
  if (diff < 10) return false;

  this.table[message] = timestamp;
  return true;
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

const logger = new Logger();
// logging string "foo" at timestamp 1
console.log(logger.shouldPrintMessage(1, "foo")); // returns true;

// logging string "bar" at timestamp 2
console.log(logger.shouldPrintMessage(2, "bar")); // returns true;

// logging string "foo" at timestamp 3
console.log(logger.shouldPrintMessage(3, "foo")); // returns false;

// logging string "bar" at timestamp 8
console.log(logger.shouldPrintMessage(8, "bar")); // returns false;

// logging string "foo" at timestamp 10
console.log(logger.shouldPrintMessage(10, "foo")); // returns false;

// logging string "foo" at timestamp 11
console.log(logger.shouldPrintMessage(11, "foo")); // returns true;