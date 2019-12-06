/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const obj = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    };

    let arr = digits.split("").map(v => obj[v]);
    while (arr.length > 1) {
        let res = [];
        arr[0].forEach(v => {

            arr[1].forEach(x => {
                res.push(v + x)
            })

        });
        arr.splice(0, 2, res);
    }

    return arr[0] || []

};

// @lc code=end

