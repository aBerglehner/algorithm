// https://leetcode.com/problems/number-of-islands/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (!grid || grid.length === 0) return 0;
    const rows = grid.length;
    const cols = grid[0].length;
    const visit = new Set();
    let result = 0;

    const bfs = (r, c) => {
        const name = `r${r}c${c}`;
        const q = [[r, c]];
        visit.add(name);
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
                    grid[r][c] === '1' &&
                    !visit.has(name)
                ) {
                    q.push([r, c]);
                    visit.add(name);
                }
            }
        }
    };

    for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
            if (grid[r][c] === '1' && !visit.has(`r${r}c${c}`)) {
                bfs(r, c);
                result += 1;
            }
        }
    }
    return result;
};
