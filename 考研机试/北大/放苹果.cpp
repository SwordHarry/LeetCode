#include <iostream>
using namespace std;

/**
 * 题目描述
把M个同样的苹果放在N个同样的盘子里，允许有的盘子空着不放，问共有多少种不同的分法？（用K表示）5，1，1和1，5，1 是同一种分法。
输入描述:
每行均包含二个整数M和N，以空格分开。1<=M，N<=10。
输出描述:
对输入的每组数据M和N，用一行输出相应的K。
示例1
输入
复制
7 3
输出
复制
8
*/

int plateForApple(int preApple,int apple,int plate) {
    
    int result = 0;
    
    if(apple == 0) {
        if(plate >= 0) {
            return 1;
        } else {
            return 0;
        }
    }
    
    
    for(int i = apple;i > 0;i--) {
        // 后面放的苹果不许比前面的大
        if(i > preApple){
            continue;
        }
        
        result += plateForApple(i,apple - i,plate - 1);
    }
    
    return result;
}


int main(void) {
    
    int apple;
    int plate;
    
    while(cin >> apple >> plate) {
        int result = 0;
        int preApple = apple;
        
        result += plateForApple(preApple,apple,plate);
        
        cout << result;
    }
    
    return 0;
}


// answer algorithm
/**
 * m 个苹果 n 个盘子
 * 对 n 进行讨论
 * 若 n > m 则 盘子数多于苹果，即必有盘子不放苹果
 * dp(m,m) = dp(m,n)
 * 
 * 若 n <= m 则有以下两种情况
 * 1. 每个盘子都将至少放一个苹果，即 dp(m - n,n)
 * 2. 至少一个盘子不放苹果，为空 =，即 dp(m,n - 1)
 * 
 * 而每种情况为上述两种情况之和
 * dp(m,n) = dp(m-n,n) + dp(m,n - 1);
 * 
*/
int dp(int m,int n) {

    if(m == 0 || n == 1) {
        return 1;
    }

    int result = 0;
    if(n > m) {
        result += dp(m,m);
    } else {
        result += dp(m,n - 1) + dp(m - n,n);
    }

    return result;
}