// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
function lengthOfLongestSubstring(s: string): number {
    const mySet = new Set<string>();
    let l: number = 0;
    let max: number = 0;

    for (let r = 0; r < s.length; r += 1) {
        while (mySet.has(s[r])) {
            mySet.delete(s[l]);
            l += 1;
        }
        mySet.add(s[r]);
        max = Math.max(max, mySet.size);
    }

    return max;
}
