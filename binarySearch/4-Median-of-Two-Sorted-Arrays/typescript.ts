// https://leetcode.com/problems/median-of-two-sorted-arrays/
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    function merge(n1: number[], n2: number[]): number[] {
        const res: number[] = [];
        let n1Pointer: number = 0;
        let n2Pointer: number = 0;
        while (n1Pointer < n1.length && n2Pointer < n2.length) {
            if (n1[n1Pointer] < n2[n2Pointer]) {
                res.push(n1[n1Pointer]);
                n1Pointer += 1;
            } else {
                res.push(n2[n2Pointer]);
                n2Pointer += 1;
            }
        }
        return [...res, ...n1.slice(n1Pointer), ...n2.slice(n2Pointer)];
    }
    const result: number[] = merge(nums1, nums2);
    let mid: number = Math.floor(result.length / 2);
    if (result.length % 2) {
        return result[mid];
    }
    return (result[mid] + result[mid - 1]) / 2;
}
