/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    //分治,把n划分为一半 n/2，然后相乘。
    if (n === 0 || n === 1) {
        return n ? x : 1
    }
    let r = Math.floor(n / 2);
    let y = n % 2 ? x : 1

    return n > 0 ? myPow(x * x, r) * y : myPow(1/(x*x), -r) * y
};
// @lc code=end

