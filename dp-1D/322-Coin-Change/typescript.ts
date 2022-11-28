// https://leetcode.com/problems/coin-change/
function coinChange(coins: number[], amount: number): number {
    const dp: number[] = Array.from({ length: amount + 1 }, () => amount + 1);
    dp[0] = 0;
    for (let i = 1; i < dp.length; i += 1) {
        for (const coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
            }
        }
    }
    return dp[dp.length - 1] === amount + 1 ? -1 : dp[dp.length - 1];
}
