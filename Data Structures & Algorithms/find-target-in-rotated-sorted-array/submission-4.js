class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start = 0;
        let end = nums.length - 1;

        if (nums.length === 1) {
            return nums[0] === target ? 0 : -1
        }

        while (start < end - 1) {
            const middle = start + Math.floor((end - start) / 2)
            if (nums[middle] === target) return middle;
            if (nums[start] === target) {
            return start;
        }

        if (nums[end] === target) {
            return end;
        }
            if (nums[start] < nums[end]) {
                // geordnet
                if (nums[middle] > target) {
                    end = middle;
                } else {
                    start = middle;
                }
            } else {
                // nicht geordnet
                if (nums[middle] > nums[start]) {
                    // teilstueck geordnet
                    if (nums[middle] > target && nums[start] < target) {
                        end = middle;
                    } else {
                        start = middle;
                    }
                } else {
                    if (target > nums[start] || target < nums[middle]) {
                        end = middle;
                    } else {
                        start = middle;
                    }
                }
            }    
        }
        
        if (nums[start] === target) {
            return start;
        }

        if (nums[end] === target) {
            return end;
        }

        return -1
    }
}
