let { createLink, printLink, ListNode } = require('./app_util');
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

var deleteNode = function(node) {
    let nextNode = node.next;

    node.val = nextNode.val;
    node.next = nextNode.next;
    nextNode.next = null;
};
let head = createLink([4,5,1,9]);
head = deleteNode(head.next);
printLink(head);