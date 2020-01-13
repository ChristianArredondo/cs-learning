
class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new QueueNode(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
      this.first.next = this.last;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    const first = this.first;
    this.first = this.first.next;
    this.length--;

    if (this.length === 0) {
      this.last = null;
    }

    return first;
  }

}

const queue = new Queue();
queue.enqueue('jimmy');
console.log(queue);
queue.enqueue('john');
console.log(queue);
queue.enqueue('jacob');
console.log(queue);
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);