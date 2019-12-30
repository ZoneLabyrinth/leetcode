/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    var cur = head
    while(cur){
        if( cur.next !== null && cur.val == cur.next.val){
            cur.next = cur.next.next
        }else{
            cur = cur.next
        }
    }
    return head;

};

