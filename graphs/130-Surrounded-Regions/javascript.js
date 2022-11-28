// https://leetcode.com/problems/surrounded-regions/
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    const rows = board.length;
    const cols = board[0].length;

    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r === rows || c === cols || board[r][c] !== 'O') {
            return;
        }
        board[r][c] = 'T';
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    };

    for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
            if (
                (board[r][c] === 'O' && [0, rows - 1].includes(r)) ||
                [0, cols - 1].includes(c)
            ) {
                dfs(r, c);
            }
        }
    }

    for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
            if (board[r][c] === 'O') {
                board[r][c] = 'X';
            }
            if (board[r][c] === 'T') {
                board[r][c] = 'O';
            }
        }
    }
};
