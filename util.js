function genOrderArr (n) {
    let arr = [];
    
    for (let i = 0; i < n; i++) {
        arr.push(i);
    }

    return arr;
}

function ListNode (val) {
    this.val = val;
    this.next = null;
}

function  createLink (arr) {
    let head = new ListNode(arr[0]);
    let cur = head;

    for (let i = 1; i < arr.length; i++) {
        cur.next = new ListNode(arr[i]);
        cur = cur.next;
    }

    return head;
}

function printLink (head) {
    let arr = [];
    while(head) {
        arr.push(head.val);
        head = head.next;
    }
    console.log(arr);
}