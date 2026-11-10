class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const l = heights.length;
        const h = heights[0].length
        const reachPacific = Array.from({length: l}, () => new Array(h).fill(false))
        const reachOcean = Array.from({length: l}, () => new Array(h).fill(false))

        //console.log(reachPacific)

        function dfs(i, j, res, prev = 0) {
            if (i < 0 || i >= l) return;
            if (j < 0 || j >= h) return;

            const val = heights[i][j]
            if (val < prev || res[i][j]) return;

            res[i][j] = true;

            dfs(i - 1, j, res, val)
            dfs(i + 1, j, res, val)
            dfs(i, j - 1, res, val)
            dfs(i, j + 1, res, val)
        }

        for (let i = 0; i < l; i++) {
            for (let j = 0; j < h; j++) {
                if (i === 0 || j === 0) {
                    dfs(i, j, reachPacific)
                }
                if (i === l - 1 || j === h - 1) {
                    dfs(i, j, reachOcean)
                }
            }
        }

        //console.log(reachPacific)
        //console.log(reachOcean)

        const res = [];

        for (let i = 0; i < l; i++) {
            for (let j = 0; j < h; j++) {
                if (reachOcean[i][j] && reachPacific[i][j]) {
                    res.push([i, j])
                }
            }
        }

        return res
    }
}
