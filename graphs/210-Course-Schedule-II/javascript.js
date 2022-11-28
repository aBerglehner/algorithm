// https://leetcode.com/problems/course-schedule-ii/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    const adjList = () => {
        const adj = {};
        for (let i = 0; i < numCourses; i += 1) {
            adj[i] = [];
        }
        prerequisites.forEach(([first, second]) => {
            adj[first].push(second);
        });
        return adj;
    };

    const preMap = adjList();
    const visitSet = new Set();
    const cycleSet = new Set();
    const result = [];
    const dfs = (course) => {
        if (visitSet.has(course)) return true;
        if (cycleSet.has(course)) return false;
        cycleSet.add(course);

        for (const pre of preMap[course]) {
            if (!dfs(pre)) return false;
        }

        cycleSet.delete(course);
        visitSet.add(course);
        result.push(course);
        return true;
    };

    for (let course = 0; course < numCourses; course += 1) {
        if (!dfs(course)) return [];
    }
    return result;
};
