// https://leetcode.com/problems/plus-one/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let carry = 0;
    for (let i = digits.length - 1; i >= 0; i -= 1) {
        let digit = digits[i] + carry;
        if (i === digits.length - 1) {
            digit += 1;
        }
        if (digit > 9) {
            carry = 1;
            digit = digit - 10;
        } else {
            carry = 0;
        }
        digits[i] = digit;
    }
    if (carry) {
        digits.unshift(1);
    }
    return digits;
};
