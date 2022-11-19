// https://leetcode.com/problems/boats-to-save-people/
function numRescueBoats(people: number[], limit: number): number {
    const sortedPeople: number[] = [...people].sort((a, b) => a - b);
    let counter: number = 0;
    let left: number = 0;
    let right: number = sortedPeople.length - 1;
    while (left <= right) {
        const leftNum: number = sortedPeople[left];
        const rightNum: number = sortedPeople[right];
        if (leftNum + rightNum > limit) {
            counter += 1;
            right -= 1;
        } else {
            counter += 1;
            left += 1;
            right -= 1;
        }
    }
    return counter;
}
