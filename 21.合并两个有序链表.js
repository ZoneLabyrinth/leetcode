/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let arr =[]

    while(l1.val){
        arr.push(l1.val)
        l1.val = l1.next
    }
    while(l2.val){
        arr.push(l2.val)
        l2.val = l2.next
    }

    console.log(arr)
    
};



