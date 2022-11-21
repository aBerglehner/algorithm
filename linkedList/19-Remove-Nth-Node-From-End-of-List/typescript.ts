// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let counter: number = 0;
    let node: ListNode = head;
    while (node) {
        counter += 1;
        node = node.next;
    }
    counter -= n;
    if (counter === 0) return head.next;
    node = head;
    while (counter) {
        counter -= 1;
        if (counter === 0) {
            node.next = node.next.next;
            break;
        }
        node = node.next;
    }
    return head;
}
