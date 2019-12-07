/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */

/*
*  读了n遍，没看懂啥意思，看网上题解才明白，我你妈，递归下去，读出来上一个数
*/
var countAndSay = function (n) {
    const obj = {
        1: "1",
        2: "11",
        3: "21",
        4: "1211",
        5: "111221"
    }
    if (n <= 5) return obj[n];
    let j = countAndSay(n - 1);
    let count = 1, num = j[0], str = "";
    for (let i = 1; i <= j.length; i++) {
        if (j[i] === num) {
            count++;
        } else {
            str += `${count}${num}`;
            count = 1;
            num = j[i];
        }
    }
    return str

};
// @lc code=end

