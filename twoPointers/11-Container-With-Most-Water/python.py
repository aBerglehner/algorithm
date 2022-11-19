# https://leetcode.com/problems/container-with-most-water/
class Solution:
    def maxArea(self, height: List[int]) -> int:
        result = 0
        left = 0
        right = len(height) - 1
        
        while left < right:
            distance = right - left 
            area = min(height[left],height[right])
            currMax = distance * area
            result = max(result,currMax)
            
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
            
        return result