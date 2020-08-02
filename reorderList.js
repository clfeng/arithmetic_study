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
 * @return {void} Do not return anything, modify head in-place instead.
 */
// var reorderList = function(head) {
//     if (!head) {
//         return head;
//     }
//     let leftNode = head;
//     let rightNode = head.next;
//     let leftPos = 1;
//     let rightPos = 2;

//     // 整体分成两个链表 [0, leftPos - 1] 为左链表；leftNode 指向左链表的最后一个节点
//     // [leftPos, rightPos] 为右链表，rightNode 指向右链表的最后一个节点
//     while (rightNode) {
//         leftNode = leftNode.next;
//         leftPos++;

//         while (rightPos < leftPos * 2 && rightNode) {
//             rightNode = rightNode.next;
//             rightPos++;
//         }
//     }

//     let rightHead = leftNode.next;
//     leftNode.next = null; // 将左右链表断开

//     // 对右链表进行翻转操作
//     let prev = null;
//     let cur = rightHead;

//     while (cur) {
//         let next = cur.next;
//         cur.next = prev;
//         prev = cur;
//         cur = next;
//     }
//     rightHead = prev; // 完成右链表的翻转

//     // 方案一：
//     // let dummyHead = new ListNode('');
//     // let retNode = dummyHead;

//     // // 重新利用 leftNode 和rightNode 变量
//     // leftNode = head;
//     // rightNode = rightHead;

//     // while (leftNode && rightNode) {
//     //     retNode.next = leftNode;
//     //     retNode = retNode.next;
//     //     leftNode = leftNode.next;

//     //     retNode.next = rightNode;
//     //     retNode = retNode.next;
//     //     rightNode = rightNode.next;
//     // }

//     // if (leftNode) {
//     //     retNode.next = leftNode;
//     // } else if (rightNode) {
//     //     retNode.next = rightNode;
//     // }

//     // head = dummyHead.next;
//     // dummyHead.next = null;
//     // return head;

//     // 优化处理
//     let retNode = head;
//     // 重新利用 leftNode 和rightNode 变量
//     leftNode = head.next; // 第一个节点已经作为返回的头节点来用
//     rightNode = rightHead;

//     while (leftNode && rightNode) {
//         retNode.next = rightNode;
//         retNode = retNode.next;
//         rightNode = rightNode.next;

//         retNode.next = leftNode;
//         retNode = retNode.next;
//         leftNode = leftNode.next;
//     }

//     if (leftNode) {
//         retNode.next = leftNode;
//     } else if (rightNode) {
//         retNode.next = rightNode;
//     }

//     return head;
// };

var reorderList = function(head) {
    if (!head) {
        return head;
    }
    let leftNode = head;
    let rightNode = head.next;
    let leftPos = 1;
    let rightPos = 2;

    if (!rightNode || !rightNode.next) {
        return head; 
    }

    // 整体分成两个链表 [0, leftPos] 为左链表；leftNode 指向左链表的最后一个节点
    // [leftPos + 1, rightPos] 为右链表，rightNode 指向右链表的最后一个节点
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

    // 优化处理
    let retNode = head;
    // 重新利用 leftNode 和rightNode 变量
    leftNode = head.next; // 第一个节点已经作为返回的头节点来用
    rightNode = rightHead;

    while (leftNode && rightNode) {
        retNode.next = rightNode;
        retNode = retNode.next;
        rightNode = rightNode.next;

        retNode.next = leftNode;
        retNode = retNode.next;
        leftNode = leftNode.next;
    }

    if (leftNode) {
        retNode.next = leftNode;
    } else if (rightNode) {
        retNode.next = rightNode;
    }

    return head;
};
let head = createLink([1]);
head = reorderList(head);
printLink(head);