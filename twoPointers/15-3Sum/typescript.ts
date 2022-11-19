// https://leetcode.com/problems/3sum/description/
function threeSum(nums: number[]): number[][] {
    const sortedNums: number[] = [...nums].sort((a, b) => a - b);
    const result: number[][] = [];
    for (let i = 0; i < sortedNums.length - 2; i += 1) {
        let j: number = i + 1;
        let k: number = sortedNums.length - 1;
        while (j < k) {
            const sum: number = sortedNums[i] + sortedNums[j] + sortedNums[k];
            if (sum === 0) {
                result.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
                while (sortedNums[j] === sortedNums[j + 1]) j += 1;
                while (sortedNums[k] === sortedNums[k - 1]) k -= 1;
                j += 1;
                k -= 1;
            } else if (sum > 0) {
                k -= 1;
            } else {
                j += 1;
            }
        }
        while (sortedNums[i] === sortedNums[i + 1]) i += 1;
    }
    return result;
}
