# https://leetcode.com/problems/longest-common-prefix/description/
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        
        pre = strs[0]
        
        for word in strs:
            while not word.startswith(pre):
                pre = pre[:-1]
        
        return pre     