/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */



// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  let arr = [0];
  let temp = {
    '0': 0
  };
  for (let i = 1; i <= num; i++) {
    arr.push(count(i));
  }

  function count(n) {
    let t = n & (n - 1);
    if (temp[t] !== undefined) {
      temp[n] = temp[t] + 1
    }
    return temp[n];
  }
  return arr;
};
// @lc code=end

