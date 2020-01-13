
class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value,
      next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  };

  prepend(value) {
    const newNode = {
      value,
      next: this.head
    };
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(insertIndex, value) {
    if (insertIndex > this.length - 1) {
      throw new Error('Index out of range of list');
    }

    if (insertIndex === 0) {
      this.prepend(value);
      return this;
    }

    if (insertIndex === this.length - 1) {
      this.append(value);
      return this;
    }

    const nodeBeforeInsert = this._getNodeAtIndex(insertIndex - 1);
    const newNode = {
      value,
      next: nodeBeforeInsert.next
    };
    nodeBeforeInsert.next = newNode;
    this.length++;
    return this;
  }

  delete(deleteIndex) {
    if (deleteIndex > this.length - 1) {
      throw new Error('Index out of range');
    }

    if (deleteIndex === 0) {
      this.head = this.head.next;
      this.length--;
      return this;
    }

    const nodeBeforeDelete = this._getNodeAtIndex(deleteIndex - 1);
    const nodeToDelete = nodeBeforeDelete.next;
    const nodeAfterDelete = nodeToDelete.next;
    nodeBeforeDelete.next = nodeAfterDelete;

    this.length--;
    return this;
  }

  reverse() {
    const hashTable = {};
    let currNode = this.head;
    for (let i = 0; i < this.length; i++) {
      const newIndex = this.length - 1 - i;
      hashTable[newIndex] = currNode;
      currNode = currNode.next;
    }

    this.head = hashTable[0];
    currNode = this.head;
    for (let i = 0; i < this.length - 1; i++) {
      currNode.next = hashTable[i + 1];
      currNode = hashTable[i + 1];
    }
    currNode.next = null;
    this.tail = currNode;
    return this;
  }

  print() {
    let current = this.head;
    let string = '';
    while (current) {
      if (!string) {
        string += `${current.value}`;
      } else {
        string += ` --> ${current.value}`;
      }
      current = current.next;
    }
    console.log(`\nList: ${string}`, `\nLength: ${this.length}`);
    return this;
  }

  _getNodeAtIndex(index) {
    if (index === 0) {
      return this.head;
    }

    if (index === this.length - 1) {
      return this.tail;
    }

    let ref = this.head;
    let currentIndex = 0;
    while (currentIndex < index - 1) {
      ref = ref.next;
      currentIndex++;
    }

    return ref;
  }
}

const list = new LinkedList(10);
list
  .append(5)
  .append(16)
  .prepend(1)
  .append(100)
  .insert(1, 2)
  .print()
  .delete(1)
  .print()
  .reverse()
  .print()
  .reverse()
  .print();