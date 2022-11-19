// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
function maxProfit(prices: number[]): number {
    let result: number = 0;
    let min: number = prices[0];
    for (const price of prices) {
        const currMax = price - min;
        result = Math.max(result, currMax);
        if (price < min) min = price;
    }
    return result;
}
