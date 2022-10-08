// Create a stack using javascript array and implement the functions….. 
// push(),pop(),isEmpty(),top()

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        return this.items.push(element);
    }

    pop() {
        if (this.items.length > 0) {
            return this.items.pop();
        }
    }

    top() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(4);
stack.push(8);

console.log(stack.items);

stack.pop();
console.log(stack.items);

console.log(stack.top());

console.log(stack.isEmpty());