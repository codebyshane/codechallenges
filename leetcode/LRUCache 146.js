/*
LRU CACHE

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

    LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
    int get(int key) Return the value of the key if the key exists, otherwise return -1.
    void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

The functions get and put must each run in O(1) average time complexity.

 

Example 1:

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4

 

Constraints:

    1 <= capacity <= 3000
    0 <= key <= 104
    0 <= value <= 105
    At most 2 * 105 calls will be made to get and put.
*/

//create a class for creating a doubly-linked list
const Node = function (key, value) {
    this.key = key; 
    this.value = value;
    this.prev = null;
    this.next = null;
};

// create a class for the cache with: 
const LRUCache = function (capacity) {
    // the capacity
    this.capacity = capacity;
    // a hashmap
    this.cache = new Map();
    // two dummy nodes (old & recent)
    this.old = new Node('old', 0); // LRUCache.old = Node(key: 'old', value: 0)
    this.recent = new Node('recent', 0); // LRUCache.recent = Node(key: 'recent', value: 0)
    this.old.next = this.recent; // change old Node next value to recent Node
    this.recent.prev = this.old; // change recent Node prev value to old Node
};

// create a remove helper method that:
LRUCache.prototype.remove = function (node) {
    // take out node from list
    prev = node.prev; 
    nxt = node.next;
    // reconnect adjacent pointers
    prev.next = nxt;
    nxt.prev = prev;
};

// create an insert helper method that:
LRUCache.prototype.insert = function (node) {
    prev = this.recent.prev; // old Node
    nxt = this.recent; // new Node
    // 
    prev.next = node;
    nxt.prev = node;
    node.next = nxt;
    node.prev = prev;
};

// create a get method that:
LRUCache.prototype.get = function (key) {
    // if the node exists
    if (this.cache.has(key)) {
        // removes the node from list
        this.remove(this.cache.get(key));
        // then inserts the node from list
        this.insert(this.cache.get(key));
        // returns the node if it exists
        return this.cache.get(key).value;
    }
    // if the node does not exist, return -1
    return -1;
};

// create put method that:
LRUCache.prototype.put = function (key, value) {
    //if the node exists
    if (this.cache.has(key)) {
        // removes the node from the list
        this.remove(this.cache.get(key));
    }
    // update the cache value
    this.cache.set(key, new Node(key, value));
    // inserts updated cache value into list
    this.insert(this.cache.get(key));

    // if the cache size is too big
    if (this.cache.size > this.capacity) {
        const lru = this.old.next; // oldest node is lru
        // remove oldest node from the list or remove lru
        this.remove(lru);
        // delete the cache of the lru
        this.cache.delete(lru.key);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */