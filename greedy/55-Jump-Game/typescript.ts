// https://leetcode.com/problems/jump-game/
function canJump(nums: number[]): boolean {
    let maxDist: number = nums[0];
    for (let i = 1; i < nums.length; i += 1) {
        if (maxDist < i) return false;
        maxDist = Math.max(maxDist, i + nums[i]);
    }
    return true;
}
