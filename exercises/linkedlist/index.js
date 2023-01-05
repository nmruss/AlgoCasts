// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    //length -2
    if (!this.head) {
      return null;
    }

    //length -1
    if (!this.head.next) {
      this.head = null;
      return;
    }

    //length 0 or more
    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      //set previous.next value to null, cutting off the last node
      //else update the previous and node values
      previous = node;
      node = node.next;
    }
    //no next node
    previous.next = null;
    return;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(int) {
    if (this.size() < int) {
      return null;
    }

    let i = 0;
    let node = this.head;
    while (i < int) {
      node = node.next;
      i++;
    }

    return node;
  }
}

module.exports = { Node, LinkedList };
