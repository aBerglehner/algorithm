// https://leetcode.com/problems/maximum-product-subarray/
function maxProduct(nums: number[]): number {
    let currMax: number = nums[0];
    let currMin: number = nums[0];
    let globalMax: number = nums[0];
    for (let i = 1; i < nums.length; i += 1) {
        const num: number = nums[i];
        const tempMax: number = currMax * num;
        const tempMin: number = currMin * num;
        currMax = Math.max(tempMax, tempMin, num);
        currMin = Math.min(tempMax, tempMin, num);
        globalMax = Math.max(globalMax, currMax);
    }
    return globalMax;
}
