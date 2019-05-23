#include <queue>
#include <cmath>
using namespace std;

class Solution {
public:
    int numSquares(int n) {
        
        
        if(n < 4) {
            return n;
        }
        
        queue<int> q;
        
        int result = 0;
        
        q.push(n);
        
        while(!q.empty()) {
            int len = q.size();
            
            for(int i = 0;i < len;i++) {
                int temp = q.front();
                q.pop();


                int j = sqrt(temp);
                for(;j >= 1;j--) {
                    int square = j * j;
                    int cur = temp - square;
                    // 剪枝处理
                    if(cur > 0) {
                        q.push(cur);
                    } else if(cur == 0) {
                        return result + 1;
                    }
                        
                }
            }
            
            
            result++;
        }

        
        return result;
    }


    // answer algorithm
    // Lagrange 四平方定理： 任何一个正整数都可以表示成不超过四个整数的平方之和。
    // 满足四数平方和定理的数n（这里要满足由四个数构成，小于四个不行），必定满足 n=4a(8b+7) n = 4^a(8b + 7)n=4 
    int numSquares_answer(int n) {
        int a=0;
        int b;
        while(a*a<n){            
                b=(int)sqrt(n-(a*a));
                if(a*a+b*b==n){
                    return bool(a) + bool(b);
                }
            
            a++;
        }
        while(n%4==0){
            n/=4;
        }
        if(n%8==7){
            return 4;
        }
        return 3;
    }
};