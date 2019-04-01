function ListNode (val) {
    this.val = val;
    this.next = null;
}

var reverseList = function (head) {
    let pre = null;
    let cur = head;
    let next = null;
    
    while(cur) {
        next = cur.next;

        cur.next = pre;
        pre = cur;
        cur = next;
    }

    return pre; 
}
