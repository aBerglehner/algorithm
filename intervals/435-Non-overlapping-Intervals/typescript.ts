// https://leetcode.com/problems/non-overlapping-intervals/
function eraseOverlapIntervals(intervals: number[][]): number {
    const sortedIntervals: number[][] = [...intervals].sort((a, b) => a[0] - b[0]);
    let counter: number = 0;
    let prevEnd: number = sortedIntervals[0][1];
    for (let i = 1; i < sortedIntervals.length; i += 1) {
        const [start, end] = sortedIntervals[i];
        if (start >= prevEnd) {
            prevEnd = end;
        } else {
            counter += 1;
            prevEnd = Math.min(prevEnd, end);
        }
    }
    return counter;
}
