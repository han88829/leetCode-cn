/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let j = nums.length - 1;

    for (let i = j; i >= 0; i--) {
        if (nums[i] == val) {
            nums[i] = nums[j];
            nums[j] = val;
            j--;
        }
    }
    return j + 1
};

// @lc code=end

