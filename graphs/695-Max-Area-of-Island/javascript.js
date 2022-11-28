// https://leetcode.com/problems/max-area-of-island/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    if (!grid || grid.length === 0) return 0;
    const rows = grid.length;
    const cols = grid[0].length;
    const visit = new Set();
    let maxArea = 0;

    const bfs = (r, c) => {
        const name = `r${r}c${c}`;
        const q = [[r, c]];
        visit.add(name);
        let result = 1;

        while (q.length) {
            const [row, col] = q.shift();
            directions = [
                [1, 0],
                [-1, 0],
                [0, 1],
                [0, -1],
            ];
            for (const [dr, dc] of directions) {
                r = row + dr;
                c = col + dc;
                const name = `r${r}c${c}`;
                if (
                    r < rows &&
                    r >= 0 &&
                    c < cols &&
                    c >= 0 &&
                    grid[r][c] === 1 &&
                    !visit.has(name)
                ) {
                    result += 1;
                    q.push([r, c]);
                    visit.add(name);
                }
            }
        }

        return result;
    };

    for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
            if (grid[r][c] === 1 && !visit.has(`r${r}c${c}`)) {
                maxArea = Math.max(maxArea, bfs(r, c));
            }
        }
    }

    return maxArea;
};
