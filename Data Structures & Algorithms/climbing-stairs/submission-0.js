class Solution {
    cache = new Map();
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 2) return n;
        if (this.cache.has(n)) return this.cache.get(n);

        const res = this.climbStairs(n - 1) + this.climbStairs(n - 2)
        this.cache.set(n, res)

        return res
    }
}
