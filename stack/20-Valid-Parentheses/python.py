# https://leetcode.com/problems/valid-parentheses/
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        pareMatcher = {
        '}': '{',
        ']': '[',
        ')': '(',
        } 
        for char in s:
            if char in pareMatcher:
                if len(stack):
                    last = stack.pop()
                    if pareMatcher[char] != last: return False
                else:
                    return False
            else:
                stack.append(char)
        return len(stack) == 0