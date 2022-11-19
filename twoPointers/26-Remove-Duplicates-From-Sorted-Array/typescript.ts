// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
function removeDuplicates(nums: number[]): number {
    let left: number = 0;
    for (let right = 1; right < nums.length; right += 1) {
        if (nums[left] !== nums[right]) {
            left += 1;
            nums[left] = nums[right];
        }
    }
    return left + 1;
}
