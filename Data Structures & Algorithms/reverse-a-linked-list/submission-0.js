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
     * @return {ListNode}
     */
    reverseList(head) {
        if (head === null) return head;

        const newHead = new ListNode(0, null)

        while (head) {
            const n = head;
            head = head.next;

            n.next = newHead.next
            newHead.next = n;
        }

        return newHead.next
    }
}
