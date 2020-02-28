/**
 * Initialize your data structure here.
 */
var HitCounter = function () {
  this.counts = [];
};

/**
 * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function (timestamp) {
  if (!this.counts[timestamp]) this.counts[timestamp] = 1;
  else this.counts[timestamp]++;
};

/**
 * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function (timestamp) {
  const startIndex = timestamp <= 300 ? 0 : timestamp - 300 + 1;
  return reduceValues(this.counts.slice(startIndex, timestamp + 1));
};

function reduceValues(arr) {
  return arr.reduce((sum, counter) => {
    if (counter >= 1) return sum + counter;
    return sum;
  }, 0);
}

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */