// https://leetcode.com/problems/group-anagrams/
function groupAnagrams(strs: string[]): string[][] {
    const result: { [key: string]: string[] } = {};
    for (const str of strs) {
        const sortedStr: string = [...str].sort().join('');
        if (!(sortedStr in result)) {
            result[sortedStr] = [];
        }
        result[sortedStr].push(str);
    }
    return Object.values(result);
}
