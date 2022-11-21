# https://leetcode.com/problems/merge-two-sorted-lists/
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        node = dummy
        while list1 and list2:
            list1Val = list1.val
            list2Val = list2.val
            if list1Val < list2Val:
                node.next = ListNode(list1Val)
                list1 = list1.next
            else:
                node.next = ListNode(list2Val)
                list2 = list2.next
            node = node.next
        
        if list1:
            node.next = list1
        if list2:
            node.next = list2

        return dummy.next