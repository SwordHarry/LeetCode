#include <vector>
#include <unordered_map>
#include <stack>

using namespace std;
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> neighbors;

    Node() {}

    Node(int _val, vector<Node*> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
};

class Solution {
public:
    Node* cloneGraph(Node* node) {
        if(!node) {
            return node;
        }

        stack<Node*> nodeStack;
        
        unordered_map<Node*,Node*> visited;

        // 克隆根节点
        Node *result = new Node();
        result->val = node->val;
        
        visited[node] = result;
        nodeStack.push(node);
        
        while(!nodeStack.empty()) {
            Node* cur = nodeStack.top();
            nodeStack.pop();
            
            int len = cur->neighbors.size();
            for(int i = 0;i < len;i++) {
                Node * neighbor = cur->neighbors[i];
                if(!visited.count(neighbor)) {
                    // 新建结点
                    Node * newNeighbor = new Node();
                    newNeighbor->val = neighbor->val;
                    visited[cur]->neighbors.push_back(newNeighbor);
                    visited[neighbor] = newNeighbor;
                    nodeStack.push(neighbor);
                } else {
                    visited[cur]->neighbors.push_back(visited[neighbor]);
                }
            }
            
        }
        
        
        return result;
    }

};