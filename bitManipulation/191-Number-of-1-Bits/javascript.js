// https://leetcode.com/problems/number-of-1-bits/description/
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let sum = 0;
    while (n) {
        sum += n & 1;
        n = n >>> 1;
    }
    return sum;
};
