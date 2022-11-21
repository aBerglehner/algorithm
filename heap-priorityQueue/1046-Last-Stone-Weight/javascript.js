// https://leetcode.com/problems/last-stone-weight/
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => a - b); //?
        const newStone = stones.pop() - stones.pop(); //?
        if (newStone !== 0) {
            stones.push(newStone);
        }
    }
    return stones.length ? stones[0] : 0;
};
