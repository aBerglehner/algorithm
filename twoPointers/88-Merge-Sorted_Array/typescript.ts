// https://leetcode.com/problems/merge-sorted-array/
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let nums1Pointer: number = m - 1;
    let nums2Pointer: number = n - 1;
    for (let i = nums1.length - 1; i >= 0; i -= 1) {
        if (nums2Pointer < 0) break;
        if (nums1Pointer >= 0 && nums1[nums1Pointer] > nums2[nums2Pointer]) {
            nums1[i] = nums1[nums1Pointer];
            nums1Pointer -= 1;
        } else {
            nums1[i] = nums2[nums2Pointer];
            nums2Pointer -= 1;
        }
    }
}
