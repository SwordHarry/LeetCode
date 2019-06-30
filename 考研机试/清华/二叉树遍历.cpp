#include <iostream>
#include <string>
#include <stack>
using namespace std;



class Node {
    public:
    Node(char _val) {
        val = _val;
        left = NULL;
        right = NULL;
    }
    char val;
    Node *left;
    Node *right;
};

// 中序遍历
void midTraver(Node* root) {
    if(!root) {
        return;
    }
    midTraver(root->left);
    cout << root->val << " ";
    midTraver(root->right);
}

// 初始化二叉树
int index = 0;
int len = 0;
Node *initTree(string str) {
    
    if(index >= len || str[index] == '#') {
        index++;
        return NULL;
    }
    
    Node *root = new Node(str[index++]);
    
    root->left = initTree(str);
    root->right = initTree(str);
    
    return root;
}

int main(void) {
    
    string str;
    
    
    while(cin >> str) {
        
        if(str == " ") {
            cout << " ";
            continue;
        }
        len = str.length();
        Node *root = initTree(str);
        
        midTraver(root);
        cout << endl;
    }
    
    return 0;
}