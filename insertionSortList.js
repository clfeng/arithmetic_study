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
var insertionSortList = function(head) {
    if (!head) {
        return head;
    }

    let dummyHead = new ListNode('');
    dummyHead.next = head;

    // 初始化出已排序链表和未排序链表
    let cur = head;
    let sortNode = head.next;
    cur.next = null;
    let sortNextNode = null;


    while (sortNode) {
        sortNextNode = sortNode.next;

        // 这里进行插入排序
        cur = dummyHead;

        while (cur.next) {
            if (cur.next.val >= sortNode.val) {
                sortNode.next = cur.next;
                cur.next = sortNode;

                // 完成插入排序之后，将sortNode 变量置空，为的是能识别循环了整个链表之后
                // 还没找到可插入的位置，这中情况应该直接插入到已排序链表的尾部
                sortNode = null;
                break;
            } else {
                cur = cur.next;
            }
        }

        if (sortNode) {
            cur.next = sortNode;
            sortNode.next = null;
        }

        // 插入排序结束，将需要排序的指针往后移动
        sortNode = sortNextNode;
    }

    let retHead = dummyHead.next;
    dummyHead.next = null;

    return retHead;
};

let head = createLink([4, 2, 1, 3]);
head = insertionSortList(head);
printLink(head);