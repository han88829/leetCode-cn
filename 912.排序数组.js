/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    function quick(arr) {
        if (nums.length <= 1) return nums
        let p = nums.splice(Math.floor(nums.length / 2), 1)[0];
        let left = []; let right = [];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] >= nums[p]) {
                right.push(nums[i])
            } else {
                left.push(nums[i])
            }
        }
        return [...sortArray(left), p, ...sortArray(right)]
    }
    return quick(nums)
};
// @lc code=end