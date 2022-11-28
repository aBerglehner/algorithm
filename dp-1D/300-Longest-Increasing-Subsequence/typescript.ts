// https://leetcode.com/problems/longest-increasing-subsequence/description/
function lengthOfLIS(nums: number[]): number {
    const lis: number[] = Array.from({ length: nums.length }, () => 1);
    for (let i = nums.length; i >= 0; i -= 1) {
        for (let j = i + 1; j < nums.length; j += 1) {
            if (nums[i] < nums[j]) {
                lis[i] = Math.max(lis[i], 1 + lis[j]);
            }
        }
    }
    return Math.max(...lis);
}
