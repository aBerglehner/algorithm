// https://leetcode.com/problems/product-of-array-except-self/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const leftArr = [];
    let leftMultiplication = 1;
    for (let i = 0; i < nums.length; i += 1) {
        leftArr[i] = leftMultiplication;
        leftMultiplication *= nums[i];
    }
    const rightArr = [];
    let rightMultiplication = 1;
    for (let i = nums.length - 1; i >= 0; i -= 1) {
        rightArr[i] = rightMultiplication;
        rightMultiplication *= nums[i];
        rightArr[i] *= leftArr[i];
    }
    return rightArr;
};
