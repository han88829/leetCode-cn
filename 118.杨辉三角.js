/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows == 0) return [];
    let res = [[1]];
    for (let i = 1; i < numRows; i++) {
        let arr = [], j = 0;
        while (j <= i) {
            arr[j] = (res[i - 1][j] || 0) + (res[i - 1][j - 1] || 0);
            j++;
        }
        res.push(arr);
    }
    return res

};
// @lc code=end

