/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
    // 坑逼题目  根节点到叶子节点，如果叶子节点存在，则必须向叶子节点延伸
    // 这他么也叫最小深度
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    if (!root.left) return 1 + minDepth(root.right);
    if (!root.right) return 1 + minDepth(root.left);

    return Math.min(1 + minDepth(root.left), 1 + minDepth(root.right));
};
// @lc code=end

