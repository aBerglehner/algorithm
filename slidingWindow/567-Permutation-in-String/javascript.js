// https://leetcode.com/problems/permutation-in-string/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    const x = s1.length;
    const y = s2.length;
    if (x > y || y === 0) return false;
    if (x === 0) return true;
    const arr1 = new Array(26).fill(0);
    const arr2 = new Array(26).fill(0);

    for (let i = 0; i < x; i += 1) {
        arr1[s1.charCodeAt(i) - 97] += 1;
        arr2[s2.charCodeAt(i) - 97] += 1;
    }
    for (let i = x; i < y; i += 1) {
        if (equals(arr1, arr2)) {
            return true;
        }
        arr2[s2.charCodeAt(i - x) - 97] -= 1;
        arr2[s2.charCodeAt(i) - 97] += 1;
    }
    if (equals(arr1, arr2)) return true;
    return false;
};

function equals(arr1, arr2) {
    return arr1.every((e, i) => e === arr2[i]);
}
