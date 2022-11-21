# https://leetcode.com/problems/combination-sum/
class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        result = []
        def dfs(i,cur,total):
            if target == total:
                result.append(cur[:])
                return
            if i >= len(candidates) or total > target: return
            cur.append(candidates[i])
            dfs(i,cur,total + candidates[i])
            cur.pop()
            dfs(i + 1,cur,total)
            
        dfs(0,[],0)
        return result