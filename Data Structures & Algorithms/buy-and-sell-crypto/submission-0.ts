class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let lowest = prices[0];
        let max = 0;

        for (const p of prices) {
            max = Math.max(max, p - lowest);

            if (p < lowest) {
                lowest = p;
            }
        }

        return max;
    }
}
