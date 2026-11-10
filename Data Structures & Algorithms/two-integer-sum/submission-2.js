class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const m = new Map()

        for (let i = 0; i < nums.length; i++) {
            if (m.has(target - nums[i])) {
                return [i, m.get(target - nums[i])]
            }

            m.set(nums[i], i);
        }

        return []
    }
}
