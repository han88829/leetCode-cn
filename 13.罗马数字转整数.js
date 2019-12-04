/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    const arr = s.split("");
    let res = 0;

    for (let i = (arr.length - 1); i >= 0; i--) {
        const arrF = arr.filter((v, index) => index < i && obj[v] < obj[arr[i]]);
        if (arrF.length > 0) {
            res += obj[arr[i]] - arrF.reduce((a, b) => a += obj[b], 0);
            i = i - arrF.length;
        } else {
            res += obj[arr[i]];
        }
    }

    return res

};

console.log(romanToInt("LVIII"));
// @lc code=end

