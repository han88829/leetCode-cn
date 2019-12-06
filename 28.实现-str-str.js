/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (!needle) return 0;
    let j = 0;
    let res = -1;
    const len = needle.length;

    for (let i = 0; (i < haystack.length || i < len) && j < len; i++)
        if (haystack[i] == needle[j]) {
            if (j === 0) res = i;
            j++;
        } else {
            if (res >= 0) i = res;
            j = 0;
            res = -1;
        }

    return j == len ? res : -1
    // 一堆限制、条件   垃圾写法


    // 偷鸡写法  同样太慢阵亡
    // if (!needle) return 0;
    // const arr = haystack.split(needle);
    // return arr.length > 1 ? arr[0].length : -1;


    // 其实就是要实现它   原生功能不纯效率更低
    // return haystack.indexOf(needle)
}
// @lc code=end

