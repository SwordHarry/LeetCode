/**
 * 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定的有序链表： [-10, -3, 0, 5, 9],

一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
 * 
 * 
*/

#include <iostream>
using namespace std;

/**
 * Definition for singly-linked list.

 */
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};
/**
 * Definition for a binary tree node.
 * 
 */
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 };
class Solution {
public:
    TreeNode* sortedListToBST(ListNode* head) {
        return handler(head);
    }
    
    TreeNode* handler(ListNode* head) {
        
        if(head == NULL) {
            return NULL;
        }

        ListNode* slow = head;
        ListNode* fast = head;
        ListNode* pre = slow;
        
        while(fast->next && fast->next->next) {
            pre = slow;
            slow = slow->next;
            fast = fast->next->next;
        }
        
        
        TreeNode* node = new TreeNode(slow->val);
        // 断开链接
        if(pre != slow) {
            pre->next = NULL;
            node->left = handler(head);
        }
        
        node->right = handler(slow->next);
        
        return node;
    }
};