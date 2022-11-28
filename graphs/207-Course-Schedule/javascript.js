// https://leetcode.com/problems/course-schedule/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
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

    const preMap = adjList(); //?
    const visitSet = new Set();
    const dfs = (course) => {
        if (visitSet.has(course)) return false;
        if (preMap[course].length === 0) return true;
        visitSet.add(course);

        for (const pre of preMap[course]) {
            if (!dfs(pre)) return false;
        }

        visitSet.delete(course);
        preMap[course] = [];
        return true;
    };

    for (let course = 0; course < numCourses; course += 1) {
        if (!dfs(course)) return false;
    }
    return true;
};
