/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //已经有序，可不用map
    let map = {}
    for(let i = 0;i<nums.length;i++){
        if(map[nums[i]]){
            nums.splice(i,1)
            i--;
        }else{
            map[nums[i]] = 1
        }
    }
    return nums.length
};


