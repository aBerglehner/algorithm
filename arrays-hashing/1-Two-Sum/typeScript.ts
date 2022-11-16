// https://leetcode.com/problems/two-sum

function twoSum(nums: number[], target: number): number[] {
    const result: { [key: number]: number } = {};
    for (let i = 0; i < nums.length; i += 1) {
        const num: number = nums[i];
        if (num in result) return [result[num], i];
        result[target - num] = i;
    }
    return [-1, -1];
}
