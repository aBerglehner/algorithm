# https://leetcode.com/problems/daily-temperatures/
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [0 for _ in range(len(temperatures))]
        stack = [[temperatures[0],0]]
        for i in range(1,len(temperatures)):
            num = temperatures[i]
            peek = stack[-1][0] 
            while stack and peek < num:
                (_, getIndex) = stack.pop()
                res[getIndex] = i - getIndex
                if stack:
                    peek = stack[-1][0]
            stack.append([num,i])
        return res