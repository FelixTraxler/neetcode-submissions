class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const res = [];

        for (let i = 0; i <= n; i++) {
            let w = i;
            let c = 0;

            while (w) {
                w &= w-1;
                c++;
            }

            res.push(c)
        }

        return res
    }
}
