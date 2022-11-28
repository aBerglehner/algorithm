// https://leetcode.com/problems/number-of-islands/
function numIslands(grid: string[][]): number {
    if (!grid || grid.length === 0) return 0;
    const rows: number = grid.length;
    const cols: number = grid[0].length;
    const visit = new Set<string>();
    let result: number = 0;

    function bfs(r: number, c: number): void {
        const name: string = `r${r}c${c}`;
        const queue: number[][] = [[r, c]];
        visit.add(name);
        const directions: number[][] = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        while (queue.length) {
            const [row, col]: number[] = queue.shift();

            for (const [dr, dc] of directions) {
                r = dr + row;
                c = dc + col;
                const name: string = `r${r}c${c}`;
                if (
                    r >= 0 &&
                    r < rows &&
                    c >= 0 &&
                    c < cols &&
                    grid[r][c] === '1' &&
                    !visit.has(name)
                ) {
                    queue.push([r, c]);
                    visit.add(name);
                }
            }
        }
    }

    for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
            if (grid[r][c] === '1' && !visit.has(`r${r}c${c}`)) {
                bfs(r, c);
                result += 1;
            }
        }
    }
    return result;
}
