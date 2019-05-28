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
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
        
        return _handler(preorder,0,preorder.size() - 1,inorder,0,inorder.size() - 1);
    }
    
    TreeNode* _handler(vector<int>& preorder,int startPre,int endPre,vector<int>& inorder,int startIn,int endIn) {
        
        if(startPre > endPre || startIn > endIn) {
            return NULL;
        }
        
        TreeNode *root = new TreeNode(preorder[startPre]);
        
        int index = -1;
        for(int i = startIn;i <= endIn;i++) {
            if(preorder[startPre] == inorder[i]) {
                // 注意此处需要处理 index 防止 越界
                index = i - startIn;
                break;
            }
        }
        
        root->left = _handler(preorder,startPre + 1,startPre + index,inorder,startIn,startIn + index - 1);
        root->right = _handler(preorder,startPre + index + 1,endPre,inorder,startIn + index + 1,endIn);
        
        return root;
    }
};