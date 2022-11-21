# https://leetcode.com/problems/letter-combinations-of-a-phone-number/
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits: return []
        
        digitToChar = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "qprs",
            "8": "tuv",
            "9": "wxyz",
        }
        result = []
        
        def permute(string,index): 
            if index == len(digits):
                result.append(string)
                return 
            
            for c in digitToChar[digits[index]]:
                permute(string + c, index + 1) 
        
        permute('',0)
        return result