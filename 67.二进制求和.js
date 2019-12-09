/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    const len = Math.max(a.length, b.length);
    a = a.padStart(len, '0');
    b = b.padStart(len, '0');
    let num = 0;
    let arr = a.split("").map((v, i) => Number(v) + Number(b[i])).reduceRight((a, b, i) => {

        if ((num + b >= 2)) {
            a[i] = (num + b) % 2;
            num = 1;
            if (i == 0) {
                a = [1, ...a];
            }
        } else {
            a[i] = num + b;
            num = 0;
        }
        return a

    }, []);
    return arr.join("");
};


// @lc code=end

