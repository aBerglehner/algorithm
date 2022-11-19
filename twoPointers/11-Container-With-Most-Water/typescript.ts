// https://leetcode.com/problems/container-with-most-water/
function maxArea(height: number[]): number {
    let result: number = 0;
    let left: number = 0;
    let right: number = height.length - 1;
    while (left < right) {
        const distance: number = right - left;
        const currMax: number = Math.min(height[left], height[right]) * distance;
        result = Math.max(result, currMax);
        if (height[left] < height[right]) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    return result;
}
