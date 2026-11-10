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
        
        const res = []

        for (let j = 0; j < k; j++) {
            let max = 0
            let maxNumber = null

            for (const [key, value] of counter.entries()) {
                if (value > max) {
                    max = value;
                    maxNumber = key;
                }
            }

            if (maxNumber !== null) {
                counter.set(maxNumber, 0);
                res.push(maxNumber)
            }
        }
        
        return res
    }
}
