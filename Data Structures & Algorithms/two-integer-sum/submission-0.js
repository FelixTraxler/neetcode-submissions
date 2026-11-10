class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {}

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] in map) {
                return [map[nums[i]], i]
            }

            map[target - nums[i]] = i
        }
    }
}
