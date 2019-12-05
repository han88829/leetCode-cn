/*
 * @lc app=leetcode.cn id=696 lang=javascript
 *
 * [696] 计数二进制子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
    // let res = 0;

    // function match(s) {
    //     let l = s[0];
    //     let isRepeat = true;

    //     for (let i = 1; i < s.length; i++) {
    //         if (isRepeat && s[i] === s[0]) {
    //             l += s[i];
    //         } else {
    //             isRepeat = false;
    //             break;
    //         }
    //     }

    //     const r = (l[0] ^ 1).toString().repeat(l.length);
    //     const str = l + r;
    //     if (s.substr(0, str.length) === str) {
    //         return str
    //     }

    //     return ""
    // }

    // for (let i = 0; i < (s.length - 1); i++) {
    //     const r = match(s.slice(i));
    //     r && ++res;
    // }
    // // console.log(res);
    // return res
    // 超时了朋友  86/90测试


    let last = res = 0, cur = 1;

    for (let i = 1; i < s.length; i++) {
        // 如果和上一个字符串相同cur+1
        if (s[i] == s[i - 1]) {
            cur++;
        } else {
            // 不同的话，cur的结果转给last
            last = cur;
            cur = 1;
        }

        // 如果last 的长度大于cur，则存在符合结果的子串
        if (last >= cur) {
            res++;
        }
    }

    return res
}; 