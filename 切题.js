//翻转链表

function reverseList(head){
    let cur = head;
    let prev = null;
    while (cur){
        cur.next = prev;
        prev = cur;
        cur = cur.next;
    }
    return prev
}

// 链表交换响铃元素
function swapPairs(head) {
    // 链表listnode
    let result = new ListNode(0);
    let pre = result;
    pre.next = head;
    while (pre.next&& pre.next.next) {
        let a = pre.next;
        let b = a.next;
        pre.next = b;
        b.next = a;
        a.next = b.next;
        pre = a;
    }
    return result.next
}