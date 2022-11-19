// https://leetcode.com/problems/longest-consecutive-sequence/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const numsSet = new Set(nums);
    let longest = 0;
    for (const num of numsSet) {
        if (!numsSet.has(num - 1)) {
            let length = 0;
            while (numsSet.has(length + num)) {
                length += 1;
            }
            longest = Math.max(longest, length);
        }
    }
    return longest;
};
