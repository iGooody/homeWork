class Stack {
    constructor () {
        this.stack = [];
    }

    push(elem) {
        if (this.stack.length >= 10) {
            throw new Error('Stack is overloaded');
        }
        this.stack.push(elem);
    }

    pop() {
        if (this.stack.length === 0) {
            throw new Error('Stack is empty');
        }
        return this.stack.pop();
    }

    peek() {
        if (this.stack.length === 0) {
            return null;
        }
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    toArray() {
        return [...this.stack];
    }

    static fromIterable(iterable) {
        const stack = new Stack();
        for (const item of iterable) {
            stack.push(item);
        }
        return stack;
    }
}
