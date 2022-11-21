// https://leetcode.com/problems/reorder-list/
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    const stack: ListNode[] = [];
    let node = head;
    while (node) {
        stack.push(node);
        node = node.next;
    }
    let left: number = 0;
    let right: number = stack.length - 1;
    let len: number = Math.floor(stack.length / 2);
    node = head;
    while (len) {
        node.next = stack[left];
        node = node.next;
        node.next = stack[right];
        node = node.next;
        left += 1;
        right -= 1;
        len -= 1;
    }
    if (stack.length % 2) {
        node.next = stack[left];
        node = node.next;
    }
    node.next = null;
}
