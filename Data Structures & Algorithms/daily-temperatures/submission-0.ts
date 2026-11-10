class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack = [];
        const res = [...temperatures];
        let i = 0;

        for (const t of temperatures) {
            while (stack.length > 0 && temperatures[stack[stack.length-1]] < t) {
                const index = stack.pop();
                res[index] = i - index;
            }

            stack.push(i)

            i++;
        }

        while (stack.length > 0) {
            res[stack.pop()] = 0
        }

        return res;
    }
}
