let { createLink, printLink } = require('./app_util');
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
var reverseList = function(head) {
    let cur = head; // 正在改变指针的节点
    let prev = null;  // cur的前一个节点
    let next // cur的下一个节点

    while(cur) {
        next = cur.next;

        cur.next = prev;
        prev = cur;
        cur = next;
    }

    return head = prev;
};
let head = createLink([1, 2, 3, 4, 5]);
head = reverseList(head);

printLink(head);