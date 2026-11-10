class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        function backtrack(x, y, visited) {
            const pos = Object.keys(visited).length
            if (pos === word.length) return true;

            if (y > 0 && !visited[`${y-1}:${x}`] && word[pos] === board[y-1][x]) {
                const top = {...visited}
                top[`${y-1}:${x}`] = true;
                if (backtrack(x, y-1, top)) {
                    return true;
                }
            }

            if (y < board.length - 1 && !visited[`${y+1}:${x}`] && word[pos] === board[y+1][x]) {
                const bottom = {...visited}
                bottom[`${y+1}:${x}`] = true;
                if (backtrack(x, y+1, bottom)) {
                    return true;
                }
            }

            if (x > 0 && !visited[`${y}:${x-1}`] && word[pos] === board[y][x-1]) {
                const top = {...visited}
                top[`${y}:${x-1}`] = true;
                if (backtrack(x-1, y, top)) {
                    return true;
                }
            }

            if (x < board[0].length - 1 && !visited[`${y}:${x+1}`] && word[pos] === board[y][x+1]) {
                const bottom = {...visited}
                bottom[`${y}:${x+1}`] = true;
                if (backtrack(x+1, y, bottom)) {
                    return true;
                }
            }

            return false;
        }

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === word[0]) {
                    const visited = {};
                    visited[`${i}:${j}`] = true;
                    if (backtrack(j, i, visited)) {
                        return true;
                    }
                }
            }
        }

        return false;
    }
}
