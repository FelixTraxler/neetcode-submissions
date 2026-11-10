class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        if (nums.length === 0) return -1;

        const middle = Math.trunc(nums.length / 2)

        if (nums[middle] === target) return middle;

        if (nums[middle] > target) return this.search(nums.slice(0, middle), target)

        const res = this.search(nums.slice(middle + 1), target)
        return res === -1 ? -1 : middle+1 + res
    }
}
