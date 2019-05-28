class MyHashSet {
public:
    /** Initialize your data structure here. */
    MyHashSet() {
        
    }
    
    void add(int key) {
        s[key] = 1;
    }
    
    void remove(int key) {
        s[key] = 0;
    }
    
    /** Returns true if this set contains the specified element */
    bool contains(int key) {
        return s[key] == 1;
    }
private:
    int s[100001];
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * MyHashSet* obj = new MyHashSet();
 * obj->add(key);
 * obj->remove(key);
 * bool param_3 = obj->contains(key);
 */