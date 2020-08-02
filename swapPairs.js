

let { createLink, printLink, ListNode } = require('./app_util');
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let dummyHead = new ListNode('');
    dummyHead.next = head;
    let p = dummyHead;


    while (p.next && p.next.next) {
        let node1 = p.next;
        let node2 = node1.next;

        p.next = node2;
        node1.next = node2.next;
        node2.next = node1;

        p = node1;
    }

    let retHead = dummyHead.next;
    dummyHead.next = null;
    return retHead;
};

let head = createLink([1, 2, 3, 4]);
head = swapPairs(head);
printLink(head);
