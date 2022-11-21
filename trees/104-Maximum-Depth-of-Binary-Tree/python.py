# https://leetcode.com/problems/maximum-depth-of-binary-tree/
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root: return 0
        result = 0
        queue = deque()
        queue.append(root)

        while len(queue):
            result += 1
            for i in range(len(queue)):
                curr = queue.popleft()
                if curr.left: queue.append(curr.left)
                if curr.right: queue.append(curr.right)
                
        return result
        