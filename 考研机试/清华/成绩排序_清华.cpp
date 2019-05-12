#include <vector>
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

bool highSort(pair<string,int> p1,pair<string,int> p2) {
    return p1.second < p2.second;
}

bool lowSrot(pair<string,int> p1,pair<string,int> p2) {
    return p1.second > p2.second;
}

int main(void) {

	// 要排序的人的个数
	int numOfPerson;

	// 排序方法，0 降序 1 升序
	int typeOfSort;
    
    while(cin >> numOfPerson >> typeOfSort) {
        vector<pair<string, int>> vec;

        for (int i = 0; i < numOfPerson; i++) {
            string name;
            int score;

            cin >> name >> score;

            pair<string, int> p(name, score);
            vec.push_back(p);
        }

        if(typeOfSort == 0) {
            stable_sort(vec.begin(),vec.end(),lowSrot);
        } else {
            stable_sort(vec.begin(),vec.end(),highSort);
        }
        


        for (int i = 0; i < numOfPerson; i++) {
                cout << vec[i].first << " " << vec[i].second << endl;
        }
    }
	return 0;
}