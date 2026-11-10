class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = {}

        let start = 0;
        let end = 0;
        let max = 0;

        while (end < s.length) {
            //console.log(`start: ${start}[${s[start]}], end: ${end}[${s[end]}]`)
            //console.log(`map: ${JSON.stringify(map)}`)
            if (map[s[end]] === true) {
                //console.log('check')
                while (s[start] !== s[end]) {
                    //console.log("cont")
                    map[s[start]] = false
                    start++;
                }
                start++;
            }

            max = Math.max(1 + end - start, max);

            map[s[end]] = true;

            end++;
        }

        return max;
    }
}
