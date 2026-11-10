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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const inorderMap = new Map();
        for (let i = 0; i < inorder.length; i++) {
            inorderMap.set(inorder[i], i);
        }

        const helper = (preStart, preEnd, inStart, inEnd) => {
            if (preStart > preEnd) return null;

            const rootVal = preorder[preStart];
            const middle = inorderMap.get(rootVal);
            const leftSize = middle - inStart;

            const left = helper(preStart + 1, preStart + leftSize, inStart, middle - 1);
            const right = helper(preStart + leftSize + 1, preEnd, middle + 1, inEnd);

            return new TreeNode(rootVal, left, right);
        };

        return helper(0, preorder.length - 1, 0, inorder.length - 1);
    }
}
