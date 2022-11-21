// https://leetcode.com/problems/search-a-2d-matrix/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let rowStart = 0;
    let rowEnd = matrix.length - 1;
    while (rowStart <= rowEnd) {
        const midRow = rowStart + Math.floor((rowEnd - rowStart) / 2);
        const midRowFirst = matrix[midRow][0];
        const midRowLast = matrix[midRow][matrix[midRow].length - 1];
        if (target >= midRowFirst && target <= midRowLast) {
            let left = 0;
            let right = matrix[midRow].length - 1;
            while (left <= right) {
                const mid = left + Math.floor((right - left) / 2);
                const midValue = matrix[midRow][mid];
                if (midValue === target) {
                    return true;
                } else if (target < midValue) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            return false;
        } else if (target < midRowFirst) {
            rowEnd = midRow - 1;
        } else {
            rowStart = midRow + 1;
        }
    }
    return false;
};
