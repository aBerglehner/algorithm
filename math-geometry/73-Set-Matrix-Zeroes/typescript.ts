// https://leetcode.com/problems/set-matrix-zeroes/
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const track: number[][] = [];
    for (let row = 0; row < matrix.length; row += 1) {
        for (let col = 0; col < matrix[0].length; col += 1) {
            if (matrix[row][col] === 0) track.push([row, col]);
        }
    }
    for (const [trackRow, trackCol] of track) {
        for (let col = 0; col < matrix[0].length; col += 1) {
            matrix[trackRow][col] = 0;
        }
        for (let row = 0; row < matrix.length; row += 1) {
            matrix[row][trackCol] = 0;
        }
    }
}
