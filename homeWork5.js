class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor(maxSize = 10) {
        if (!Number.isInteger(maxSize) || maxSize <= 0) {
            throw new Error('Неверный параметр максимального размера стека');
        }

        this.top = null;
        this.size = 0;
        this.maxSize = maxSize;
    }

    push(data) {
        if (this.size >= this.maxSize) {
            throw new Error('Стек полон');
        }

        const newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (this.top === null) {
            throw new Error('Стек пуст');
        }
        const poppedNode = this.top;
        this.top = poppedNode.next;
        this.size--;
        return poppedNode.data;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Стек пуст');
        }
        return this.top.data;
    }

    isEmpty() {
        return this.top === null;
    }

    toArray() {
        const result = [];
        let current = this.top;
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }

    static fromIterable(iterable) {
        if (!Symbol.iterator in Object(iterable)) {
            throw new Error('Ввод не итерируемый');
        }

        const stack = new Stack();
        for (const item of iterable) {
            stack.push(item);
        }
        return stack;
    }
}

module.exports = { Stack };
