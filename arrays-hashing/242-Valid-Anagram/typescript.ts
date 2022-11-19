// https://leetcode.com/problems/valid-anagram/description/
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const myMap = new Map<string, number>();
    for (const char of s) {
        myMap.set(char, (myMap.get(char) || 0) + 1);
    }

    for (const char of t) {
        if (!myMap.has(char)) return false;
        myMap.set(char, myMap.get(char)! - 1);
        if (myMap.get(char) === 0) {
            myMap.delete(char);
        }
    }
    return true;
}
