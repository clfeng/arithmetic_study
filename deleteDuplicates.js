

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
var deleteDuplicates = function(head) {
    if (!head) {
        return null;
    }

    let map = new Map();
    let dummyHead = new ListNode('');
    dummyHead.next = head;

    let cur = head;

    // 对所有的节点进行统计，方便判断是否有重复
    while (cur) {
        if (map.has(cur.val)) {
            let count = map.get(cur.val);
            count++;
            map.set(cur.val, count);
        } else {
            map.set(cur.val, 1);
        }

        cur = cur.next;
    }

    // 进行删除重复元素操作
    cur = dummyHead;

    while (cur.next) {
        if (map.get(cur.next.val) > 1) {
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

let head = createLink([1, 1, 1, 2, 3]);
head = deleteDuplicates(head);
printLink(head);
