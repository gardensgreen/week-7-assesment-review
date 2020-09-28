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
        let current = this.tail;
        if (!this.head) {
            return undefined;
        } else if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = current.previous;
            this.tail.next = null;
        }

        this.length--;
        return current.value;
    }

    addToHead(val) {
        let temp = new Node(val);
        if (this.head) {
            temp.next = this.head;
            this.head.previous = temp;
        } else {
            this.tail = temp;
        }

        this.head = temp;
        this.length++;
        return this;
    }

    removeHead() {
        if (!this.head) return undefined;
        const currentHead = this.head;
        this.head = currentHead.next;
        if (this.head) {
            this.head.previous = null;
        } else {
            this.tail = null;
        }
        this.length--;
        return currentHead.value;
    }

    contains(target) {
        let node = this.head;
        while (node) {
            if (node.value === target) return true;
            node = node.next;
        }
        return false;
    }

    get(index) {}

    set(index, val) {}

    insert(index, val) {}

    remove(index) {}

    size() {}

    peakHead() {}

    peakTail() {}
}
