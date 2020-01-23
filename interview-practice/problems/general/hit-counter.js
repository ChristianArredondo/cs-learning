
class HitCounter {
  constructor() {
    this.hits = [];
  }

  hit(index) {
    this.hits[index] = 1;
  }

  getHits(index) {
    const rangeStart = Math.max(1, index - 300 + 1);
    const rangeEnd = this.hits.slice(rangeStart, index + 1);

    const totalHitsInRange = rangeEnd.reduce((memo, int) => {
      memo += int || 0;
      return memo;
    }, 0);

    console.log(totalHitsInRange);
  }
}

const hitCounter = new HitCounter();

console.log('\n');
hitCounter.hit(1);
hitCounter.hit(2);
hitCounter.hit(3);
hitCounter.getHits(1);
hitCounter.getHits(4);
hitCounter.hit(300);
hitCounter.getHits(300);
hitCounter.getHits(301);