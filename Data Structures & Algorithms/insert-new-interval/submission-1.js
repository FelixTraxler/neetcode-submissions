class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let min = newInterval[0]
        let max = newInterval[1]

        for (const i of intervals) {
            if (i[1] >= min && i[0] <= max) {
                min = Math.min(min, i[0])
                max = Math.max(max, i[1])
            }
        }

        console.log(`Min: ${min}, Max: ${max}`)

        const res = [];
        let before = true;

        for (const i of intervals) {
            if (i[1] < min) {
                res.push(i)
            }

            if (i[0] > max) {
                if (before) {
                    res.push([min, max])
                    before = false;
                }
                res.push(i)
            }
        }

        if (before) {
            res.push([min, max])
        }

        return res;
    }
}
