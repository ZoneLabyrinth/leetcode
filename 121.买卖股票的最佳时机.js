/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) return 0
  let max_profit = 0;
  let buy = prices[0];
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] < buy) {
      buy = prices[i + 1]
    } else {
      max_profit = Math.max(prices[i + 1] - buy, max_profit);
    }
  }
  return max_profit;
};
// @lc code=end

