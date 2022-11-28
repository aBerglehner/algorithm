// https://leetcode.com/problems/house-robber/
function rob(nums: number[]): number {
    const len: number = nums.length;
    const dp: number[] = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < len; i += 1) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    return dp[len - 1];
}
