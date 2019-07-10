#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

class Node {
public:
	int x;
	int y;
	int h;

	
	bool operator <(const Node& n) const {
		return h > n.h;
	}
	
};

int main(void) {

	int row, column;
	cin >> row >> column;

	vector<vector<int>> matrix(row, vector<int>(column, 0));
	priority_queue<Node> nodes;
	vector<vector<int>> len(row, vector<int>(column, 1));
	for (int i = 0; i < row; i++) {
		for (int j = 0; j < column; j++) {
			cin >> matrix[i][j];
			Node node;
			node.x = i;
			node.y = j;
			node.h = matrix[i][j];
			nodes.push(node);
		}
	}

	int nodesLen = nodes.size();

	int result = 0;

	
	// cout << nodesLen << endl; // 25

	for (int i = 0; i < nodesLen; i++) {
		Node node = nodes.top();
		nodes.pop();
		int x = node.x;
		int y = node.y;
		int h = node.h;
		//cout << h << " ";
		// 上下左右遍历
		if (x > 0) {
			if (h < matrix[x - 1][y] && len[x][y] >= len[x - 1][y]) {
				len[x - 1][y] = len[x][y] + 1;
			}
		}
		if (x < row - 1) {
			if (h < matrix[x + 1][y] && len[x][y] >= len[x + 1][y]) {
				len[x + 1][y] = len[x][y] + 1;
			}
		}
		if (y > 0) {
			if (h < matrix[x][y - 1] && len[x][y] >= len[x][y - 1]) {
				len[x][y - 1] = len[x][y] + 1;
			}
		}
		if (y < column - 1) {
			if (h < matrix[x][y + 1] && len[x][y] >= len[x][y + 1]) {
				len[x][y + 1] = len[x][y] + 1;
			}
		}
	}

	for (int i = 0; i < row; i++) {
		for (int j = 0; j < column; j++) {
			result = max(result, len[i][j]);
		}
	}
	cout << result;

	system("pause");
	return 0;
}