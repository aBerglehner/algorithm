# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        result = 0
        min = prices[0]
        for price in prices:
            diff = price - min
            result = max(result,diff)
            if price < min: min = price
        return result