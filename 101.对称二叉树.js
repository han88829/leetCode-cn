/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
    if (!root) return true;
    let arr = [root];
    while (arr.length > 0) {
        const len = arr.length - 1;
        if (arr.every(x => x === null)) return true;
        for (let i = 0; i < arr.length; i++) {
            if ((arr[i] === arr[len - i]) || (arr[i] && arr[len - i] && arr[i].val === arr[len - i].val)) { } else {
                return false
            }
        }
        arr = arr.reduce((a, b) => {
            b && a.push(b.left);
            b && a.push(b.right);
            return a
        }, []);

    }

    return arr.length <= 0
};
// @lc code=end

