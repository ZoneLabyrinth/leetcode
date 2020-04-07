/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  if(n<3) return []
  let arr = [[]];
  let vertical = [];
  let left = [];
  let right = [];
  let result = []
    for (let i = 0; i < n; i++) {
      
      for (let j = 0; j < n; j++) {
        if (vertical.includes(j) || left.includes(i + j) || right.includes(j - i)) {
          continue;
        }
        if (!arr[i][j]) {
          arr[i][j] = 'Q'
          temp++;
          i++;
          temp.push(j);
          left.push(i + j);
          right.push(j - i);
        }
      }
  }
  
  for(let len = 0;len< result.length;len++){
    
  }

};
// @lc code=end

