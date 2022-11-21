// https://leetcode.com/problems/reorder-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    const stack = [];
    let node = head;
    while (node) {
        stack.push(node.val);
        node = node.next;
    }
    const isOdd = stack.length % 2;
    let len = Math.floor(stack.length / 2);

    let dummy = new ListNode();
    node = dummy;

    while (len) {
        dummy.next = head;
        dummy = dummy.next;
        head = head.next;
        dummy.next = new ListNode(stack.pop());
        dummy = dummy.next;
        len -= 1;
    }
    if (isOdd) {
        dummy.next = new ListNode(head.val);
    }
    return node.next;
};
