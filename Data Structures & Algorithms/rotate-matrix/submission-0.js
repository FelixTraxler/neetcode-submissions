class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        const normalize = (x, y) => {
            const half = (matrix.length - 1) / 2
            return [x - half, y - half]
        }
        const denormalize = (x, y) => {
            const half = (matrix.length - 1) / 2
            return [Math.round(x + half), Math.round(y + half)]
        }
        const rotate = (x, y) => {
            const [newX, newY] = normalize(x, y)

            console.log(`[${x}, ${y}] to [${newX}, ${newY}]`)

            return denormalize(newY, -newX);
        }
        for (let i = 0; i < matrix.length / 2; i++) {
            for (let j = 0; j < (matrix.length - 1) / 2; j++) {
                console.log(`Rotating at ${i}, ${j}`)                
                const [i2, j2] = rotate(i, j)
                const [i3, j3] = rotate(i2, j2)
                const [i4, j4] = rotate(i3, j3)
                console.log(`With ${i2}, ${j2}`)
                console.log(`With ${i3}, ${j3}`)
                console.log(`With ${i4}, ${j4}`)                

                const a1 = matrix[i][j]
                const a2 = matrix[i2][j2]
                const a3 = matrix[i3][j3]
                const a4 = matrix[i4][j4]
                
                matrix[i2][j2] = a1
                matrix[i3][j3] = a2
                matrix[i4][j4] = a3
                matrix[i][j] = a4

                console.log(matrix)
            }
        }
    }
}
