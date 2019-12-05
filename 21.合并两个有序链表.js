/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let o1 = l1;
    let o2 = l2;
    if (!l1 || !l2) {
        return l1 || l2
    }
    let a1 = [o1.val], a2 = [o2.val];
    while (o1.next) {
        a1.push(o1.next.val);
        o1 = o1.next;
    }
    while (o2.next) {
        a2.push(o2.next.val);
        o2 = o2.next;
    }
    let arr = a1.concat(a2).sort((a, b) => a - b).reverse();
    let res = null;
    while (arr.length > 0) {
        const data = res;
        res = new ListNode(arr[0]);
        res.next = data;
        arr.splice(0, 1);
    }

    return res
};
// @lc code=end

