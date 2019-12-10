/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head) return head;
    let obj = {};
    getNext = (data) => {
        if (!data) return null;
        if (obj[data.val]) {
            return getNext(data.next);
        }

        obj[data.val] = 1;
        data.next = getNext(data.next);
        return data
    }

    return getNext(head);

};
// @lc code=end

