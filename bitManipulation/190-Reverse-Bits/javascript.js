// https://leetcode.com/problems/reverse-bits/
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let result = 0;
    let count = 32;
    while (count) {
        result = result * 2;
        result += n & 1;
        n = n >>> 1;
        count -= 1;
    }
    return result;
};
