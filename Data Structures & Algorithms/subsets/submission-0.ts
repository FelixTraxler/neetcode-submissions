class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        if (nums.length === 0) {
            return [[]]
        } else if (nums.length === 1) {
            return [[], [nums[0]]]
        } else {
            const sub = this.subsets(nums.slice(1))
            const sub2 = this.subsets(nums.slice(1))
            sub2.forEach(arr => arr.push(nums[0]))

            return [...sub, ...sub2]
        }
    }
}
