# https://leetcode.com/problems/combination-sum-ii/
class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        sortedCandidates = sorted(candidates)
        result = []
        def backtrack(cur,pos,target):
            if target == 0:
                result.append(cur.copy())
                return
            if target < 0:
                return
            
            prev = -1
            for i in range(pos,len(sortedCandidates)):
                num = sortedCandidates[i]
                if num == prev: continue
                cur.append(num)
                backtrack(cur,i + 1, target - num)
                cur.pop()
                prev = num
        
        backtrack([],0,target)
        return result