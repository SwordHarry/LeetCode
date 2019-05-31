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
#include <map>
#include <sstream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
class Solution {
public:
    vector<TreeNode*> findDuplicateSubtrees(TreeNode* root) {
        // 子树的序列化表述
        // 后序遍历
        vector<TreeNode *> result;
        map<string,bool> m;
        
        findTreeNode(root,m,result);
        
        return result;
    }
    
    string findTreeNode(TreeNode *root,map<string,bool> &m,vector<TreeNode *> &result) {
        
        if(!root) {
            return "";
        }
        
        string leftTree = findTreeNode(root->left,m,result);
        string rightTree = findTreeNode(root->right,m,result);
        
        int val = root->val;
        stringstream ss;
        ss << val << "(" << leftTree << "," << rightTree << ")";
        string str = ss.str();
        
        if(m.count(str)) {
            if(m[str]) {
                result.push_back(root);
                m[str] = false;
            }
        } else {
            m[str] = true;
        }
        return str;
    }
};