/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root, min = null, max = null) {
  if (!root) return true
  if (min && min.val >= root.val) return false
  if (max && max.val <= root.val) return false
  return (isValidBST(root.left, min, root) && isValidBST(root.right, root, max))
};
// @lc code=end

