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
     * @return {boolean}
     */
    isValidBST(root, min = -1000000001, max = 1000000001) {
        if (root === null) return true;
        if (root.val >= max) return false;
        if (root.val <= min) return false;

        if (root.left && root.left.val >= root.val) return false
        if (root.right && root.right.val <= root.val) return false

        return this.isValidBST(root.left, min, Math.min(max, root.val)) && this.isValidBST(root.right, Math.max(min, root.val), max)
    }
}
