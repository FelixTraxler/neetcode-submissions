class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        function binSearch(arr: number[], t: number) {
            if (arr.length === 0) return false;
            const m = Math.trunc(arr.length / 2)
            
            if (arr[m] === target) {
                return true;
            } else if (arr[m] > target) {
                return binSearch(arr.slice(0, m), target);
            } else {
                return binSearch(arr.slice(m+1), target);
            }
        }

        if (matrix.length === 1) {
            return binSearch(matrix[0], target);
        }

        const middle = Math.trunc(matrix.length / 2)

        if (matrix[middle][0] > target) {
            return this.searchMatrix(matrix.slice(0, middle), target)
        } else {
            return this.searchMatrix(matrix.slice(middle), target)
        }
    }
}
