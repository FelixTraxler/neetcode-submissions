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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (root === null) return "N"

        return `${root.val},${this.serialize(root.left)},${this.serialize(root.right)}`
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const arr = data.split(",")
        let i = 0;

        function dfs() {
            if (arr[i++] === "N") return null;

            return new TreeNode(arr[i-1], dfs(), dfs())
        }

        return dfs()
    }
}
