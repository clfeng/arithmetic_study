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
 * @return {boolean}
 */
// var isPalindrome = function(head) {
//     let straight = '';
//     let reversed = '';
//     while (head) {
//         straight += head.val;
//         reversed = head.val + reversed;
//         head = head.next;
//     };
//     return straight === reversed;
// };
var isPalindrome = function(head) {
    if (!head) {
        return head;
    }
    let leftNode = head;
    let rightNode = head.next;
    let leftPos = 1;
    let rightPos = 2;

    if (!rightNode) {
        return true;
    }

    // 整体分成两个链表 [0, leftPos - 1] 为左链表；leftNode 指向左链表的最后一个节点
    // [leftPos, rightPos] 为右链表，rightNode 指向右链表的最后一个节点
    while (rightNode.next) {
        leftNode = leftNode.next;
        leftPos++;

        while (rightPos < leftPos * 2 && rightNode.next) {
            rightNode = rightNode.next;
            rightPos++;
        }
    }

    let rightHead = leftNode.next;
    leftNode.next = null; // 将左右链表断开

    // 对右链表进行翻转操作
    let prev = null;
    let cur = rightHead;

    while (cur) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    rightHead = prev; // 完成右链表的翻转

    leftNode = head;
    rightNode = rightHead;

    while (leftNode && rightNode) {
        if (leftNode.val !== rightNode.val) {
            return false;
        }

        leftNode = leftNode.next;
        rightNode = rightNode.next;
    }

    if (leftNode || rightNode) {
        return false;
    }

    return true;
};
let head = createLink([1]);
let ret = isPalindrome(head);
console.log(ret);