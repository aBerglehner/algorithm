# https://leetcode.com/problems/validate-binary-search-tree/description/
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        checker = []
        def inOrder(node):
            if not node: return
            inOrder(node.left)
            checker.append(node.val)
            inOrder(node.right)
        
        inOrder(root)
        
        for i in range(1,len(checker)):
            if checker[i] <= checker[i - 1]: return False
        
        return True