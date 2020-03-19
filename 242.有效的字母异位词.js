/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 1.使用map N  2.转数组sort排序
  //34/34 cases passed (112 ms)
  // Your runtime beats 46.71 % of javascript submissions
  // Your memory usage beats 84.5 % of javascript submissions (36.1 MB)
  // 先判断长度
  if (s.length !== t.length) return false;
  let map = {}
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]] += 1
    } else {
      map[s[i]] = 1
    }
  }
  //如果所有都匹配，则键值为0，否则至少为-1，
  for (let j = 0; j < t.length; j++) {
    if (map[t[j]]) {
      map[t[j]] -= 1;
    } else {
      return false
    }
  }
  return true
};
// @lc code=end

