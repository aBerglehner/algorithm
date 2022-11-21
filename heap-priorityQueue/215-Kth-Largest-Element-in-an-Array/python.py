# https://leetcode.com/problems/kth-largest-element-in-an-array/
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        N = len(nums)
        k = N - k
        
        def quickSelect(l, r):
            pivot = nums[r]
            ptr = l
            for i in range(l, r):
                if nums[i] <= pivot:
                    nums[i], nums[ptr] = nums[ptr], nums[i]
                    ptr += 1
            nums[ptr], nums[r] = nums[r], nums[ptr]
            if ptr == k:
                return nums[ptr]
            elif ptr < k:
                return quickSelect(ptr + 1, r)
            else:
                return quickSelect(l, ptr - 1)
            
        return quickSelect(0, N - 1)