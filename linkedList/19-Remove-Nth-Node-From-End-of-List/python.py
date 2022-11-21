# https://leetcode.com/problems/remove-nth-node-from-end-of-list/
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        counter = 0
        node = head
        while node:
            counter += 1
            node = node.next
        if counter == n: return head.next
        counter -= n
        node = head
        while counter:
            counter -= 1
            if counter == 0:
                node.next = node.next.next
                break
            node = node.next
        return head