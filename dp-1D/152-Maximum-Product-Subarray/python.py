# https://leetcode.com/problems/maximum-product-subarray/
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        currMax = nums[0]
        currMin = nums[0]
        globalMax = nums[0]
        for i in range(1,len(nums)):
            tempMax = currMax * nums[i]
            tempMin = currMin * nums[i]
            currMax = max(tempMax,tempMin,nums[i])
            currMin = min(tempMax,tempMin,nums[i])
            globalMax = max(globalMax,currMax)
        return globalMax