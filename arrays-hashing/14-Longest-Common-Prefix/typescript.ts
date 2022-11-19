// https://leetcode.com/problems/longest-common-prefix/description/
function longestCommonPrefix(strs: string[]): string {
    let result: string = '';
    for (const char of strs[0]) {
        const cur: string = result + char;
        if (strs.every((word) => word.startsWith(cur))) {
            result = cur;
        }
    }
    return result;
}
