// https://leetcode.com/problems/maximum-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let currentMax = nums[0];
    let globalMax = nums[0];
    for (let i = 1; i < nums.length; i += 1) {
        const num = nums[i];
        currentMax = Math.max(num, num + currentMax);
        globalMax = Math.max(currentMax, globalMax);
    }
    return globalMax;
};
