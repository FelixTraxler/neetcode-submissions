class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let start = 0;
        let end = nums.length-1;

        while(start < end - 1) {
            const middle = start + 1 + Math.floor((end - start - 1) / 2)

            if (nums[start] < nums[middle]) {
                start = middle;
            } else {
                end = middle;
            }
        }

        return Math.min(nums[0], nums[end])
    }
}
