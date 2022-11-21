// https://leetcode.com/problems/subsets-ii/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    const result = [];
    nums.sort((a, b) => a - b);

    function backtrack(i, subset) {
        if (i === nums.length) {
            result.push([...subset]);
            return;
        }
        subset.push(nums[i]);
        backtrack(i + 1, subset);
        subset.pop();

        while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
            i += 1;
        }
        backtrack(i + 1, subset);
    }
    backtrack(0, []);
    return result;
};
