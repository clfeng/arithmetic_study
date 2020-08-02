let { createLink, printLink, ListNode } = require('./app_util');
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    function BothwayListNode(val) { // 双向数据链表节点类
        this.val = val;
        this.next = null;
        this.prev = null;
    }

    let link1Len = 0;
    let link2Len = 0;
    let cur1 = l1;
    let cur2 = l2;

    // 明确下位数较长的链表
    while (cur1) {
        link1Len++;
        cur1 = cur1.next;
    }

    while (cur2) {
        link2Len++;
        cur2 = cur2.next;
    }

    cur1 = l1;
    cur2 = l2;

    let head = new BothwayListNode(0);
    let cur = head;

    // 简单的将相应的位置的数字加合，不做进位处理
    while (cur1 && cur2) {
        if (link1Len === link2Len) {

            cur.next = new BothwayListNode(cur1.val + cur2.val);
            cur.next.prev = cur;

            link1Len--;
            link2Len--;
            cur1 = cur1.next;
            cur2 = cur2.next;
            cur = cur.next;

        } else if (link1Len > link2Len) {

            cur.next = new BothwayListNode(cur1.val);
            cur.next.prev = cur;

            link1Len--;
            cur1 = cur1.next;
            cur = cur.next;

        } else { //link1Len < link2Len

            cur.next = new BothwayListNode(cur2.val);
            cur.next.prev = cur;

            link2Len--;
            cur2 = cur2.next;
            cur = cur.next;
        }
    }

    // 通过双向链表的特定，逆向遍历，处理位数的进位
    let decade = 0;
    while (cur) {
        let sum = decade + cur.val
        cur.val = sum % 10;
        decade = Math.floor(sum / 10);

        cur = cur.prev;
    }

    if (head.val) { // 头节点的val值被使用了，直接返回head
        return head;
    }

    // 头节点的val值为 0

    let ret = head.next;

    head.next = null;
    ret.prev = null;

    return ret;
};
/*

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
*/

let link1 = createLink([7, 2, 4, 3]);
let link2 = createLink([5, 6, 4]);

let ret = addTwoNumbers(link1, link2);
printLink(ret);