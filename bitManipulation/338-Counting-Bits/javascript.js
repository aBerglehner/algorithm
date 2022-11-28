// https://leetcode.com/problems/counting-bits/
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let counter = 0;
    let result = [];
    while (counter <= n) {
        let sum = 0;
        let temp = counter;
        while (temp) {
            sum += temp & 1;
            temp = temp >>> 1;
        }
        result.push(sum);
        counter += 1;
    }
    return result;
};
