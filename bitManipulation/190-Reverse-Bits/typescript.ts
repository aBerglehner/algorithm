// https://leetcode.com/problems/reverse-bits/
function reverseBits(n: number): number {
    let result: number = 0;
    let counter: number = 32;
    while (counter) {
        result = result * 2;
        result += n & 1;
        n = n >>> 1;
        counter -= 1;
    }
    return result;
}
