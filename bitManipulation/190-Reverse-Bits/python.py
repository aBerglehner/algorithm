# https://leetcode.com/problems/reverse-bits/
class Solution:
    def reverseBits(self, n: int) -> int:
        result = 0
        counter = 32
        while counter:
            result *= 2
            result += n & 1
            n >>= 1
            counter -= 1
        return result