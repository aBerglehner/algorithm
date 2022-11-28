# https://leetcode.com/problems/maximum-subarray/
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        curMax = nums[0]
        globalMax = nums[0]
        for i in range(1,len(nums)):
            num = nums[i]
            curMax = max(num, num + curMax)
            globalMax = max(globalMax, curMax)
        return globalMax