# https://leetcode.com/problems/two-sum/
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        result = {}     
        for i in range(len(nums)):
            num = nums[i]
            if num in result: return [result[num], i] 
            result[target - num] = i

# 2 Solution
# class Solution:
#     def twoSum(self, nums: List[int], target: int) -> List[int]:
#         dict = {}
#         for i in range(len(nums)):
#             num = nums[i]
#             diff = target - num
#             if num in dict:
#                 return [dict[num],i]
#             dict[diff] = i