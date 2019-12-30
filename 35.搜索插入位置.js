/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    return binarySearch(nums,0,nums.length-1,target)
};

var binarySearch = function(arr,start,end,target){
    if(start > end) return start

    let binary = Math.floor((start+end)/2);

    if(arr[binary] == target) return binary

    if(arr[binary]>target){
        return binarySearch(arr,start,binary -1 ,target)
    }else{
        return binarySearch(arr,binary + 1,end,target)
    }
}

