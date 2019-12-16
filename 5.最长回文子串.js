/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    // 暴力解法 尝试两次全部超时
    // if (s.length <= 1) return s;
    // let len = s.length, res = s[0];
    // for (let i = 1; i < len; i++) {
    //     for (let j = 0; j < i; j++) {
    //         const str = s.slice(j, i + 1);
    //         let isTrue = true;
    //         for (let index = 0; index < str.length; index++) {
    //             if (str[index] != str[str.length - index - 1]) {
    //                 isTrue = false;
    //             }
    //         }
    //         if (isTrue && str.length > res.length) res = str;
    //     }
    // }
    // return res

    // 动态规划
    // 每一次的结果都存储，如果当前是回文则返回true
    // dp[i+1][j-1]是当前循环的子串，如果子串是回文并且当前首尾相同则也是回文
    // if (s.length < 2) return s;
    // let len = s.length, res = "";
    // let dp = Array.from(new Array(len), () => new Array(len).fill(0));

    // for (let i = len - 1; i >= 0; i--) {
    //     for (let j = i; j < len; j++) {
    //         dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1]);
    //         if (dp[i][j] && j - i + 1 > res.length) res = s.substring(i, j + 1);
    //     }
    // }

    // return res



    // 中心扩展法
    // 效率最高，内存最小
    // 从中心向两边扩展，
    let len = s.length, start = 0, end = 0;

    const fn = (l, r) => {
        // 判断是否是回文
        while (l >= 0 && r < len && s[l] === s[r]) {
            l--; r++;
        }

        return r - l - 1;
    }

    for (let i = 0; i < len; i++) {
        // 中心从单个或者两个开始存在中心aa的情况
        let left = fn(i, i);
        let right = fn(i, i + 1);
        const max = Math.max(left, right);
        // 如果长度超过存储的长度，则更新
        if (max > end - start) {
            start = i - ((max - 1) >> 1);
            end = i + (max >> 1);
        }
    }

    return s.substring(start, end + 1);

};
// @lc code=end

