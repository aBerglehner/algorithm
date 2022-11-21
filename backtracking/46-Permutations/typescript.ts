// https://leetcode.com/problems/permutations/
function permute(nums: number[]): number[][] {
    const result: number[][] = [];
    if (nums.length === 1) return [[...nums]];

    for (let i = 0; i < nums.length; i += 1) {
        const n: number = nums.shift();
        const perms: number[][] = permute(nums);

        for (const perm of perms) {
            perm.push(n);
        }
        result.push(...perms);
        nums.push(n);
    }

    return result;
}
