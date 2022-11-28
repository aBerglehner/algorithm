// https://leetcode.com/problems/house-robber-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 0 || !nums) return 0;
    if (nums.length === 1) return nums[0];
    const withoutFirst = helper(nums.slice(1));
    const withoutLast = helper(nums.slice(0, -1));
    return Math.max(withoutFirst, withoutLast);
};

const helper = (nums) => {
    const len = nums.length;
    const dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[1], nums[0]);
    for (let i = 2; i < len; i += 1) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    return dp[len - 1];
};
