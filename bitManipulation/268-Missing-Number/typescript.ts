// https://leetcode.com/problems/missing-number/
function missingNumber(nums: number[]): number {
    let ans: number = nums.length;
    for (let i = 0; i < nums.length; i += 1) {
        ans = ans ^ (nums[i] ^ i);
    }
    return ans;
}
