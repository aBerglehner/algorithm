// https://leetcode.com/problems/gas-station/description/
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let start = 0;
    let tank = 0;
    let total = 0;
    for (let i = 0; i < gas.length; i += 1) {
        const consume = gas[i] - cost[i];
        tank += consume;
        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
        total += consume;
    }
    return total < 0 ? -1 : start;
};
