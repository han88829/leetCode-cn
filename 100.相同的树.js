/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    let left = [p], right = [q];
    while (left.length > 0) {
        if (left.every((v, i) => (!v && !right[i]) || (v && right[i] && v.val === right[i].val))) {
            left = left.reduce((a, b) => {
                b && a.push(b.left);
                b && a.push(b.right);
                return a
            }, []);
            right = right.reduce((a, b) => {
                b && a.push(b.left);
                b && a.push(b.right);
                return a
            }, []);

            if (left.length !== right.length) {
                return false
            }

        } else {
            return false
        }
    }

    return true
};
// @lc code=end

