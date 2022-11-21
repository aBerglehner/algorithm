// https://leetcode.com/problems/merge-k-sorted-lists/
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const allLists: number[] = [];
    for (let list of lists) {
        while (list) {
            allLists.push(list.val);
            list = list.next;
        }
    }
    console.log(allLists);
    allLists.sort((a, b) => b - a);
    const dummy: ListNode = new ListNode();
    let node: ListNode = dummy;
    while (allLists.length) {
        node.next = new ListNode(allLists.pop());
        node = node.next;
    }
    return dummy.next;
}
