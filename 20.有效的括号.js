/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 != 0) return false;
    if (!s) return true;
    const obj = {
        "(": ")",
        "[": "]",
        "{": "}",
    };
    // while (s.length) {
    //     var temp = s;
    //     s = s.replace('()', '');
    //     s = s.replace('[]', '');
    //     s = s.replace('{}', '');
    //     if (s == temp) return false
    // }
    // return true;
    const arr = [];
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            arr.push(obj[s[i]])
        } else if (s[i] === arr[arr.length - 1]) {
            arr.pop();
        }
    }

    return !arr.length

};

console.log(
    isValid("[({(())}[()])]"),
    isValid("(]"),
);
// @lc code=end

