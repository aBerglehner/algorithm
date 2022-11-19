# https://leetcode.com/problems/valid-anagram/description/
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t): return False
        sDict = {}
        for char in s:
            if char not in sDict:
                sDict[char] = 0
            sDict[char] += 1
        
        for char in t:
            if char not in sDict: return False
            sDict[char] -= 1
            if sDict[char] == 0:
                del sDict[char]
        
        return True
        
        