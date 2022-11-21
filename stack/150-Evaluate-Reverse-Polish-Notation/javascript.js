// https://leetcode.com/problems/evaluate-reverse-polish-notation/
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const operators = new Set(['+', '-', '/', '*']);
    const stack = [];
    for (const token of tokens) {
        if (!operators.has(token)) {
            stack.push(token);
        } else {
            const second = +stack.pop();
            const first = +stack.pop(); //?
            typeof first; //?
            let result = null;
            if (token === '+') result = first + second;
            if (token === '-') result = first - second;
            if (token === '*') result = first * second;
            if (token === '/') result = ~~(first / second);
            stack.push(result);
        }
    }
    return stack[0];
};
