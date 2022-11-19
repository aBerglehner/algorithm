// https://leetcode.com/problems/largest-number/description/
function largestNumber(nums: number[]): string {
    if (!nums || nums.length === 0) {
        return '0';
    }
    const res: string = nums
        .sort((a, b) => {
            return parseInt(`${b}${a}`, 10) - parseInt(`${a}${b}`, 10);
        })
        .join('');
    return res[0] === '0' ? '0' : res;
}
