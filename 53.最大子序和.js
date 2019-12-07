/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    // 暴力解法  打败了5% 妹的
    // let i = 0, j = 1, res = nums[0], n = nums[0];
    // while (i < j && i < (nums.length - 1)) {
    //     if (j >= nums.length) {
    //         i++;
    //         j = i + 1;
    //         n = nums[i];
    //         if (nums[i] > res) res = nums[i];
    //     } else {
    //         j++;
    //         n = n + (nums[j - 1] || 0);
    //         if (n > res) res = n;
    //     }
    // }
    // return res;

    // 贪心算法  70.91%
    // let sum = 0, res = nums[0];
    // for (let i = 0; i < nums.length; i++) {
    //     if (sum < 0) {
    //         sum = nums[i];
    //     } else {
    //         sum += nums[i];
    //     }

    //     res = Math.max(res, sum);
    // }
    // return res

    // 动态规划
    let res = nums[0], arr = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        arr[i] = Math.max(arr[i - 1] + nums[i], nums[i]);
        res = Math.max(res, arr[i]);
    }

    return res;
};

// @lc code=end

