class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let start = 0, end = s.length - 1;
        const skip = (i) => {
            const c = s[i].toLowerCase()
            if (c >= 'a' && c <= 'z') return false;
            if (c >= '0' && c <= '9') return false;

            return true;
        }

        while (start < end) {
            while (skip(start) && start < s.length - 1) start++;
            while (skip(end) && end > 0) end--;
            if (start >= end) return true;

            console.log(`Checking ${s[start]} vs ${s[end]}`)

            if (s[start].toLowerCase() !== s[end].toLowerCase()) return false;

            start++;
            end--;
        }

        return true;
    }
}
