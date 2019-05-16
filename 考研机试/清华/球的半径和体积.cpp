#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;

class Node {
    public:
    Node(double _x, double _y, double _z) {
        x = _x;
        y = _y;
        z = _z;
    }
    double x;
    double y;
    double z;
};

double getDistance(Node node1,Node node2) {
    double temp = pow((node1.x - node2.x),2) + pow((node1.y - node2.y),2) + pow((node1.z - node2.z),2);
    return sqrt(temp);
}
double getVolume(double r) {
    return 4.0/3.0*pow(r,3)*acos(-1);
}

int main(void) {
    
    double x0,y0,z0;
    double x1,y1,z1;
    
    while(cin >> x0 >> y0 >> z0 >> x1 >> y1 >> z1) {
        Node ballPoint(x0,y0,z0);
        Node node(x1,y1,z1);
        double distance = getDistance(ballPoint,node);
        
        // setiosflags(ios::fixed) << setprecision(n) 精确到小数点后 n 位
        cout << setiosflags(ios::fixed) << setprecision(3) 
            << distance << " " << getVolume(distance) << endl;
    }
    
    return 0;
}

