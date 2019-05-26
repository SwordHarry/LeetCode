/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */

#include <vector>
#include <stack>
#include <stddef.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        
        vector<int> result;
        if(!root) {
            return result;
        }
        
        stack<TreeNode*> s;
        
        TreeNode* node = root;
        
        while(node || !s.empty()) {
            
            while(node) {
                s.push(node);
                node = node->left;
            }
            
            node = s.top();
            s.pop();
            result.push_back(node->val);
            node = node->right;
        }
        
        return result;
    }
};