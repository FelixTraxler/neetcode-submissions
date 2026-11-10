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
     * @return {void}
     */
    reorderList(head) {
        // function print(node) {
        //     console.log("---")
        //     while (node !== null) {
        //         console.log(node.val)
        //         node = node.next;
        //     }
        // }

        let length = 1;
        let last = head;

        while (last.next !== null) {
            last = last.next;
            length++;
        }

        if (length === 1) return head;

        const middle = length / 2;
        let x = head;

        for (let i = 0; i < middle-1; i++) {
            x = x.next;
        }

        const newStart = x.next;
        x.next = null;

        // print(head)
        // print(newStart)

        // console.log(`New ${newStart.val}`)

        let prev = null;
        let n = newStart
        
        while (n.next != null) {
            const next = n.next;
            n.next = prev;
            prev = n;
            n = next;
        }

        n.next = prev;

        // print(n)

        let reversedStart = n;
        let normalStart = head;

        while (normalStart.next !== null) {
            const next = normalStart.next;
            normalStart.next = reversedStart;
            reversedStart = reversedStart.next;
            normalStart.next.next = next;
            normalStart = next;
        }

        normalStart.next = reversedStart;

        return head;
    }
}
