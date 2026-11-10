/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        function build(node) {
            if (node === null) return []

            const left = build(node.left)
            const right = build(node.right)

            return [...left, node.val, ...right]
        }

        const arr = build(root)
        return arr[k-1]
    }
}
