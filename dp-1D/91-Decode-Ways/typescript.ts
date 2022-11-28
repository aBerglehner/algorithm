// https://leetcode.com/problems/decode-ways/description/
function numDecodings(s: string): number {
    const dp: { [key: number]: number } = { [s.length]: 1 };

    for (let i = s.length - 1; i >= 0; i -= 1) {
        if (s[i] === '0') {
            dp[i] = 0;
        } else {
            dp[i] = dp[i + 1];
        }
        if (
            i + 1 < s.length &&
            (s[i] === '1' || (s[i] === '2' && '0123456'.includes(s[i + 1])))
        ) {
            dp[i] += dp[i + 2];
        }
    }
    return dp[0];
}
