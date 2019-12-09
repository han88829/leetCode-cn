/*
 * @lc app=leetcode.cn id=1219 lang=javascript
 *
 * [1219] 黄金矿工
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
    // 内存打败100% 速度打败6.6%   还真是6
    let res = 0;
    let start = [...grid];
    for (let g = 0; g < grid.length; g++) {
        for (let i = 0; i < grid[0].length; i++) {
            grid = start;
            let s = getNum(g, i, grid);
            // console.log(g, i, s, grid);
            res = Math.max(res, s);
        }
    }

    function getNum(a, b, g) {
        if (a >= g.length || b >= grid[0].length || a < 0 || b < 0) return 0;
        let num = g[a][b];
        if (!num) return 0;
        let data = JSON.parse(JSON.stringify(g));
        data[a][b] = 0;
        let s1 = num + getNum(a, b + 1, data);
        let s2 = num + getNum(a, b - 1, data);
        let s3 = num + getNum(a - 1, b, data);
        let s4 = num + getNum(a + 1, b, data);
        // console.log(s1, s2, s3, s4);
        num = Math.max(num, s1, s2, s3, s4);
        return num
    }
    return res
};

// console.log(getMaximumGold([[1, 0, 7, 0, 0, 0], [2, 0, 6, 0, 1, 0], [3, 5, 6, 7, 4, 2], [4, 3, 1, 0, 2, 0], [3, 0, 5, 0, 20, 0]]));
// @lc code=end

