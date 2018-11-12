'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }
  insertAtHead(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }
  find(value) {
    if (!this.head) {
      throw new Error('__ERROR__ The list is empty!');
    }
    if (this.head.value === value) {
      return this.head;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        return currentNode.next;
      }

      currentNode = currentNode.next;
    }
    return null;
  }
  remove(offset) {
    const counter = offset;
    let currentNode = this.head;

    if (!this.head) {
      throw new Error('__ERROR__ list is empty!');
    }
    if (!currentNode.next) {
      return undefined;
    }
    if (counter === 0) {
      currentNode.next = currentNode.next.next;
      return currentNode.next;
    }
    currentNode = currentNode.next;
    this.remove(counter - 1);
    return undefined;
  }
};
