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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let len = 0;
        let t = head;

        while (t != null) {
            t = t.next;
            len++;
        }

        if (len - n === 0) return head.next;

        t = head;
        let prev = null;
        for (let i = 0; i < len - n; i++) {
            prev = t;
            t = t.next;
        }

        prev.next = t.next;

        return head;
    }
}
