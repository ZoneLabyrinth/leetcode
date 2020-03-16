/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  //双端队列
  let window = [], res = []
  for (let i = 0; i < nums.length; i++) {
    //window长度大于k时（i - k表示i对应的k项首项最小下标，若小于则表示长度为k+1)；
    if (i >= k && window[0] <= i - k) {
      window.shift();
    }
    //当window的最后一项比要进入window的值要小时，去掉小于的项
    while (window && nums[window[window.length - 1]] <= nums[i]) {
      window.pop();
    }
    //添加此项下标
    window.push(i);
    //首次返回，当初始值不足k时不做处理；
    if (i >= k - 1) {
      res.push(nums[window[0]])
    }
  }
  return res

};
// @lc code=end

