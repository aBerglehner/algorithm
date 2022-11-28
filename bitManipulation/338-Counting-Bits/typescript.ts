// https://leetcode.com/problems/counting-bits/
function countBits(n: number): number[] {
    const result: number[] = [];
    for (let i = 0; i <= n; i += 1) {
        let counter: number = 0;
        let n: number = i;
        while (n) {
            counter += n & 1;
            n = n >> 1;
        }
        result.push(counter);
    }
    return result;
}
