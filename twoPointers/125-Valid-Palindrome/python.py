# https://leetcode.com/problems/valid-palindrome/
class Solution:
    def isPalindrome(self, s: str) -> bool:
        alphaChars = re.findall("[a-zA-Z0-9]", s.lower())        
        left = 0 
        right = len(alphaChars) - 1
        while left < right:
            if alphaChars[left] != alphaChars[right]:
                return False
            left += 1
            right -= 1
        return True