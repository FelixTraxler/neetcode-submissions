class Solution {
    cache = {}

    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        return this.robLen(nums, nums.length)
    }

    robLen(nums, len) {
        if (len in this.cache) return this.cache[len];

        if (len === 0) return 0;
        if (len === 1) return nums[0];

        const a = nums[len - 1] + this.robLen(nums, len - 2)
        const b = this.robLen(nums, len - 1)

        const res = Math.max(a, b)
        this.cache[len] = res

        return res;
    }
}
