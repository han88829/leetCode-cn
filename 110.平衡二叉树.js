/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function (root) {
    let res = true;
    function getLen(root) {
        if (!root) return 0;
        if (!root.left && !root.right) return 1;
        const l = 1 + getLen(root.left);
        const r = 1 + getLen(root.right);
        if (Math.abs(l - r) > 1) {
            res = false;
        }
        return Math.max(l, r)
    }
    getLen(root);
    return res
};
// @lc code=end

