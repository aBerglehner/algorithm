// https://leetcode.com/problems/daily-temperatures/
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const res = new Array(temperatures.length).fill(0);
    const stack = [[temperatures[0], 0]];
    for (let i = 1; i < temperatures.length; i += 1) {
        let peek = stack[stack.length - 1][0];
        const num = temperatures[i];
        while (stack.length && peek < num) {
            const [_, getIndex] = stack.pop();
            res[getIndex] = i - getIndex;
            peek = stack.length && stack[stack.length - 1][0];
        }
        stack.push([num, i]);
    }
    return res;
};
