// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    return false;
};
