# https://leetcode.com/problems/3sum/description/
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        sortedNums = sorted(nums) 
        result = []
        
        for i in range(len(sortedNums)):
            if i > 0 and sortedNums[i] == sortedNums[i - 1]:
                continue
            
            j = i + 1
            k = len(sortedNums) - 1
            while j < k:
                sum = sortedNums[i] + sortedNums[j] + sortedNums[k] 
                
                if sum == 0:
                    result.append([sortedNums[i], sortedNums[j], sortedNums[k]])
                    while j + 1 < len(sortedNums) and sortedNums[j] == sortedNums[j + 1]: j += 1 
                    while k - 1 > 0 and sortedNums[k] == sortedNums[k - 1]: k -= 1
                    j += 1
                    k -= 1
                elif sum > 0:
                    k -= 1 
                else:
                    j += 1
                    
        return result