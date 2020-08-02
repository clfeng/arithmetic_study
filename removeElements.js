

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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummyHead = new ListNode('');
    dummyHead.next = head;

    let cur = dummyHead;

    while (cur.next) {
        if (cur.next.val == val) {
            let delNode = cur.next;
            cur.next = delNode.next;
            delNode.next = null;
        } else {
            cur = cur.next;
        }
    }

    if (!dummyHead.next) {
        return null; 
    }

    let retHead = dummyHead.next;
    dummyHead.next = null;
    return retHead;
};

let head = createLink([1,1]);
head = removeElements(head, 1);
printLink(head);
