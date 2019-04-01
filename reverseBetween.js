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
var reverseBetween = function (head, m, n) {
    if (m === n) {
        return head;
    }
    
    let mPre = null;
    let nNext = null;
    let pre = null;
    let cur = null;
    let next = head;

    while (n) {
        n--;
        m--;

        if (m === 1) {
            mPre = next;
        }
        if (n === 0) {
            nNext = next.next;
        }
        next = next.next;

    }

    if (!mPre) {
        cur = head;
    } else {
        cur = mPre.next;
    }

    pre = nNext;
    
    while (cur !== nNext) {
        next = cur.next;
        cur.next = pre;
        
        pre = cur;
        cur = next;
    }

    if (mPre) {
        mPre.next = pre;
        return head;
    }

    return pre;
};


let head = createLink([1,2,3,4,5]);
head = reverseBetween(head, 2, 4);
printLink(head);
