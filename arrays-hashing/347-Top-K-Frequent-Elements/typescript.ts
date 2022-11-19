// https://leetcode.com/problems/top-k-frequent-elements/description/
function topKFrequent(nums: number[], k: number): number[] {
    const result: { [key: number]: number } = {};
    for (const num of nums) {
        result[num] = (result[num] || 0) + 1;
    }
    const sortedInFrequentOrder = Object.entries(result).sort((a, b) => b[1] - a[1]); //?
    const reducedToKey: number[] = sortedInFrequentOrder.reduce<number[]>((acc, curr) => {
        acc.push(+curr[0]);
        return acc;
    }, []);
    reducedToKey.length = k;
    return reducedToKey;
}
