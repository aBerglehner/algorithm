// https://leetcode.com/problems/remove-element/
function removeElement(nums: number[], val: number): number {
    let pointer: number = 0;
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] !== val) {
            nums[pointer] = nums[i];
            pointer += 1;
        }
    }
    return pointer;
}
