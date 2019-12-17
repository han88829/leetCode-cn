/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // 暴力法
    // let len = prices.length;
    // let price = 0;
    // for (let i = 0; i < len; i++) {
    //     for (let j = i + 1; j < len; j++) {
    //         if (prices[j] - prices[i] > price) price = prices[j] - prices[i];
    //     }
    // }
    // return price

    // 二次暴力
    // let len = prices.length;
    // let price = 0;

    // for (let i = 0; i < len; i++) {
    //     let max = prices.reduce((a, b, j) => {
    //         if (j > i && b > a) a = b;
    //         return a
    //     }, 0);

    //     price = Math.max(price, max - prices[i]);
    // }

    // return price


    // let res = 0;
    // let len = prices.length;
    // for (let i = 1; i < len; i++) {
    //     res = Math.max(res,
    //         prices[i] - Math.min(...prices.slice(0, i))
    //     );
    // }
    // return res


    // 记录i之前的最小值，保留卖出后收益最大值
    let max = 0, min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        max = Math.max(max, prices[i] - min);
        min = Math.min(min, prices[i]);
    }

    return max
};
// @lc code=end

