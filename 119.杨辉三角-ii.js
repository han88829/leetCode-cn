/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let res = [1];
    for (let i = 1; i <= rowIndex; i++) {
        let arr = [], j = 0;
        while (j <= i) {
            arr[j] = (res[j] || 0) + (res[j - 1] || 0);
            j++;
        }
        res = arr;
    }
    return res
};
// @lc code=end

