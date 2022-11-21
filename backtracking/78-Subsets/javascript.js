// https://leetcode.com/problems/subsets/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const res = [];
    function dfs(index, currArr) {
        res.push(currArr);
        for (let i = index; i < nums.length; i += 1) {
            dfs(i + 1, [...currArr, nums[i]]);
        }
    }
    dfs(0, []);
    return res;
};
