// https://leetcode.com/problems/sum-of-two-integers/
function getSum(a: number, b: number): number {
    while (b) {
        const carry: number = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
}
