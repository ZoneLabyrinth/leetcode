/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    //终止条件，为空返回
    if (!root) {
        return 0;
    }
    let count;
    //左右子数最大值
    count = Math.max(maxDepth(root.left), maxDepth(root.right));
    //返回值；
    return count + 1;
};
// @lc code=end

