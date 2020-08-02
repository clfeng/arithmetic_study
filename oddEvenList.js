let { createLink, printLink } = require('./app_util');
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (!head  || head && !head.next) {
        return head;
    }

    let odd = head;
    let cur = head.next;
    let next;

    while (cur && cur.next) {
        next = cur.next;

        cur.next = next.next;
        next.next = odd.next;
        odd.next = next;
        
        odd = odd.next;
        cur = cur.next;
    }

    return head;
};
