/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    // const index = nums.indexOf(target);
    // if (index >= 0) return index;
    // if (nums[0] > target) return 0;
    // if (nums[nums.length - 1] < target) return nums.length;
    // for (let i = 1; i < nums.length; i++)
    //     if (nums[i] > target && nums[i - 1] < target)
    //         return i


    // 使用题解二分查找试试

    let l = 0
    let r = nums.length - 1;
    while (l <= r) {
        let mid = Math.ceil((l + r) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return l
};
// @lc code=end

