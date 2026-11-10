/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (node === null) return null;

        const stack = [node]
        const map = {}

        while (stack.length > 0) {
            const n = stack.pop();
            if (n.val in map) continue;

            stack.push(...n.neighbors)

            map[n.val] = new Node(n.val, [])
        }

        stack.push(node);

        while(stack.length > 0) {
            const n = stack.pop();

            if (map[n.val].neighbors.length > 0) continue;
            
            stack.push(...n.neighbors);

            map[n.val].neighbors = n.neighbors.map(nb => map[nb.val]);
        }

        return map[node.val]
    }
}
