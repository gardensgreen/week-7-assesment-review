class StackArray {
    constructor() {
        this.store = [];
    }

    push(value) {
        this.store.push(value);
    }

    pop() {
        this.store.pop(value);
    }

    peek() {
        return this.store[this.store.length - 1];
    }
}
