// https://leetcode.com/problems/longest-repeating-character-replacement/
function characterReplacement(s: string, k: number): number {
    let left: number = 0;
    let right: number = 0;
    let maxCharCount: number = 0;
    const visited: { [key: string]: number } = {};

    while (right < s.length) {
        const char: string = s[right];
        visited[char] = visited[char] ? visited[char] + 1 : 1;
        if (visited[char] > maxCharCount) maxCharCount = visited[char];

        if (right - left + 1 - maxCharCount > k) {
            visited[s[left]] -= 1;
            left += 1;
        }
        right += 1;
    }
    return right - left;
}
