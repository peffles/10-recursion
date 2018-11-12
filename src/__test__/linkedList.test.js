'use strict';

const LinkedList = require('../lib/linkedList');

const newLinkedList = new LinkedList();
const emptyList = new LinkedList();

// Populate the linked list
for (let i = 0; i <= 5; i++) {
  newLinkedList.insertAtHead(`Value ${i}`);
}
// tests
describe('Testing linked list recursion', () => {
  describe('remove method', () => {
    test('Testing LL remove', () => {
      newLinkedList.remove(2);
      expect(newLinkedList.head.value).toEqual('Value 5');
      expect(newLinkedList.head.next.value).toEqual('Value 3');
      expect(newLinkedList.head.next.next.value).toEqual('Value 2');
      expect(newLinkedList.head.next.next.next.value).toEqual('Value 1');
    });
    test('Should throw an error if no list exists', (done) => {
      expect(() => emptyList.remove(2)).toThrow();
      done();
    });
  });
});
