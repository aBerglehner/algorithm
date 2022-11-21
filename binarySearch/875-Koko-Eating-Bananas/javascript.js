// https://leetcode.com/problems/koko-eating-bananas/
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let maxValue = piles[0];
    for (const pile of piles) {
        if (pile > maxValue) maxValue = pile;
    }
    maxValue;
    let left = 1;
    let right = maxValue;
    let min = Infinity;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2); //?
        const hoursNeeded = calcHours(piles, mid); //?
        if (hoursNeeded <= h) {
            min = Math.min(min, mid);
            right = min - 1;
        } else {
            left = mid + 1;
        }
    }
    return min;
};
function calcHours(arr, divider) {
    let counter = 0;
    for (const num of arr) {
        counter += Math.ceil(num / divider);
    }
    return counter;
}
