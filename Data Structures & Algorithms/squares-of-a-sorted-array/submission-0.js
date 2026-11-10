class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        return nums.map(n => n*n).toSorted((a, b) => a - b)
    }
}
