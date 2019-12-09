/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
    if (deck.length <= 1) return false;
    let obj = deck.reduce((a, b) => {
        if (a[b]) {
            a[b].push(b);
        } else {
            a[b] = [b];
        }
        return a
    }, {});
    let len = Object.values(obj).reduce((a, b) => {
        a.push(b.length);
        return a
    }, []);

    function gyy(m, n) {
        var r = m % n;
        m = n;
        n = r;
        if (r == 0) {
            return m;
        } else {
            return gyy(m, n);
        }
    }

    len = len.reduce((a, b) => {
        res = gyy(a, b);
        if (res < a) {
            a = res;
        }
        return a
    }, len[0]);
    return len > 1;
};
// @lc code=end

