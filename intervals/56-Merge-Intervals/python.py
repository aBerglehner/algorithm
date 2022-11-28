# https://leetcode.com/problems/merge-intervals/
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        sortedIntervals = sorted(intervals, key= lambda x: x[0])
        result = [sortedIntervals[0]]
        for start,end in sortedIntervals:
            if result[-1][1] < start:
                result.append([start,end])
            else:
                prevStart,prevEnd = result.pop()
                result.append([prevStart,max(end,prevEnd)])
        return result