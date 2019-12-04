/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    const str = strs.sort((a, b) => a.length - b.length)[0] || "";
    strs.splice(0, 1);
    let res = "";
    for (let index = str.length; index >= 0; index--) {
        if (strs.every(v => v.substr(0, index) === str.substr(0, index))) {
            res = str.substr(0, index);
            break
        }
    }

    return res;

};
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// @lc code=end

