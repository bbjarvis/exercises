// Add Two Numbers
/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
/**
 * Definition for singly-linked list.
 * FUNCTION LISTNODE(VAL, NEXT) {
 *     THIS.VAL = (VAL===UNDEFINED ? 0 : VAL)
 *     THIS.NEXT = (NEXT===UNDEFINED ? NULL : NEXT)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 var addTwoNumbers = function(l1, l2) {
    let l3 = new ListNode();
    let currL3 = l3;
    let head1 = l1;
    let head2 = l2;
    let add1 = 0;
    let currHead1 = 0;
    let currHead2 = 0;
    let count = 0;
    

    while (head1 !== null || head2 !== null) {
        if (count !== 0){
        currL3.next = new ListNode()
        currL3 = currL3.next}         

        head1 !== null ? currHead1 = head1.val : currHead1 = 0
        head2 !== null ? currHead2 = head2.val : currHead2 = 0       

        currL3.val = currHead1 + currHead2 + add1;     
        add1 = 0;
        if (head1 !== null) {head1 = head1.next;};
        if (head2 !== null) {head2 = head2.next;};
        if (currL3.val > 9) {
            currL3.val = currL3.val - 10;            
            add1 = 1}
        count++
        if (head1 === null && head2 === null && add1 === 1) {
            currL3.next = new ListNode()
            currL3 = currL3.next
            currL3.val = add1;
        }
    }
    return l3
    }
