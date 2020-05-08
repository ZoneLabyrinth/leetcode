/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = [1], min = [1];
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] >= 0) {
      max[i] = Math.max(nums[i - 1] * max[i - 1], nums[i - 1]);
      min[i] = Math.min(nums[i - 1] * min[i - 1], nums[i - 1]);
    } else {
      max[i] = Math.max(nums[i - 1] * min[i - 1], nums[i - 1]);
      min[i] = Math.min(nums[i - 1] * max[i - 1], nums[i - 1]);
    }
  }
  max.shift();
  return Math.max.apply(Array, max);

};
// @lc code=end

