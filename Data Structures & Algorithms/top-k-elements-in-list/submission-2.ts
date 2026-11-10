class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const counter = new Map<number, number>()

        for (const i of nums) {
            const oldValue = counter.get(i) ?? 0
            counter.set(i, oldValue + 1)
        }

        const freqs = new Array(nums.length)

        for (let i = 0; i < freqs.length; i++) {
            freqs[i] = []
        }

        for (const [n, freq] of counter.entries()) {
            freqs[freq-1].push(n)
        }
        
        const res = []

        for (let j = freqs.length - 1; j >= 0; j--) {
            for (const n of freqs[j]) {
                if (res.length === k) return res;
                res.push(n)
            }
        }
        
        return res
    }
}
