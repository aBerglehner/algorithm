// https://leetcode.com/problems/happy-number/
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const cache = {};
    while (n !== 1) {
        if (n in cache) return false;
        cache[n] = true;
        let sum = 0;
        while (n) {
            let lastDigit = n % 10;
            sum += lastDigit * lastDigit;
            n = Math.floor(n / 10);
        }
        n = sum;
    }
    return true;
};
