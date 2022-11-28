// https://leetcode.com/problems/maximum-subarray/
function maxSubArray(nums: number[]): number {
    let curMax: number = nums[0];
    let globalMax: number = nums[0];
    for (let i = 1; i < nums.length; i += 1) {
        const num: number = nums[i];
        curMax = Math.max(num, curMax + num);
        globalMax = Math.max(globalMax, curMax);
    }
    return globalMax;
}
