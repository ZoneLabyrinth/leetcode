/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) { 
    let max = nums[0];
    let val = 0;
    for (let i = 0; i < nums.length; i++) {
      val = val + nums[i];
      max = val > max ? val : max;
      val = 0 > val ? 0 : val;
    }
    return max;
};

