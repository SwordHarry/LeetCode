#include <vector>
#include <iostream>
#include <string>
using namespace std;

void *bubbleSort(vector<pair<string, int>> &vec) {
	int len = vec.size();
	for (int i = 0; i < len - 1; i++) {
		bool flag = true;
		for (int j = 0; j < len - 1; j++) {
			if (vec[j].second > vec[j + 1].second) {
				flag = false;

				swap(vec[j], vec[j + 1]);
			}
		}
		if (flag) {
			return NULL;
		}
	}
	return NULL;
}

int main(void) {

	// 要排序的人的个数
	int numOfPerson;
	cin >> numOfPerson;

	// 排序方法，0 降序 1 升序
	int typeOfSort;
	cin >> typeOfSort;

	vector<pair<string, int>> vec;

	for (int i = 0; i < numOfPerson; i++) {
		string name;
		int score;

		cin >> name;
		cin >> score;

		pair<string, int> p(name, score);
		vec.push_back(p);
	}

	bubbleSort(vec);

	if (typeOfSort == 0) {
		// 降序输出
		for (int i = numOfPerson - 1; i >= 0; i--) {
			cout << vec[i].first << " " << vec[i].second << endl;
		}
	}
	else {
		// 升序输出
		for (int i = 0; i < numOfPerson; i++) {
			cout << vec[i].first << " " << vec[i].second << endl;
		}
	}


    system("pause");
	return 0;
}