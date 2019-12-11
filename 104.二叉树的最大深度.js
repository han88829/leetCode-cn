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
    if (!root) return 0;
    let dep = 0;

    function getDep(data, dep) {
        if (!data.left && !data.right) return dep + 1;
        let left = data.left ? getDep(data.left, dep + 1) : dep + 1;
        let right = data.right ? getDep(data.right, dep + 1) : dep + 1;

        return Math.max(left, right)
    }

    dep = getDep(root, 0);
    return dep
};
// @lc code=end

