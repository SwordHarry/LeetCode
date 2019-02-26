/**
 * 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。

获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。

进阶:

你是否可以在 O(1) 时间复杂度内完成这两种操作？

示例:

LRUCache cache = new LRUCache( 2  缓存容量  );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4
 * 
 */
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {

    // 初始化 头尾指针
    this.end = {
        prev: null
    };
    this.head = {
        next: null
    };
    this.end.prev = this.head;
    this.head.next = this.end;

    // 哈希表
    this.map = {};

    // 判断是否满容量
    this.capacity = capacity;
    this.len = 0;

};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    const map = this.map;
    let val = -1;

    // 如果有，这里需要注意 map[key] 是否为头 的情况！否则就提上来，是就不需要
    if (map[key]) {
        const head = this.head;
        if (map[key] !== head.next) {

            const headNext = head.next;
            const keyPrev = map[key].prev;
            const keyNext = map[key].next;

            head.next = map[key];
            headNext.prev = map[key];
            map[key].prev = head;
            map[key].next = headNext;
            keyNext.prev = keyPrev;
            keyPrev.next = keyNext;

        }



        val = map[key].val;
    }

    return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    const map = this.map;
    const head = this.head;
    const end = this.end;
    if (map[key]) {
        if (map[key] !== head.next) {
            // 只要 key 结点不是第一个就提上来
            const headNext = head.next;
            const keyPrev = map[key].prev;
            const keyNext = map[key].next;

            head.next = map[key];
            headNext.prev = map[key];
            map[key].prev = head;
            map[key].next = headNext;
            keyNext.prev = keyPrev;
            keyPrev.next = keyNext;
        }
        map[key].val = value;
    } else {

        // 执行常规操作，将 key 结点放到头部，并且其余结点后移
        const node = {
            key: key,
            val: value,
            prev: null,
            next: null
        }
        const temp = head.next;

        head.next = node;
        node.prev = head;
        node.next = temp;
        temp.prev = node;
        map[key] = node;

        if (this.len === this.capacity) {
            // 清除 end 前面的一个节点
            let endNode = end.prev;
            end.prev = end.prev.prev;
            end.prev.next = end;

            // 清除节点
            endNode.prev = null;
            endNode.next = null;
            map[endNode.key] = null;
            endNode = null;
        } else {
            this.len++;
        }

    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */