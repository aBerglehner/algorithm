# https://leetcode.com/problems/house-robber-ii/
class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) < 3: return max(nums)
        def maxRobb(arr):
            if len(arr) < 3: return max(arr)
            result = [0] * len(arr)
            result[0] = arr[0]
            result[1] = max(arr[0],arr[1])
            for i in range(2,len(arr)):
                result[i] = max(result[i - 2] + arr[i], result[i - 1])
            return result[-1]
        
        withoutFirst = maxRobb(nums[1:])
        withoutLast = maxRobb(nums[:-1]) 
        return max(withoutFirst,withoutLast)
            