// https://leetcode.com/problems/pacific-atlantic-water-flow/
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    const rows = heights.length;
    const cols = heights[0].length;
    const pacific = {};
    const atlantic = {};

    const dfs = (r, c, visit, prevHeight) => {
        const name = `r${r}c${c}`;
        if (
            name in visit ||
            r < 0 ||
            c < 0 ||
            r === rows ||
            c === cols ||
            heights[r][c] < prevHeight
        ) {
            return;
        }
        visit[name] = [r, c];
        dfs(r + 1, c, visit, heights[r][c]);
        dfs(r - 1, c, visit, heights[r][c]);
        dfs(r, c + 1, visit, heights[r][c]);
        dfs(r, c - 1, visit, heights[r][c]);
    };

    for (let c = 0; c < cols; c += 1) {
        dfs(0, c, pacific, heights[0][c]);
        dfs(rows - 1, c, atlantic, heights[rows - 1][c]);
    }
    for (let r = 0; r < rows; r += 1) {
        dfs(r, 0, pacific, heights[r][0]);
        dfs(r, cols - 1, atlantic, heights[r][cols - 1]);
    }

    const intersection = Object.entries(pacific).reduce((acc, [keys, value]) => {
        keys in atlantic && acc.push(value);
        return acc;
    }, []);
    return intersection;
};
