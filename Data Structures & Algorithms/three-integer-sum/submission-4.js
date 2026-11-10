class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        const res = []

        console.log(`Sorted: ${nums}`)

        for (let i = 0; i < nums.length; i++) {
            let l = i + 1, r = nums.length - 1;

            while (l < r) {
                const x = nums[i] + nums[l] + nums[r]
                if (x === 0) {
                    console.log(`Pushing ${[i, l, r]}`)
                    res.push([nums[i], nums[l], nums[r]])
                    l++;

                    while (l < r && nums[l-1] === nums[l]) {
                        l++;
                    }
                    console.log(`l:${l}`)
                } else if (x > 0) {
                    r--
                } else {
                    l++
                }
            }

            while (i < nums.length - 1 && nums[i+1] === nums[i]) i++
        }

        return res;
    }
}
