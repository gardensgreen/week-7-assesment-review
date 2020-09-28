class QueueArray {
    constructor() {
        this.store = [];
    }

    enqueue(value) {
        this.store.push(value);
    }

    dequeue() {
        this.store.shift();
    }

    peek() {
        return this.store[0];
    }
}
