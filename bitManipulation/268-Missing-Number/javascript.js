// https://leetcode.com/problems/missing-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let ans = nums.length;
    for (let i = 0; i < nums.length; i += 1) {
        ans = ans ^ (nums[i] ^ i);
    }
    return ans;
};
