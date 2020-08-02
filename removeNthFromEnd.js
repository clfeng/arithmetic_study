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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (n === 0) {
        return head;
    }

    if (!head) {
        return head;
    }
    
    let end = head;
    let size = 2; // 窗口的大小

    // start 和 end 形成一个size = n + 1 大小的窗口
    while (size < n + 1 && end) {
        end = end.next;
        size++;
    }

   
    // 无法形成 size = n + 1大小的窗口则直接返回head
    if (size < n + 1) {
        return head;
    }

    let dummyHead = new ListNode('');
    dummyHead.next = head;
    let start = dummyHead;

    // 保持窗口大小，一步步往后移动，一直到end指向链表的最后一个节点
    while (end.next) {
        start = start.next;
        end = end.next;
    }

    // 移除节点
    let delNode = start.next;
    start.next = delNode.next;
    delNode.next = null;

    let retHead = dummyHead.next;
    dummyHead.next = null;
    return retHead;
};
let head = createLink([1, 2, 3, 4, 5]);
head = removeNthFromEnd (head, 2);
printLink(head);