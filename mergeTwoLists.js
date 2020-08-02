

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
var mergeTwoLists = function(l1, l2) {
    let dummyHead = new ListNode('');
    let node1 = l1;
    let node2 = l2;
    let cur = dummyHead;

    while (node1 && node2) {
        if (node1.val < node2.val) {
            cur.next = node1;
            node1 = node1.next;
        } else {
            cur.next = node2;
            node2 = node2.next;
        }

        cur = cur.next;
    }

    if (node1) {
        cur.next = node1;
    }

    if (node2) {
        cur.next = node2;
    }

    let retHead = dummyHead.next;

    dummyHead.next = null;
    return retHead;
};

let head1 = createLink([1, 2, 4]);
let head2 = createLink([1, 3, 4]);

let head = mergeTwoLists(head1, head2);
printLink(head);
