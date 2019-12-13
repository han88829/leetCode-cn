/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    let res = false;

    function getSum(root, num) {
        if (!root) return;
        if (!root.left && !root.right) {
            if (sum === (num + root.val)) res = true;
            return
        };
        getSum(root.left, num + root.val);
        getSum(root.right, num + root.val);
    }
    getSum(root, 0);
    return res
};
// @lc code=end

