// https://leetcode.com/problems/maximum-product-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let currentMax = nums[0];
    let currentMin = nums[0];
    let global = nums[0];
    for (let i = 1; i < nums.length; i += 1) {
        let temp = currentMax * nums[i];
        currentMax = Math.max(currentMax * nums[i], nums[i], currentMin * nums[i]);
        currentMin = Math.min(temp, currentMin * nums[i], nums[i]);
        global = Math.max(currentMax, global);
    }
    return global;
};
