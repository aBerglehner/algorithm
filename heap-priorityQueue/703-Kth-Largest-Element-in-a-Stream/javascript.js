// https://leetcode.com/problems/kth-largest-element-in-a-stream/

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.k = k;
    this.nums = nums.sort((a, b) => a - b);
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    const findIndex = () => {
        let left = 0;
        let right = this.nums.length;
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if (this.nums[mid] === val) {
                return mid;
            } else if (this.nums[mid] < val) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left;
    };
    const index = findIndex();
    this.nums.splice(index, 0, val);
    return this.nums[this.nums.length - this.k];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
