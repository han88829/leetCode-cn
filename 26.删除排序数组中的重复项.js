/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    // for (let i = 0; i < nums.length; i++) {

    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] === nums[j]) {
    //             nums.splice(j, 1);
    //             j--;
    //         }
    //     }
    // }
    // return nums.length

    // for (let i = 1; i < nums.length; i++) {
    //     if (nums[i] === nums[i - 1]) {
    //         nums.splice(i, 1);
    //         i--;
    //     }
    // }
    // return nums.length

    let j = 0;

    for (let i = 1; i < nums.length; i++)
        if (nums[i] != nums[j])
            nums[++j] = nums[i]

    return j + 1

};
// @lc code=end

