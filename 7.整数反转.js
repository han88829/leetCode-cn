/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const len = x.toString().length;
    if (len <= 1) return x;

    let res;
    if (x > 0) {
        res = Number(x.toString().split("").reverse().join(""))
    } else {
        res = -Number(Math.abs(x).toString().split("").reverse().join(""))
    }

    if (res > 2147483647 || res < -2147483648) {
        return 0;
    }
    return res;
}; 

