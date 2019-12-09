/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let i = digits.length - 1;
    while (i >= 0) {
        const num = digits[i];
        if (num === 9) {
            digits[i] = 0;
            i--;
            if (i < 0) {
                digits = [1].concat(digits);
            }
        } else {
            digits[i] = num + 1;
            i = -1;
        }
    }

    return digits
};
// @lc code=end

