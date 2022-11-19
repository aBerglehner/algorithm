# https://leetcode.com/problems/longest-repeating-character-replacement/
class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        left = 0
        right = 0
        maxCharCount = 0
        visited = {}
        
        while right < len(s):
            char = s[right] 
            if char not in visited:
                visited[char] = 0
            visited[char] += 1 
            
            if visited[char] > maxCharCount:
                maxCharCount = visited[char]
            
            if right - left + 1 - maxCharCount > k:
                visited[s[left]] -= 1
                left += 1
            
            right += 1 
        
        return right - left
