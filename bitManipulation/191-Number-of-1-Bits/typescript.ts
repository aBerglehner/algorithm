// https://leetcode.com/problems/number-of-1-bits/description/
function hammingWeight(n: number): number {
    let counter: number = 0;
    while (n) {
        counter += n & 1;
        n = n >>> 1;
    }
    return counter;
}
