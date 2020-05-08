/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let arr = []
  for (let i = triangle.length - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      arr[j] = Math.min(arr[j] ? arr[j] : 0, arr[j + 1] ? arr[j + 1] : 0) + triangle[i][j];
    }
  }
  return arr[0]
};
// @lc code=end

