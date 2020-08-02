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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head) {
        return head;
    }
    let linkLen = 1;
    let cur = head

    while (cur.next) {
        cur = cur.next;
        linkLen++;
    }

    // 链的长度小于等于 1，怎么翻转都一样，直接返回
    if (linkLen <= 1) {
        return head;
    }

    cur.next = head; // 将整条链，链接成环

    let step = linkLen - k % linkLen; // 从head 开始往后走多少步
    cur = head;
    while (step > 1) {
        cur = cur.next;
        step--;
    }

    head = cur.next;
    cur.next = null;
    return head;
};
// let head = createLink([1, 2, 3, 4, 5]);
// head = rotateRight(head, 2);
let head = createLink([0, 1, 2]);
head = rotateRight(head, 4);
printLink(head);