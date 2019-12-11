/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
var levelOrderBottom = function (root) {
    // 打败了 5% mmb 重做
    // if (!root) return [];
    // let res = [];
    // let arr = [root];
    // while (arr.length > 0) {
    //     res.unshift(arr.map(v => v.val));
    //     arr = arr.reduce((a, b) => {
    //         b && b.left && a.push(b.left);
    //         b && b.right && a.push(b.right);
    //         return a
    //     }, []);
    // }
    // return res
    if (!root) return [];
    let res = [];
    function getDep(root, i) {
        if (res[i]) {
            res[i].push(root.val)
        } else {
            res[i] = [root.val];
        }

        if (!root.left && !root.right) return;
        if (root.left) getDep(root.left, i + 1);
        if (root.right) getDep(root.right, i + 1);
    }
    getDep(root, 0);
    return res.reverse();
};
// @lc code=end

