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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        function dfs(node, val, walk) {
            // const a = {node: node.val, val, walk}
            // console.log(`A:${JSON.stringify(a)}`)
            walk.push(node)
            if (node.val === val) {
                return walk
            } else if (val < node.val) {
                return dfs(node.left, val, walk)
            } else {
                return dfs(node.right, val, walk)
            }
        }

        const pWalk = dfs(root, p.val, [])
        const qWalk = dfs(root, q.val, [])

        let i = 0;

        while (pWalk[i] === qWalk[i]) {
            i++
        }

        return pWalk[i-1]
    }
}
