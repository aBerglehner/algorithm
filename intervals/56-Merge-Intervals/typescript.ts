// https://leetcode.com/problems/merge-intervals/
function merge(intervals: number[][]): number[][] {
    const sortedIntervals: number[][] = [...intervals].sort((a, b) => a[0] - b[0]);
    const result: number[][] = [sortedIntervals[0]];
    for (const [start, end] of sortedIntervals) {
        if (result[result.length - 1][1] < start) {
            result.push([start, end]);
        } else {
            const [prevStart, prevEnd]: number[] = result.pop()!;
            result.push([prevStart, Math.max(end, prevEnd)]);
        }
    }
    return result;
}
