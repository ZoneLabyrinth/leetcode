/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = []
  recursive(0, 0, n, "");
  function recursive(l, r, n, result) {
    if (l === n && r === n) {
      return res.push(result)
    }

    if (l < n) {
      recursive(l + 1, r, n, result + '(');
    }
    if (r < l) {
      recursive(l, r + 1, n, result + ')')
    }

  }
  return res;

};
// @lc code=end

