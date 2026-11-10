class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0])
        console.log(intervals)

        const res = []

        let i = 0;

        while (i < intervals.length) {
            let min = intervals[i][0];
            let max = intervals[i][1];

            while (i < intervals.length - 1 && intervals[i+1][0] <= max) {
                max = Math.max(intervals[i+1][1], max);
                i++;
            }

            res.push([min, max])
            i++;
        }

        return res
    }
}
