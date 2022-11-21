// https://leetcode.com/problems/min-stack/

var MinStack = function () {
    this.stack = [];
    this.min = Infinity;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    const valMinPair = [val, this.min];
    this.stack.push(valMinPair);
    this.min = Math.min(this.min, val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const [lastVal, lastMin] = this.stack.pop();
    this.min = lastMin;
    return lastVal;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
