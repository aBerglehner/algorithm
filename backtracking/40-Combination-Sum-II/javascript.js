// https://leetcode.com/problems/combination-sum-ii/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    const sortedCandidates = [...candidates].sort((a, b) => a - b);
    const result = [];
    const backtrack = (cur, pos, target) => {
        if (target === 0) {
            result.push([...cur]);
            return;
        }
        if (target < 0) {
            return;
        }
        prev = -1;
        for (let i = pos; i < sortedCandidates.length; i += 1) {
            const num = sortedCandidates[i];
            if (num === prev) continue;
            cur.push(num);
            backtrack(cur, i + 1, target - num);
            cur.pop();
            prev = num;
        }
    };
    backtrack([], 0, target);
    return result;
};
