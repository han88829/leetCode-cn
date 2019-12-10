/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // 动态规划思想
    // const arr = [0, 1, 2, 3];
    // for (let i = 4; i <= n; i++) {
    //     arr[i] = arr[i - 1] + arr[i - 2];
    // }
    // return arr[n]
    if (n <= 3) {
        return n
    }
    let a = 2, b = 3, i = 3;
    while (i < n) {
        const num = a + b;
        a = b;
        b = num;
        i++;
    }
    return b
};
// @lc code=end

