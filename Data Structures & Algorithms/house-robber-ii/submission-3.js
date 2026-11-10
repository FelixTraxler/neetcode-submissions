class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];

        function robP(arr) {
            if (arr.length === 0) return 0;
            if (arr.length === 1) return arr[0]

            const solutions = new Array(arr.length)
            solutions[0] = arr[0]
            solutions[1] = Math.max(arr[0], arr[1])

            for (let i = 2; i < arr.length; i++) {
                const best = Math.max(solutions[i-2] + arr[i], solutions[i-1])
                solutions[i] = best
            }

            return solutions[arr.length-1]
        }

        const a = robP(nums.slice(1))
        const b = robP(nums.slice(0, nums.length-1))

        return Math.max(a, b)
    }
}
