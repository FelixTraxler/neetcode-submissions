/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let next = head;

        while (next !== null) {
            if ("visited" in next) return true;

            next.visited = true;
            next = next.next;
        }

        return false;
    }
}
