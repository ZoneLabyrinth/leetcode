/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  //DFS
  // if (!root) return []
  // levelOrder(root)

  // function insertOrder(root, level, quene) {
  //   if (!root) return []
  //   if (quene.length < level + 1) {
  //     quene.push([])
  //   }
  //   quene[level].push(root);
  //   insertOrder(root.left, level+1, quene);
  //   insertOrder(root.right, level+1, quene)
  // }


  //BFS
  let quene = []
  insertOrder(root, 0, quene)
  return quene

  if(!root) return []
  let result = [];
  let queue = [root];
  let level = 0;

  while(queue.length) {
    result[level] = [];
    let len = queue.length;
    while(len--) {
      let node = queue.shift();
      result[level].push(node.val);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    level++;

  }
  return result;

};
// @lc code=end

