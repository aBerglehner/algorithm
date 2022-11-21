# https://leetcode.com/problems/last-stone-weight/
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        while len(stones) > 1:
            stones.sort() 
            stones #?
            newStone = stones.pop() - stones.pop()
            if newStone > 0:
                stones.append(newStone)
  
        return stones[0] if stones else 0