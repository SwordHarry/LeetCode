#include <iostream>
#include <vector>
#include <string>
#include <map>
#include <algorithm>
#include <sstream>
using namespace std;

bool operator > (pair <string, int> & p1, pair <string, int> & p2) {

	return p1.first[0] > p2.first[0];
}

int main(void) {

	map < char, int > m;
	m['A'] = 2;
	m['B'] = 2;
	m['C'] = 2;
	m['D'] = 3;
	m['E'] = 3;
	m['F'] = 3;
	m['G'] = 4;
	m['H'] = 4;
	m['I'] = 4;
	m['J'] = 5;
	m['K'] = 5;
	m['L'] = 5;
	m['M'] = 6;
	m['N'] = 6;
	m['O'] = 6;
	m['P'] = 7;
	m['R'] = 7;
	m['S'] = 7;
	m['T'] = 8;
	m['U'] = 8;
	m['V'] = 8;
	m['W'] = 9;
	m['X'] = 9;
	m['Y'] = 9;


	int count;
	cin >> count;
	map < string, int > m2;

	// 输入并且做初始化处理
	for (int i = 0; i < count; i++) {
		string str;
		cin >> str;

		string strCopy = "";
		int len = str.length();

		for (int j = 0; j < len; j++) {
			if (j == 3) {
				strCopy += "-";
			}
			if (str[j] >= '0' && str[j] <= '9') {
				stringstream ss;
				ss << str[j];
				strCopy += str[j];
			}
			else if (str[j] == '-') {
				continue;
			}
			else {
				stringstream ss;
				ss << m[str[j]];
				strCopy += ss.str();
			}
		}

		if (m2.find(strCopy) == m2.end()) {
			m2.insert(make_pair(strCopy, 1));
		}
		else {
			m2[strCopy]++;
		}
	}

	vector < pair < string, int >> vec;

	map <string, int> ::iterator it = m2.begin();
	while (it != m2.end()) {
		vec.push_back(make_pair(it->first, it->second));
		it++;
	}

	sort(vec.begin(), vec.end());

	int vecLen = vec.size();
	for (int i = 0; i < vecLen; i++) {
		cout << vec[i].first << " " << vec[i].second << endl;
	}

	system("pause");
	return 0;
}