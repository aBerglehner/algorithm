// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const dummy = new ListNode();
    let node = dummy;
    let carry = 0;
    while (l1 || l2) {
        const num1 = l1 ? l1.val : 0;
        const num2 = l2 ? l2.val : 0;
        let sum = num1 + num2 + carry;
        if (sum > 9) {
            sum = sum % 10;
            carry = 1;
        } else {
            carry = 0;
        }
        node.next = new ListNode(sum);
        node = node.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    if (carry) {
        node.next = new ListNode(1);
    }
    return dummy.next;
};
