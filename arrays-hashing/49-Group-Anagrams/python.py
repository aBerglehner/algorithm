# https://leetcode.com/problems/group-anagrams/
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        result = {} 
        for str in strs:
            sortedStr = ''.join(sorted([char for char in str]))
            if sortedStr not in result:
                result[sortedStr] = []
            result[sortedStr].append(str)
        return result.values()