class Solution {
    cache = {}
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        if (amount in this.cache) return this.cache[amount];
        if (amount < 0) return -1;
        if (amount === 0) return 0;

        const result = coins
            .map(coin => this.coinChange(coins, amount - coin))
            .filter(res => res !== -1)

        const res = result.length === 0 ? -1 : (1 + Math.min(...result))
        this.cache[amount] = res

        return res
    }
}
