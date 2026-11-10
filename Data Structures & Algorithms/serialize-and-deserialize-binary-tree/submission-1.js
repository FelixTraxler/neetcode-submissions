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

        function dfs(index) {
            if (arr[index] === "N") return [null, index+1];

            const [left, i2] = dfs(index+1)
            const [right, i3] = dfs(i2)

            return [new TreeNode(arr[index], left, right), i3]
        }

        return dfs(0)[0]
    }
}
