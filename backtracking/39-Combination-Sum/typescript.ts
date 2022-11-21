// https://leetcode.com/problems/combination-sum/
function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    function dfs(i: number, cur: number[], total: number): void {
        if (total === target) {
            result.push([...cur]);
            return;
        }
        if (i > candidates.length - 1 || total > target) return;
        cur.push(candidates[i]);
        dfs(i, cur, total + candidates[i]);
        cur.pop();
        dfs(i + 1, cur, total);
    }
    dfs(0, [], 0);
    return result;
}
