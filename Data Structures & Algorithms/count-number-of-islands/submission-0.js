class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const copy = [...grid]
        function recursiveClean(i, j) {
            if (i < 0 || i >= grid.length) return;
            if (j < 0 || j >= grid[i].length) return;
            if (copy[i][j] !== "1") return;

            copy[i][j] = "0"

            recursiveClean(i-1, j)
            recursiveClean(i+1, j)
            recursiveClean(i, j-1)
            recursiveClean(i, j+1)
        }

        let count = 0;

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === "1") {
                    count++;
                    recursiveClean(i, j)
                }
            }
        }

        return count;
    }
}
