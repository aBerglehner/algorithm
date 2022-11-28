// https://leetcode.com/problems/merge-intervals/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [intervals[0]];
    for (const [start, end] of intervals) {
        if (result[result.length - 1][1] < start) {
            result.push([start, end]);
        } else {
            const [prevStart, prevEnd] = result.pop();
            result.push([prevStart, Math.max(end, prevEnd)]);
        }
    }
    return result;
};
