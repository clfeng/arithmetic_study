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
 * @param {number} x
 * @return {ListNode}
 */
// var partition = function(head, x) {
//     let minLinkHead = new ListNode('');
//     let maxLinkHead = new ListNode('');
//     let curMinLinkHead = minLinkHead;
//     let curMaxLinkHead = maxLinkHead;
//     let curNode = head;

//     while(curNode) {
//         if (curNode.val < x) {
//             curMinLinkHead.next = curNode;
//             curMinLinkHead = curNode;
//         } else {
//             curMaxLinkHead.next = curNode;
//             curMaxLinkHead = curNode;
//         }

//         curNode = curNode.next;
//     }


//     curMinLinkHead.next = maxLinkHead.next;
//     maxLinkHead.next = null;
//     maxLinkHead = null;
    
//     let retHead = minLinkHead.next;
//     minLinkHead.next = null;
//     minLinkHead = null;

//     curMaxLinkHead.next = null;
//     curMaxLinkHead = null;
//     curMinLinkHead = null;

//     return retHead;
// };
var partition = function(head, x) {
    let prev = null;
    let cur = head;
    let next = null;

    let minPrev = null;
    let min = head;  // [0, min) 表示的是小于x的节点的范围 

    while (cur) {
        next = cur.next;

        if (cur.val < x) {
            if (cur == min) {
                prev = cur;
                cur = next;

                minPrev = min;
                min = min.next;
                continue;
            }

            prev.next = next;
            cur.next = min;
            if (minPrev) {
                minPrev.next = cur;
            } else {
                head = cur;
            }

            minPrev = cur;
            cur = next;
        } else {
            prev = cur;
            cur = next;
        }
    }

    return head;
};

let arr = [2, 1]
let head = createLink(arr);
head = partition(head, 2);
printLink(head);