// https://leetcode.com/problems/jump-game-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let oldMax = 0;
    let newMax = 0;
    let jumps = 0;
    for (let i = 0; i < nums.length - 1; i += 1) {
        newMax = Math.max(newMax, i + nums[i]);
        if (i === oldMax) {
            jumps += 1;
            oldMax = newMax;
        }
    }
    return jumps;
};
