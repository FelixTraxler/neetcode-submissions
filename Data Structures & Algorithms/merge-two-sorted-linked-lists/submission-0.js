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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (list1 === null) return list2;
        if (list2 === null) return list1;

        let start = null, track;

        if (list1.val < list2.val) {
            track = start = list1;
            list1 = list1.next
        } else {
            track = start = list2;
            list2 = list2.next
        }

        while (true) {
            if (list1 === null && list2 === null) return start;

            if (list1 === null) {
                track.next = list2;
                track = track.next
                list2 = list2.next;
            } else if (list2 === null) {
                track.next = list1;
                track = track.next
                list1 = list1.next;
            } else {
                if (list1.val < list2.val) {
                    track.next = list1;
                    track = track.next
                    list1 = list1.next;
                } else {
                    track.next = list2;
                    track = track.next
                    list2 = list2.next;
                }
            }
        }
    }
}
