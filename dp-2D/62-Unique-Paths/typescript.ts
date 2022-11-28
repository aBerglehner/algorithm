// https://leetcode.com/problems/unique-paths/description/
function uniquePaths(m: number, n: number): number {
    const dp: number[][] = Array.from({ length: m }, () => new Array(n).fill(0));
    for (let i = 0; i < m; i += 1) {
        dp[i][0] = 1;
    }
    for (let i = 0; i < n; i += 1) {
        dp[0][i] = 1;
    }
    for (let row = 1; row < m; row += 1) {
        for (let col = 1; col < n; col += 1) {
            dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
        }
    }
    return dp[m - 1][n - 1];
}
