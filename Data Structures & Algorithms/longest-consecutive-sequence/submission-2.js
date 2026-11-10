class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const map = new Set()
        let longest = 0;

        for (const n of nums) {
                map.add(n)

                let len = 1;
                let x = n + 1;
                while (map.has(x++)) len++
                
                x = n - 1
                while (map.has(x--)) len++

                longest = Math.max(longest, len)
            
        }

        return longest
    }
}
