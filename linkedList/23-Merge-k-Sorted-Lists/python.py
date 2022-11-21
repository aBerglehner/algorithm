# https://leetcode.com/problems/merge-k-sorted-lists/
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        allLists = []
        for list in lists:
            while list:
                allLists.append(list.val)
                list = list.next
        allLists.sort(reverse=True)
        dummy = ListNode()
        node = dummy
        while len(allLists):
            node.next = ListNode(allLists.pop())
            node = node.next
        return dummy.next