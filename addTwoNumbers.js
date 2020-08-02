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
    let head = new ListNode('');
    let decade = 0; // 十位，记录两个链表对应节点的数值加和之后的十位上的数
    let cur = head;
    let cur1 = l1;
    let cur2 = l2;
    let sum = 0;


    while (cur1 || cur2) {
        sum = decade;
        if (cur1) {
            sum += cur1.val;
            cur1 = cur1.next;
        }

        if (cur2) {
            sum += cur2.val;
            cur2 = cur2.next;
        }
        
        cur.next = new ListNode(sum % 10);
        decade = Math.floor(sum / 10);
        cur = cur.next;
    }

    if (decade) {
        cur.next = new ListNode(decade);
    }

    let ret = head.next;
    head.next = null;

    return ret;
};
/*

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

let link1 = createLink([2, 4, 3]);
let link2 = createLink([5, 6, 4]);

let ret = addTwoNumbers(link1, link2);
printLink(ret);