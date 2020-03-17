/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  //
  if (nums.length < 3) return []
  let result = []
  //直接sort负数排序错误
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    //排序后相等两值相邻，得到数组结果相同，去重
    if (i >= 1 && nums[i] === nums[i - 1]) {
      continue
    }
    let left = i + 1;
    let right = nums.length - 1;
    //类似迫敛，sum>0则过大，右边数减小，否则左边数增大。直到等于
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (sum === 0) {
        let temp = [nums[i], nums[left], nums[right]]
        result.push(temp);
        //排序后去重
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      }
    }
  }
  return result;
};
// @lc code=end

