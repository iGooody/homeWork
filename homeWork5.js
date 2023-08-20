class Stack {
    constructor(maxSize = 10) {
        if (!Number.isInteger(maxSize) || maxSize <= 0) {
            throw new Error('Неверный параметр максимального размера стэка');
        }
        this.maxSize = maxSize;
        this.items = [];
    }

    push(elem) {
        if (this.items.length >= this.maxSize) {
            throw new Error('Стэк переполнен');
        }
        this.items[this.items.length] = elem;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Стэк пуст');
        }
        const poppedItem = this.items[this.items.length - 1];
        this.items.length = this.items.length - 1;
        return poppedItem;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    toArray() {
        return [...this.items];
    }

    static fromIterable(iterable) {
        if (!Symbol.iterator in Object(iterable)) {
            throw new Error('Ввод не итерируемый');
        }
        const stack = new Stack(iterable.length);
        for (const item of iterable) {
            stack.push(item);
        }
        return stack;
    }
}

module.exports = { Stack };
