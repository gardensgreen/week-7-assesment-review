class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToTail(val) {
        let temp = new Node(val);
        if (!this.tail) {
            this.head = temp;
        } else {
            this.tail.next = temp;
            temp.previous = this.tail;
        }
        this.tail = temp;
        this.length++;
        return this;
    }

    removeTail() {
        if (!this.head) {
            return undefined;
        } else if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.previous;
            this.tail.next = null;
        }
        this.length--;
    }

    addToHead(val) {}

    removeHead() {}

    contains(target) {}

    get(index) {}

    set(index, val) {}

    insert(index, val) {}

    remove(index) {}

    size() {}

    peakHead() {}

    peakTail() {}
}
