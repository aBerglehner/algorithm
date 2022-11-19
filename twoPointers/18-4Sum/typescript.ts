// https://leetcode.com/problems/4sum/
function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a, b) => a - b);
    const result: number[][] = [];
    for (let i = 0; i < nums.length - 3; i += 1) {
        for (let j = i + 1; j < nums.length - 2; j += 1) {
            let low: number = j + 1;
            let high: number = nums.length - 1;
            while (low < high) {
                const sum = nums[i] + nums[j] + nums[low] + nums[high];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[low], nums[high]]);
                    while (nums[low] === nums[low + 1]) low += 1;
                    while (nums[high] === nums[high - 1]) high -= 1;
                    low += 1;
                    high -= 1;
                } else if (sum < target) {
                    low += 1;
                } else {
                    high -= 1;
                }
            }
            while (nums[j] === nums[j + 1]) j += 1;
        }
        while (nums[i] === nums[i + 1]) i += 1;
    }
    return result;
}
