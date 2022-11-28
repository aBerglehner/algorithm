# https://leetcode.com/problems/course-schedule-ii/
class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        preMap = { i:[] for i in range(numCourses)}    
        for course,pre in prerequisites:
            preMap[course].append(pre)
        visitSet = set()
        cycleSet = set() 
        result = []
        
        def dfs(course):
            if course in visitSet: return True 
            if course in cycleSet: return False 
            
            cycleSet.add(course)
            
            for pre in preMap[course]:
                if not dfs(pre): return False
            
            cycleSet.remove(course)
            visitSet.add(course)
            result.append(course)
            return True
        
        for course in range(numCourses):
            if not dfs(course): return []
        
        return result