// https://leetcode.com/problems/reverse-linked-list/
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

function reverseList(head: ListNode | null): ListNode | null {
    let prev: null | ListNode = null;
    while (head) {
        const next: ListNode = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
