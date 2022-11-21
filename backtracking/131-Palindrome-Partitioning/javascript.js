// https://leetcode.com/problems/palindrome-partitioning/
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const result = [];
    const part = [];

    function isPali(s, l, r) {
        while (l < r) {
            if (s[l] !== s[r]) {
                return false;
            }
            l = l + 1;
            r = r - 1;
        }
        return true;
    }

    function dfs(i) {
        if (i >= s.length) {
            result.push([...part]);
            return;
        }
        for (let j = i; j < s.length; j += 1) {
            if (isPali(s, i, j)) {
                part.push(s.slice(i, j + 1));
                dfs(j + 1);
                part.pop();
            }
        }
    }

    dfs(0);
    return result;
};
