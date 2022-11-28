// https://leetcode.com/problems/hand-of-straights/
function isNStraightHand(hand: number[], groupSize: number): boolean {
    if (hand.length % groupSize) return false;
    const count: { [key: number]: number } = {};
    for (const num in hand) {
        if (!(hand[num] in count)) {
            count[hand[num]] = 0;
        }
        count[hand[num]] += 1;
    }
    const sortUniqHand: number[] = [...new Set<number>(hand)].sort((a, b) => b - a);
    while (sortUniqHand.length > 0) {
        var first = sortUniqHand[sortUniqHand.length - 1];
        for (var i = first; i < first + groupSize; i += 1) {
            if (!count.hasOwnProperty(i)) {
                return false;
            }

            count[i] -= 1;
            if (count[i] === 0) {
                if (i !== sortUniqHand[sortUniqHand.length - 1]) {
                    return false;
                }
                sortUniqHand.pop();
            }
        }
    }

    return true;
}
