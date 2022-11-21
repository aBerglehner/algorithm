// https://leetcode.com/problems/k-closest-points-to-origin/
function kClosest(points: number[][], k: number): number[][] {
    const sortedPoints = [...points].sort(
        (a, b) => a[0] ** 2 + a[1] ** 2 - (b[0] ** 2 + b[1] ** 2)
    );
    return sortedPoints.slice(0, k);
}
