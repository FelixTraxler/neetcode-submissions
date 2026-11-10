class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        nums.sort();

        const res = []

        function dfs(cur, i, sum) {
            if (i >= nums.length) return;
            if (sum === target) {
                res.push([...cur])
            } else if (sum < target) {
                cur.push(nums[i])
                dfs(cur, i, sum + nums[i])
                cur.pop()
                dfs(cur, i + 1, sum)
            }
        }

        dfs([], 0, 0)

        return res;
    }

    // [2,5,6,9]
    //.  / \
    // []
}
