class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const OPEN_BRACKETS = ['{', '[', '(']
        const stack = []

        for (const c of s) {
            if (OPEN_BRACKETS.some(b => b === c)) {
                stack.push(c)
            }
                if (c === "}") {
                    if (stack.length === 0 || stack[stack.length-1] !== "{") return false
                    stack.pop()
                }

                if (c === "]") {
                    if (stack.length === 0 || stack[stack.length-1] !== "[") return false
                    stack.pop()
                }

                if (c === ")") {
                    if (stack.length === 0 || stack[stack.length-1] !== "(") return false
                    stack.pop()
                }
        }

        return stack.length === 0;
    }
}
