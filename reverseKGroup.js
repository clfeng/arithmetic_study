let { createLink, printLink, ListNode } = require('./app_util');
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (k <= 1) {
        return head;
    }

    let dummyHead = new ListNode('');
    dummyHead.next = head;

    let prevStart = dummyHead;
    let start = dummyHead.next;
    let end = start;
    let endNext = dummyHead;
    let size = 1;

    while (end) {

        // 1. 最外层 start 和 end 组成 size 为 k的窗口
        if (size === k) { // 每次组成 size 为 k 的窗口时，进行窗口范围内的链表的反转操作
            endNext = end.next;

            let prev = prevStart;
            let cur = start;

            // 窗口范围内的链表反转
            while (cur !== endNext) {
                let next = cur.next;

                cur.next = prev;
                prev = cur;
                cur = next;
            }

            prevStart.next = end;
            start.next = endNext;
            prevStart  = start;
            start = end = endNext;
            size = 1;
        } else {
            end = end.next;
            size++;
        }
    }

    let retHead = dummyHead.next;
    dummyHead.next = null;

    return retHead;
};

let head = createLink([1, 2, 3, 4, 5]);
head = reverseKGroup(head, 3);
printLink(head);