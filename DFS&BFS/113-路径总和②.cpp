/**
 * 给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。

说明: 叶子节点是指没有子节点的节点。

示例:
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
返回:

[
   [5,4,11,2],
   [5,8,4,5]
]

 * 
*/

#include <iostream>
#include <vector>
using namespace std;
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
    vector<vector<int>> result;
    vector<vector<int>> pathSum(TreeNode* root, int sum) {
        if(root == NULL) {
            return result;
        }
        
        vector<int> vec;
        handler(root,sum - root->val,vec);
        
        return result;
    }
    
    void handler(TreeNode* node,int sum,vector<int> &vec) {
        
        vec.push_back(node->val);
        if(!node->left && !node->right) {
            if(sum == 0) {
                vector<int> temp(vec);
                result.push_back(temp);
            }
            return;
        }
        
        if(node->left) {
            handler(node->left,sum - node->left->val,vec);
            vec.pop_back();
        }
        
        if(node->right) {
            handler(node->right,sum - node->right->val,vec);
            vec.pop_back();
        }
        
        return;
        
    }
};