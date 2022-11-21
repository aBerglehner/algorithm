// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let len = 0;
    let dummy = head;
    while (dummy) {
        len += 1;
        dummy = dummy.next;
    }
    dummy = head;
    if (len - n === 0) {
        return head.next;
    }
    while (dummy) {
        len -= 1;
        if (len === n) {
            dummy.next = dummy.next.next;
        }
        dummy = dummy.next;
    }
    return head;
};
