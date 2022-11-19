# https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        result = 0
        l = 0
        mySet = set()
        
        for r in range(len(s)):
            while s[r] in mySet:
                mySet.remove(s[l])
                l += 1
            mySet.add(s[r]) 
            result = max(result,len(mySet))
            
        return result
