// https://leetcode.com/problems/word-break/
function wordBreak(s: string, wordDict: string[]): boolean {
    const dp: boolean[] = Array.from({ length: s.length + 1 }, () => false);
    dp[dp.length - 1] = true;
    for (let i = dp.length - 1; i >= 0; i -= 1) {
        for (const word of wordDict) {
            if (i + word.length <= s.length && s.slice(i, i + word.length) === word) {
                dp[i] = dp[i + word.length];
            }
            if (dp[i]) break;
        }
    }
    return dp[0];
}
