class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0; 

        nums.sort((a, b) => a - b)

        let max = 1;
        let totalMax = 0;

        console.log(`nums: ${nums}`)

        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] === nums[i + 1]) {
                continue;
            } else if (nums[i] + 1 === nums[i + 1]) {
                max++;
                console.log(`Added for ${nums[i+1]}`)
            } else {
                totalMax = Math.max(totalMax, max)
                max = 1;
            }
        }

        totalMax = Math.max(totalMax, max)

        return totalMax
    }
}
