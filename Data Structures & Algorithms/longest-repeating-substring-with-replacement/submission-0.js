class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const alph = new Set(s.split(""))
        let max = 0

        for (const c of alph) {
            let i = 0, diff = 0, start = 0;

            while (i < s.length) {
                if (s[i] !== c) {
                    diff++;

                    while (diff > k) {
                        if (s[start++] !== c) diff--;
                    }
                }

                max = Math.max(max, i - start + 1);
                i++;
            }

            max = Math.max(max, i - start);
        }
        
        return max;
    }
}
