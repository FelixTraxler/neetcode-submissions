class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const numbers: number[] = []

        for (const token of tokens) {
            const parsed = Number.parseInt(token);

            if (!Number.isNaN(parsed)) {
                numbers.push(parsed)
            } else {
                // First one to pop is latest pushed to the stack
                const b = numbers.pop()
                const a = numbers.pop()
                if (token === "+") {
                    numbers.push(a + b)
                } else if (token === "-") {
                    numbers.push(a - b)
                } else if (token === "*") {
                    numbers.push(a * b)
                } else if (token === "/") {
                    numbers.push(Math.trunc(a / b))
                }
            }
        }

        return numbers.pop()
    }
}
