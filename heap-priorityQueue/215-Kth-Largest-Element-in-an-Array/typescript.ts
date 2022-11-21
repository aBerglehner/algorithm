// https://leetcode.com/problems/kth-largest-element-in-an-array/
function findKthLargest(nums: number[], k: number): number {
    const finalIdx: number = nums.length - k;
    let left: number = 0;
    let right: number = nums.length - 1;

    while (left <= right) {
        const pivot: number = Math.floor(Math.random() * (right - left + 1)) + left;
        const pivotIdx: number = pivotHelper(pivot, left, right);
        if (pivotIdx === finalIdx) break;

        if (pivotIdx < finalIdx) left = pivotIdx + 1;
        else right = pivotIdx - 1;
    }
    return nums[finalIdx];

    function pivotHelper(pivot: number, start: number, end: number): number {
        swap(pivot, end);

        let i: number = start;
        let j: number = start;

        while (j < end) {
            if (nums[j] <= nums[end]) {
                swap(i, j);
                i += 1;
            }
            j += 1;
        }
        swap(i, end);
        return i;
    }

    function swap(i: number, j: number): void {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
}
