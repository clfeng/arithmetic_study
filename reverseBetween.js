/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// var reverseBetween = function (head, m, n) {
//     if (m === n) {
//         return head;
//     }
    
//     let mPre = null;
//     let nNext = null;
//     let pre = null;
//     let cur = null;
//     let next = head;

//     while (n) {
//         n--;
//         m--;

//         if (m === 1) {
//             mPre = next;
//         }
//         if (n === 0) {
//             nNext = next.next;
//         }
//         next = next.next;

//     }

//     if (!mPre) {
//         cur = head;
//     } else {
//         cur = mPre.next;
//     }

//     pre = nNext;
    
//     while (cur !== nNext) {
//         next = cur.next;
//         cur.next = pre;
        
//         pre = cur;
//         cur = next;
//     }

//     if (mPre) {
//         mPre.next = pre;
//         return head;
//     }

//     return pre;
// };

let { createLink, printLink } = require('./app_util');

var reverseBetween = function (head, m, n) {
    if (m === n) {
        return head;
    }

    let mNode = null;
    let mPrevNode = null;
    let nNode = null;
    let nNextNode = null;

    let prev = null;
    let cur = head;
    let next = null;

    // 拿到第m位和第n位的节点
    while (n) {
        if (n === 1) {
            nNode = cur;
        }

        if (m === 1) {
            mPrevNode = prev;
            mNode = cur;
        }

        prev = cur;
        cur = cur.next;
        n--;
        m--;
    }

    nNextNode = nNode.next;


    // 开始做反转操作

    prev = null;
    cur = mNode;

    while (cur !== nNextNode) {
        next = cur.next;
        
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    
    mNode.next = nNextNode;

    if (mPrevNode) { // 当m 为 1 的时候，mPrevNode 为 null，反转后nNode节点变成了头节点
        mPrevNode.next = nNode;
    } else {
        head = nNode;
    }


    return head;
};

let head = createLink([1,2,3,4,5]);
head = reverseBetween(head, 2, 4);
printLink(head);
